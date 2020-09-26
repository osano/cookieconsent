"use strict"

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

export const setCookie = function ( name, value, expiryDays, domain, path, secure, sameSite ) {
  const exdate = new Date()
  exdate.setHours(exdate.getHours() + ((typeof expiryDays !== "number"  ? 365 : expiryDays ) * 24))

  let cookie = name + '=' + value
  cookie += '; Expires=' + exdate.toUTCString()
  cookie += '; Path=' + (path || '/')
  if (domain) {
    cookie += '; Domain=' + domain
  }
  if (sameSite) {
    const sameSiteLowerCase = sameSite.toLowerCase()
    if (['lax', 'strict', 'none'].includes(sameSiteLowerCase)) {
      cookie += '; SameSite=' + sameSite
      if (sameSiteLowerCase === 'none' && !secure) {
        secure = true
      }
    }
  }
  if (secure) {
    cookie += '; Secure'
  }

  document.cookie = cookie
}