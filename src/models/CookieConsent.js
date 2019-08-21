"use strict"

import Base from "./Base"
import Legal from "./Legal"
import Location from "./Location"
import Popup from "./Popup"

import { categories } from "../constants"
import { getCookie, isValidStatus } from "../utils"

// This function initializes the app by combining the use of the Popup, Locator and Law modules
// You can string together these three modules yourself however you want, by writing a new function.

export default class CookieConsent extends Base {
  constructor( options = {} ){
    super( options )

    const answers = categories.map( category => {
      const answer = getCookie('cookieconsent_status_'+category)
      return isValidStatus(answer) ? { [category]: answer } : undefined
    }).filter(obj => obj ? obj[Object.keys(obj)[0]] : false)

    // if they have already answered
    if (answers.length > 0) {
      setTimeout( () => this.emit( "initialized", answers ) )
    } else if ( this.options.legal && this.options.legal.countryCode ) {
      this.initializationComplete( { code: this.options.legal.countryCode } )
    } else if ( this.options.location ) {
      new Location( this.options.location ).locate( this.initializationComplete, this.initializationError )
    } else {
      this.initializationComplete({})
    }
  }
  initializationComplete( result ){
    if (result.code) {
      this.options = new Legal(this.options.legal).applyLaw( this.options, result.code )
    }
    setTimeout( () => this.emit("initialized", new Popup( this.options ) ), 0 )
  }
  initializationError( error ) {
    setTimeout( () => this.emit( "error", error, new Popup( this.options ) ), 0 )
  }
}