"use strict"

import {
  getCookie,
  setCookie,
  interpolateString,
  throttle,
  hash,
  normalizeHex,
  getContrast,
  getLuminance,
  getHoverColor,
  traverseDOMPath,
  addCustomStylesheet,
  isValidStatus,
  isPlainObject,
  isMobile,
  getScript,
  makeAsyncRequest
} from "./"

describe( "Utils::Index", () => {
  describe( "All exports are available" , () => {
    test( "getCookie", () => expect( getCookie ).toBeInstanceOf( Function ) )
    test( "setCookie", () => expect( setCookie ).toBeInstanceOf( Function ) )
    test( "interpolateString", () => expect( interpolateString ).toBeInstanceOf( Function ) )
    test( "throttle", () => expect( throttle ).toBeInstanceOf( Function ) )
    test( "hash", () => expect( hash ).toBeInstanceOf( Function ) )
    test( "normalizeHex", () => expect( normalizeHex ).toBeInstanceOf( Function ) )
    test( "getContrast", () => expect( getContrast ).toBeInstanceOf( Function ) )
    test( "getLuminance", () => expect( getLuminance ).toBeInstanceOf( Function ) )
    test( "getHoverColor", () => expect( getHoverColor ).toBeInstanceOf( Function ) )
    test( "traverseDOMPath", () => expect( traverseDOMPath ).toBeInstanceOf( Function ) )
    test( "addCustomStylesheet", () => expect( addCustomStylesheet ).toBeInstanceOf( Function ) )
    test( "isValidStatus", () => expect( isValidStatus ).toBeInstanceOf( Function ) )
    test( "isPlainObject", () => expect( isPlainObject ).toBeInstanceOf( Function ) )
    test( "isMobile", () => expect( isMobile ).toBeInstanceOf( Function ) )
    test( "getScript", () => expect( getScript ).toBeInstanceOf( Function ) )
    test( "makeAsyncRequest", () => expect( makeAsyncRequest ).toBeInstanceOf( Function ) )
  })
})