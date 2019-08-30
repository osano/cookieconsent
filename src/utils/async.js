"use strict"

export const getScript = ( url, callback, timeout ) => {
  let timeoutIdx
  const scriptTag = document.createElement('script')

  scriptTag.type = 'text/' + (url.type || 'javascript')
  scriptTag.src = url.src || url
  scriptTag.async = false

  scriptTag.onreadystatechange = s.onload = function() {
    // this code handles two scenarios, whether called by onload or onreadystatechange
    const state = scriptTag.readyState

    clearTimeout(timeoutIdx)

    if (!callback.done && (!state || /loaded|complete/.test(state))) {
      callback.done = true
      callback()
      scriptTag.onreadystatechange = scriptTag.onload = null
    }
  }

  document.body.appendChild(scriptTag)

  // You can't catch JSONP Errors, because it's handled by the script tag
  // one way is to use a timeout
  timeoutIdx = setTimeout(function() {
    callback.done = true
    callback()
    scriptTag.onreadystatechange = scriptTag.onload = null
  }, timeout)
}

export const makeAsyncRequest = ( url, onComplete, timeout, postData, requestHeaders ) => {
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