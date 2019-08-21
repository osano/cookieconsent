"use strict"

import {
  traverseDOMPath,
  addCustomStylesheet
} from "./dom"

describe( "Utils::Cookie", () => {
  describe( "All exports are available" , () => {
    test( "traverseDOMPath", () => expect( traverseDOMPath ).toBeInstanceOf( Function ) )
    test( "addCustomStylesheet", () => expect( addCustomStylesheet ).toBeInstanceOf( Function ) )
  })
})