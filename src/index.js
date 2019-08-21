"use strict"

import "./styles/main.scss"

import CookieConsent from "./models/CookieConsent"

if (typeof exports !== 'undefined') {
  module.exports = CookieConsent
} else {
  window.CookieConsent = CookieConsent
}