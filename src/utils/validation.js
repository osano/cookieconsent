"use strict"

import { statuses } from "../constants"

/**
 * Checks if a status is in the constants list
 * @param { string } status - Status String to
 * @return { boolean } - if status is valid
 */
export const isValidStatus = status => statuses.includes(status)

export const isMobile = () =>
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test( navigator.userAgent )

// The code "typeof obj === 'object' && obj !== null" allows Array objects
export const isPlainObject = obj => typeof obj === 'object' && obj !== null && obj.constructor == Object
