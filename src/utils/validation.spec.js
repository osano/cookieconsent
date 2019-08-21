"use strict"

import {
  isValidStatus,
  isPlainObject,
  isMobile,
} from "./validation"

describe( "Utils::Cookie", () => {
  describe( "All exports are available" , () => {
    test( "isValidStatus", () => expect( isValidStatus ).toBeInstanceOf( Function ) )
    test( "isPlainObject", () => expect( isPlainObject ).toBeInstanceOf( Function ) )
    test( "isMobile", () => expect( isMobile ).toBeInstanceOf( Function ) )
  })
})