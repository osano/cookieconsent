"use strict"

import Base from "./Base"
import defaultOptions from "../options/location"
import { isPlainObject } from "../utils"

function getScript(url, callback, timeout) {
  let timeoutIdx
  const s = document.createElement('script')

  s.type = 'text/' + (url.type || 'javascript')
  s.src = url.src || url
  s.async = false

  s.onreadystatechange = s.onload = function() {
    // this code handles two scenarios, whether called by onload or onreadystatechange
    const state = s.readyState

    clearTimeout(timeoutIdx)

    if (!callback.done && (!state || /loaded|complete/.test(state))) {
      callback.done = true
      callback()
      s.onreadystatechange = s.onload = null
    }
  }

  document.body.appendChild(s)

  // You can't catch JSONP Errors, because it's handled by the script tag
  // one way is to use a timeout
  timeoutIdx = setTimeout(function() {
    callback.done = true
    callback()
    s.onreadystatechange = s.onload = null
  }, timeout)
}

function makeAsyncRequest(
  url,
  onComplete,
  timeout,
  postData,
  requestHeaders
) {
  const xhr = new (window.XMLHttpRequest || window.ActiveXObject)(
    'MSXML2.XMLHTTP.3.0'
  )

  xhr.open(postData ? 'POST' : 'GET', url, 1)

  xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

  if (Array.isArray(requestHeaders)) {
    for (let i = 0, l = requestHeaders.length; i < l; ++i) {
      const split = requestHeaders[i].split(':', 2)
      xhr.setRequestHeader(
        split[0].replace(/^\s+|\s+$/g, ''),
        split[1].replace(/^\s+|\s+$/g, '')
      )
    }
  }

  if (typeof onComplete == 'function') {
    xhr.onreadystatechange = function() {
      if (xhr.readyState > 3) {
        onComplete(xhr)
      }
    }
  }

  xhr.send(postData)
}

// An object containing all the location services we have already set up.
// When using a service, it could either return a data structure in plain text (like a JSON object) or an executable script
// When the response needs to be executed by the browser, then `isScript` must be set to true, otherwise it won't work.

// When the service uses a script, the chances are that you'll have to use the script to make additional requests. In these
// cases, the services `callback` property is called with a `done` function. When performing async operations, this must be called
// with the data (or Error), and `cookieconsent.locate` will take care of the rest

export default class Location extends Base {
  constructor( options ) {
    super( defaultOptions, options )
    this.currentServiceIndex = -1 // the index (in options) of the service we're currently using
  }

  getNextService() {
    let service
    do {
      service = this.getServiceByIdx(++this.currentServiceIndex)
    } while (
      this.currentServiceIndex < this.options.services.length &&
      !service
    )

    return service
  }

  getServiceByIdx(idx) {
    // This can either be the name of a default locationService, or a function.
    const serviceOption = this.options.services[idx]

    // If it's a string, use one of the location services.
    if (typeof serviceOption === 'function') {
      const dynamicOpts = serviceOption()
      return dynamicOpts.name ? 
        Object.assign(
          {},
          dynamicOpts,
          this.options.serviceDefinitions[ dynamicOpts.name ]( dynamicOpts )
        ) : dynamicOpts
    }

    // If it's a string, use one of the location services.
    if (typeof serviceOption === 'string') {
      return this.options.serviceDefinitions[serviceOption]()
    }

    // If it's an object, assume {name: 'ipinfo', ...otherOptions}
    // Allows user to pass in API keys etc.
    if (isPlainObject(serviceOption)) {
      return this.options.serviceDefinitions[serviceOption.name](
        serviceOption
      )
    }

    return null
  }

  // This runs the service located at index `currentServiceIndex`.
  // If the service fails, `runNextServiceOnError` will continue trying each service until all fail, or one completes successfully
  locate(complete, error) {
    const service = this.getNextService()

    if (!service) {
      error(new Error('No services to run'))
      return
    }

    this.callbackComplete = complete
    this.callbackError = error

    this.runService(service, this.runNextServiceOnError.bind(this))
  }

  // Potentially adds a callback to a url for jsonp.
  setupUrl(service) {
    const serviceOpts = this.getCurrentServiceOpts()
    return service.url.replace(/\{(.*?)\}/g, function(_, param) {
      if (param === 'callback') {
        const tempName = 'callback' + Date.now()
        window[tempName] = function(res) {
          service.__JSONP_DATA = JSON.stringify(res)
        }
        return tempName
      }
      if (param in serviceOpts.interpolateUrl) {
        return serviceOpts.interpolateUrl[param]
      }
    })
  }

  // requires a `service` object that defines at least a `url` and `callback`
  runService(service, complete) {
    // basic check to ensure it resembles a `service`
    if (!service || !service.url || !service.callback) {
      return
    }

    // we call either `getScript` or `makeAsyncRequest` depending on the type of resource
    const requestFunction = service.isScript ? getScript : makeAsyncRequest

    // both functions have similar signatures so we can pass the same arguments to both
    requestFunction(
      this.setupUrl(service),
      xhr => {
        // if `!xhr`, then `getScript` function was used, so there is no response text
        let responseText = xhr ? xhr.responseText : ''

        // if the resource is a script, then this function is called after the script has been run.
        // if the script is JSONP, then a time defined function `callback_{Date.now}` has already
        // been called (as the JSONP callback). This callback sets the __JSONP_DATA property
        if (service.__JSONP_DATA) {
          responseText = service.__JSONP_DATA
          delete service.__JSONP_DATA
        }

        // call the service callback with the response text (so it can parse the response)
        this.runServiceCallback.call(this, complete, service, responseText)
      },
      this.options.timeout,
      service.data,
      service.headers
    )

    // `service.data` and `service.headers` are optional (they only count if `!service.isScript` anyway)
  }

  // The service request has run (and possibly has a `responseText`) [no `responseText` if `isScript`]
  // We need to run its callback which determines if its successful or not
  // `complete` is called on success or failure
  runServiceCallback( complete, service, responseText ) {
    // this is the function that is called if the service uses the async callback in its handler method
    const serviceResultHandler = asyncResult => {
      // if `result` is a valid value, then this function shouldn't really run
      // even if it is called by `service.callback`
      if (!result) {
        this.onServiceResult( complete, asyncResult)
      }
    }

    // the function `service.callback` will either extract a country code from `responseText` and return it (in `result`)
    // or (if it has to make additional requests) it will call a `done` callback with the country code when it is ready
    const result = service.callback(serviceResultHandler, responseText)

    if (result) {
      this.onServiceResult( complete, result )
    }
  }

  // This is called with the `result` from `service.callback` regardless of how it provided that result (sync or async).
  // `result` will be whatever is returned from `service.callback`. A service callback should provide an object with data
  onServiceResult(complete, result) {
    // convert result to nodejs style async callback
    if (result instanceof Error || (result && result.error)) {
      complete.call(this, result, null)
    } else {
      complete.call(this, null, result)
    }
  }

  // if `err` is set, the next service handler is called
  // if `err` is null, the `onComplete` handler is called with `data`
  runNextServiceOnError(err, data) {
    if (err) {
      this.logError(err)

      const nextService = this.getNextService()

      if (nextService) {
        this.runService(nextService, this.runNextServiceOnError.bind(this))
      } else {
        this.completeService.call(
          this,
          this.callbackError,
          new Error('All services failed')
        )
      }
    } else {
      this.completeService.call(this, this.callbackComplete, data)
    }
  }

  getCurrentServiceOpts() {
    const val = this.options.services[this.currentServiceIndex]

    if (typeof val == 'string') {
      return {name: val}
    } else if (typeof val == 'function') {
      return val()
    }else if (isPlainObject(val)) {
      return val
    } else {
      return {}
    }
  }

  // calls the `onComplete` callback after resetting the `currentServiceIndex`
  completeService(fn, data) {
    this.currentServiceIndex = -1

    fn && fn(data)
  }

  logError(err) {
    console.warn(
      `The service[${this.currentServiceIndex}] (${this.getServiceByIdx(idx).url}) responded with the following error`,
       err
    )
  }
}