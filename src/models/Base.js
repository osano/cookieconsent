"use strict"

import EventEmitter from "events"

const emitter = new EventEmitter()

const loopProperties = overwrites => (obj, [key, value]) => {
  if (overwrites instanceof Object && overwrites[key] ) {
    obj[key] = 
      value instanceof Object && !value instanceof Array
      ? Object.entries(value).reduce(loopProperties(overwrites[key]), {})
      : overwrites[key] instanceof Object && !overwrites[key] instanceof Array
      ? value
      : overwrites[key]
  } else {
      obj[key] = value
  }
  return obj
}

export default class Base {
  constructor( deafultOptions, options = {} ){
    this.options = this.mergeOptions( deafultOptions, options )
    this.on = emitter.on.bind( emitter )
    this.emit = emitter.emit.bind( emitter )
  }
  mergeOptions( defaults, overwrites ){
    return Object.entries(defaults).reduce(loopProperties(overwrites), {})
  }
}