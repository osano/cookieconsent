"use strict"

import { mergeOptions } from "../utils"
import EventEmitter from "events"

const emitter = new EventEmitter()

export default class Base {
  constructor( defaultOptions = {}, options = {} ){
    this.options = mergeOptions( defaultOptions, options )
    this.on = emitter.on.bind( emitter )
    this.emit = emitter.emit.bind( emitter )
  }
}