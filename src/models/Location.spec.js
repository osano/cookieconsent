"use strict"

const Location = require( "./Location" ).default
const Base = require( "./Base" ).default
const defaultOptions = require( "../options/location" ).default

const isLocation = location => (
  expect( location ).toBeInstanceOf( Object ),
  expect( location ).toBeInstanceOf( Base ),
  expect( location ).toBeInstanceOf( Location ),
  expect( location ).toHaveProperty( "getNextService" ),
  expect( location ).toHaveProperty( "getServiceByIdx" ),
  expect( location ).toHaveProperty( "locate" ),
  expect( location ).toHaveProperty( "setupUrl" ),
  expect( location ).toHaveProperty( "runService" ),
  expect( location ).toHaveProperty( "runServiceCallback" ),
  expect( location ).toHaveProperty( "onServiceResult" ),
  expect( location ).toHaveProperty( "runNextServiceOnError" ),
  expect( location ).toHaveProperty( "getCurrentServiceOpts" ),
  expect( location ).toHaveProperty( "completeService" ),
  expect( location ).toHaveProperty( "logError" ),
  expect( location.options ).toBeInstanceOf( Object )
)
const hasCorrectOptions = ( location, expectedes ) => (
  Object.entries( expectedes ).forEach( ( [ key, value ] ) => {
    test( "`" + key + "`", () => expect( location.options[ key ] ).toBe( value ) )
  })
)

describe( "Location Class", () => {
  describe( "as default" , () => {
    const location = new Location()
    test("instantiates", () => isLocation( location ) )
    describe( "has the correct options", () => hasCorrectOptions( location, defaultOptions ) )
  })
  describe( "with custom options", () => {
    const options = {
      ...defaultOptions,
      timeout: 3000,
      services: [ 'ipinfo2' ]
    }
    const location = new Location( options )
    test("instantiates", () => isLocation( location ) )
    describe( "has the correct options", () => hasCorrectOptions( location, options ) )
  })
})
