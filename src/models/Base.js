"use strict"

import EventEmitter from "events"

const emitter = new EventEmitter()

const loopProperties = overwrites => (obj, [key, value]) => {
  if (overwrites instanceof Object && overwrites.hasOwnProperty(key) ) {
    obj[key] = overwrites[key] instanceof Object && !overwrites[key] instanceof Array
                ? value
                : value instanceof Object && !value instanceof Array
                ? Object.entries(value).reduce(loopProperties(overwrites[key]), {})
                : overwrites[key]
  } else {
    obj[key] = value
  }
  return obj
}

const mergeOptions = ( defaults, overwrites ) =>
  Object.entries(defaults).reduce(loopProperties(overwrites), {})

export default class Base {
  constructor( defaultOptions = {}, options = {} ){
    this.options = mergeOptions( defaultOptions, options )
    this.on = emitter.on.bind( emitter )
    this.emit = emitter.emit.bind( emitter )
  }
}