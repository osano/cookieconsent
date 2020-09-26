"use strict"

import Base from "./Base"
import defaultOptions from "../options/legal"

export default class Legal extends Base {
  constructor( options = {} ) {
    super( defaultOptions, options )
  }
  get( countryCode ){
    return {
      hasLaw: this.options.hasLaw.includes(countryCode),
      revokable: this.options.revokable.includes(countryCode),
      explicitAction: this.options.explicitAction.includes(countryCode)
    }
  }
  applyLaw( options, countryCode ){
    const country = this.get(countryCode)

    if (!country.hasLaw) {
      // The country has no cookie law
      options.enabled = false
      this.emit( "noCookieLaw", countryCode, country )
    }

    if (this.options.regionalLaw) {
      if (country.revokable) {
        // We must provide an option to revoke consent at a later time
        options.revokable = true
      }

      if (country.explicitAction) {
        // The user must explicitly click the consent button
        options.dismissOnScroll = false
        options.dismissOnTimeout = false
      }
    }
    return options
  }
}