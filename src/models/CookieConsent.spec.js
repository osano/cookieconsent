"use strict"

const CookieConsent = require( "./CookieConsent" ).default
const Base = require( "./Base" ).default

const isCookieConsent = cc => (
  expect( cc ).toBeInstanceOf( Object ),
  expect( cc ).toBeInstanceOf( Base ),
  expect( cc ).toBeInstanceOf( CookieConsent ),
  expect( cc ).toHaveProperty( "initializationComplete" ),
  expect( cc ).toHaveProperty( "initializationError" ),
  expect( cc ).toHaveProperty( "getCountryLaws" ),
  expect( cc ).toHaveProperty( "close" ),
  expect( cc ).toHaveProperty( "revokeChoice" ),
  expect( cc ).toHaveProperty( "isOpen" ),
  expect( cc ).toHaveProperty( "open" ),
  expect( cc ).toHaveProperty( "toggleRevokeButton" ),
  expect( cc ).toHaveProperty( "setStatuses" ),
  expect( cc ).toHaveProperty( "clearStatuses" ),
  expect( cc ).toHaveProperty( "destroy" )
)

describe( "CookieConsent Class", () => {
  describe( "has constants for statuses", () => {
    test( "DENY", () => expect( CookieConsent.DENY ).toEqual( "DENY" ) )
    test( "ALLOW", () => expect( CookieConsent.ALLOW ).toEqual( "ALLOW" ) )
    test( "DISMISS", () => expect( CookieConsent.DISMISS ).toEqual( "DISMISS" ) )
  })
  describe( "as default" , () => {
    const cc = new CookieConsent()
    test("instantiates", () => isCookieConsent( cc ) )
  })
  describe( "with custom type", () => {
    const type = "categories"
    const cc = new CookieConsent({ type })
    test("instantiates", () => isCookieConsent( cc ) )
    test( "options have the correct type", () => {
      expect( cc.options.type ).toEqual( type )
    })
  })
})
