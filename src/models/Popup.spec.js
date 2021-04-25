"use strict"

import Popup from "./Popup"
import Base from "./Base"
import defaultOptions from "../options/popup"
import { categories } from "../constants"
import { mergeOptions } from "../utils"

const isPopup = popup => (
  expect( popup ).toBeInstanceOf( Object ),
  expect( popup ).toBeInstanceOf( Base ),
  expect( popup ).toBeInstanceOf( Popup ),
  expect( popup ).toHaveProperty( "open" ),
  expect( popup ).toHaveProperty( "close" ),
  expect( popup ).toHaveProperty( "fadeIn" ),
  expect( popup ).toHaveProperty( "afterFadeIn" ),
  expect( popup ).toHaveProperty( "fadeOut" ),
  expect( popup ).toHaveProperty( "afterFadeOut" ),
  expect( popup ).toHaveProperty( "isOpen" ),
  expect( popup ).toHaveProperty( "toggleRevokeButton" ),
  expect( popup ).toHaveProperty( "revokeChoice" ),
  expect( popup ).toHaveProperty( "hasAnswered" ),
  expect( popup ).toHaveProperty( "hasConsented" ),
  expect( popup ).toHaveProperty( "autoOpen" ),
  expect( popup ).toHaveProperty( "setStatuses" ),
  expect( popup ).toHaveProperty( "getStatuses" ),
  expect( popup ).toHaveProperty( "clearStatuses" ),
  expect( popup ).toHaveProperty( "canUseCookies" ),
  expect( popup ).toHaveProperty( "getPositionClasses" ),
  expect( popup ).toHaveProperty( "getPopupClasses" ),
  expect( popup ).toHaveProperty( "getPopupInnerMarkup" ),
  expect( popup ).toHaveProperty( "appendMarkup" ),
  expect( popup ).toHaveProperty( "handleButtonClick" ),
  expect( popup ).toHaveProperty( "attachCustomPalette" ),
  expect( popup ).toHaveProperty( "getEventPath" ),
  expect( popup ).toHaveProperty( "applyAutoDismiss" ),
  expect( popup ).toHaveProperty( "applyRevokeButton" ),
  expect( popup.options ).toBeInstanceOf( Object ),
  expect( popup.userCategories ).toBeInstanceOf( Object ),
  expect( popup.customStyles ).toBeInstanceOf( Object ),
  expect( Object.keys( popup.userCategories ) ).toStrictEqual( categories )
)
const hasCorrectOptions = ( popup, expected ) => (
  Object.entries( expected ).forEach( ( [ key, value ] ) => {
    test( "`" + key + "`", () => expect( popup.options[ key ] ).toStrictEqual( value ) )
  })
)

describe( "Popup Class", () => {
  describe( "as default" , () => {
    const popup = new Popup()
    test("instantiates", () => isPopup( popup ) )
    describe( "has the correct options", () => hasCorrectOptions( popup, defaultOptions ) )
  })
  describe( "with custom options", () => {
    const options = {
      type     : "info",
      container: document.getElementsByClassName( "className" )[ 0 ],
      cookie   : {
        name  : "test_cookie",
        domain: "me.selfdomain.com",
        secure: true
      },
      content  : {
        message: "test message"
      },
      elements : {
        message: "<div class='test-message'>{{message}}</div>"
      },
      layouts  : {
        testLayout: "<div class='test-layout'>{{message}}{{compliance}}</div>{{close}}"
      },
      layout   : "testLayout",
      theme    : "classic",
      palette  : {
        popup: { background: "#000000", text: "#fff", link: "#fff" }
      }
    }
    const popup = new Popup( options )
    test("instantiates", () => isPopup( popup ) )
    describe( "has the correct options", () => hasCorrectOptions( popup, mergeOptions( defaultOptions, options ) ) )
  })
  describe( "showLink options set to false", () => {
    const options = {
      type: "opt-in"
    }
    const popup = new Popup( options )
    describe( "updates `content` options `link` and `messagelink`", () => {
      hasCorrectOptions(
        popup,
        mergeOptions(
          mergeOptions( defaultOptions, options ),
          {
            revokable: true
          }
        )
      )
    })
  })

  describe( "when `type` is not 'info'", () =>{
    const options = {
      elements : {
        message: "<div class='test-message'>{{message}}</div>"
      },
      showLink : false
    }
    const popup = new Popup( options )
    describe( "revokable is set to true programmatically", () => {

    })
  })

})
