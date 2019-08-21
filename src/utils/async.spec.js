"use strict"

import {
  getScript,
  makeAsyncRequest
} from "./async"

describe( "Utils::Async", () => {
  describe( "All exports are available" , () => {
    test( "getScript", () => expect( getScript ).toBeInstanceOf( Function ) )
    test( "makeAsyncRequest", () => expect( makeAsyncRequest ).toBeInstanceOf( Function ) )
  })
})