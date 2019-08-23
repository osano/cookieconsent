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
  expect( cc ).toHaveProperty( "destroy" ),
  expect( cc ).toHaveProperty( "clearStatuses" )
)

describe( "CookieConsent Class", () => {
  describe( "as default" , () => {
    const cc = new CookieConsent()
    test("instantiates", () => isCookieConsent( cc ) )
    describe( "has constants for statuses", () => {
      test( "DENY", () => expect( CookieConsent.DENY ).toEqual( "DENY" ) )
      test( "ALLOW", () => expect( CookieConsent.ALLOW ).toEqual( "ALLOW" ) )
      test( "DISMISS", () => expect( CookieConsent.DISMISS ).toEqual( "DISMISS" ) )
    })
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
