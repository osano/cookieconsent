"use strict"

import { statuses } from "./constants"

export const interpolateString = ( str, callback ) =>
  str.replace( /{{([a-z][a-z0-9\-_]*)}}/gi , ( matches, replaced ) => callback( replaced ) || '')

export const getCookie = name => {
  const value = ' ' + document.cookie
  const parts = value.split(' ' + name + '=')
  return parts.length < 2
    ? undefined
    : parts
        .pop()
        .split(';')
        .shift()
}

export const setCookie = ( name, value, expiryDays, domain, path, secure ) => {
  const exdate = new Date()
  exdate.setHours(exdate.getHours() + ((typeof expiryDays !== "number"  ? 365 : expiryDays ) * 24))
  document.cookie = name + '=' + value +
                    ';expires=' + exdate.toUTCString() +
                    ';path=' + (path || '/') +
                    ( domain ? ';domain=' + domain : '' ) +
                    ( secure ? ';secure' : '' )
}

// only used for throttling the 'mousemove' event (used for animating the revoke button when `animateRevokable` is true)
export const throttle = (callback, limit) => {
  let wait = false
  return function() {
    if (!wait) {
      callback(...arguments)
      wait = true
      setTimeout(function() {
        wait = false
      }, limit)
    }
  }
}

// only used for hashing json objects (used for hash mapping palette objects, used when custom colours are passed through JavaScript)
export const hash = str => {
  let hashNum = 0,
    i = 0,
    chr,
    len = str.length
  if (str.length === 0) return hashNum
  for ( i; i < len; ++i ) {
    chr = str.charCodeAt( i )
    hashNum = ( hashNum << 5 ) - hashNum + chr
    hashNum |= 0
  }
  return hashNum
}

export const normaliseHex = hex =>
  hex[0] == '#'
    ? hex.substr(1) : hex.length == 3
    ? hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2] : hex

// used to get text colors if not set
export const getContrast = hex => {
  hex = normaliseHex(hex)
  const r = parseInt(hex.substr(0, 2), 16)
  const g = parseInt(hex.substr(2, 2), 16)
  const b = parseInt(hex.substr(4, 2), 16)
  const yiq = (r * 299 + g * 587 + b * 114) / 1000
  return yiq >= 128 ? '#000' : '#fff'
}

// used to change color on highlight
export const getLuminance = hex => {
  const num = parseInt(normaliseHex(hex), 16),
    amt = 38,
    R = (num >> 16) + amt,
    B = ((num >> 8) & 0x00ff) + amt,
    G = (num & 0x0000ff) + amt
    return '#' + (
    0x1000000 +
    (R < 255 ? (R < 1 ? 0 : R) : 255) * 0x10000 +
    (B < 255 ? (B < 1 ? 0 : B) : 255) * 0x100 +
    (G < 255 ? (G < 1 ? 0 : G) : 255)
  )
    .toString(16)
    .slice(1)
}
export const getHoverColor = hex => {
  hex = normaliseHex( hex )
  // for black buttons
  return hex === '000000' ? '#222' : getLuminance( hex )
}

export const isMobile = () =>
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test( navigator.userAgent )

// The code "typeof obj === 'object' && obj !== null" allows Array objects
export const isPlainObject = obj => typeof obj === 'object' && obj !== null && obj.constructor == Object

export const traverseDOMPath = ( elem, className ) =>
  !elem || !elem.parentNode
  ? null : elem.classList.contains(className)
  ? elem : traverseDOMPath(elem.parentNode, className)

/**
 * Checks if a status is in the constants list
 * @param { string } status - Status String to
 * @return { boolean } - if status is valid
 */
export const isValidStatus = status => statuses.indexOf(status) >= 0