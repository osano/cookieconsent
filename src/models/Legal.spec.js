"use strict"

const Legal = require( "./Legal" ).default
const Base = require( "./Base" ).default
const defaultOptions = require( "../options/legal" ).default

const isLegal = legal => (
  expect( legal ).toBeInstanceOf( Object ),
  expect( legal ).toBeInstanceOf( Base ),
  expect( legal ).toBeInstanceOf( Legal ),
  expect( legal ).toHaveProperty( "get" ),
  expect( legal ).toHaveProperty( "applyLaw" ),
  expect( legal.options ).toBeInstanceOf( Object )
)
const hasCorrectOptions = ( legal, expectedes ) => (
  Object.entries( expectedes ).forEach( ( [ key, value ] ) => {
    test( "`" + key + "`", () => expect( legal.options[ key ] ).toBe( value ) )
  })
)

describe( "Legal Class", () => {
  describe( "as default" , () => {
    const legal = new Legal()
    test("instantiates", () => isLegal( legal ) )
    describe( "has the correct options", () => hasCorrectOptions( legal, defaultOptions ) )
  })
  describe( "with custom options", () => {
    const options = {
      ...defaultOptions,
      regionalLaw: false,
      hasLaw: [ 'US' ]
    }
    const legal = new Legal( options )
    test("instantiates", () => isLegal( legal ) )
    describe( "has the correct options", () => hasCorrectOptions( legal, options ) )
  })
})
