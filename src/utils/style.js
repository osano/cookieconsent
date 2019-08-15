"use strict"

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