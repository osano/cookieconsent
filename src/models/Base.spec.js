"use strict"

const Base = require( "./Base" ).default

describe( "Base Class", () => {
  test( "instantiates", () => {
    const base = new Base()
    expect( base ).toBeInstanceOf( Base )
    expect( base ).toBeInstanceOf( Object )
    expect( base ).toHaveProperty( "on" )
    expect( base ).toHaveProperty( "emit" )
    expect( base ).toHaveProperty( "options" )
    expect( base.options ).toBeInstanceOf( Object )
  })
})