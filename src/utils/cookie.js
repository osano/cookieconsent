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

export const setCookie = function ( name, value, expiryDays, domain, path, secure ) {
  const exdate = new Date()
  exdate.setHours(exdate.getHours() + ((typeof expiryDays !== "number"  ? 365 : expiryDays ) * 24))
  document.cookie = name + '=' + value +
                    ';expires=' + exdate.toUTCString() +
                    ';path=' + (path || '/') +
                    ( domain ? ';domain=' + domain : '' ) +
                    ( secure ? ';secure' : '' )
}

export const deleteCookie = (name, domain, path, secure) => {
  console.info('deleteCookie', name, domain, path, secure)
  if (getCookie(name)) {
    setCookie(name, '', 0, domain, path, secure);
  }
}
