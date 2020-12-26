"use strict"

const CookieConsent = require( "./models/CookieConsent" ).default
const CC = require( "./" ).default

describe( "Plugin", () => {
  test( "instantiates without errors", () => {
    expect( new CC() ).toBeInstanceOf( CookieConsent )
  })
})

