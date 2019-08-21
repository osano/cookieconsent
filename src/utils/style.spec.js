"use strict"

import {
  normaliseHex,
  getContrast,
  getLuminance,
  getHoverColor,
} from "./style"

describe( "Utils::Cookie", () => {
  describe( "All exports are available" , () => {
    test( "normaliseHex", () => expect( normaliseHex ).toBeInstanceOf( Function ) )
    test( "getContrast", () => expect( getContrast ).toBeInstanceOf( Function ) )
    test( "getLuminance", () => expect( getLuminance ).toBeInstanceOf( Function ) )
    test( "getHoverColor", () => expect( getHoverColor ).toBeInstanceOf( Function ) )
  })
})