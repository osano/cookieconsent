"use strict"

import {
  normalizeHex,
  getContrast,
  getLuminance,
  getHoverColor,
} from "./style"

describe( "Utils::Style", () => {
  describe( "All exports are available" , () => {
    test( "normalizeHex", () => expect( normalizeHex ).toBeInstanceOf( Function ) )
    test( "getContrast", () => expect( getContrast ).toBeInstanceOf( Function ) )
    test( "getLuminance", () => expect( getLuminance ).toBeInstanceOf( Function ) )
    test( "getHoverColor", () => expect( getHoverColor ).toBeInstanceOf( Function ) )
  })
  test( "normalizeHex returns propper value", () => {
    expect( normalizeHex( "#123DEF" ) ).toEqual( "123DEF" ) 
  })
  test( "getContrast returns propper value", () => {
    expect( getContrast( "#123DEF" ) ).toEqual( "#fff" ) 
  })
  test( "getLuminance returns propper value", () => {
    expect( getLuminance( "#123DEF" ) ).toEqual( "#3863ff" ) 
  })
  test( "getHoverColor returns propper value", () => {
    expect( getHoverColor( "#123DEF" ) ).toEqual( "#3863ff" ) 
  })
})