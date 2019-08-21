"use strict"

import {
  getCookie,
  setCookie
} from "./cookie"

describe( "Utils::Cookie", () => {
  describe( "All exports are available" , () => {
    test( "getCookie", () => expect( getCookie ).toBeInstanceOf( Function ) )
    test( "setCookie", () => expect( setCookie ).toBeInstanceOf( Function ) )
  })
})