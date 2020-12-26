declare module "@activescott/cookieconsent" {
  export type ColorString = string
  export type ConsentOptions = {
    enabled?: boolean,
    palette: {
      popup?: {
        background?: ColorString,
        text?: ColorString
      },
      button?: {
        background?: ColorString,
        text?: ColorString,
        border?: ColorString
      }
    },
    content?: {
      header? : string,
      message?: string,
      dismiss?: string,
      allow?  : string,
      deny?   : string,
      link?   : string,
      href?   : string,
      close?  : string,
      target? : string,
      policy? : string,
  
    }
  }
  export default class CookieConsent {
    constructor (options: ConsentOptions)
  }
}
