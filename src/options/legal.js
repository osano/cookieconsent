"use strict"

export default {
  // Make this false if you want to disable all regional overrides for settings.
  // If true, options can differ by country, depending on their cookie law.
  // It does not affect hiding the popup for countries that do not have cookie law.
  regionalLaw: true,

  // countries that enforce some version of a cookie law
  hasLaw: [
    'AT',
    'BE',
    'BG',
    'HR',
    'CZ',
    'CY',
    'DK',
    'EE',
    'FI',
    'FR',
    'DE',
    'EL',
    'HU',
    'IE',
    'IT',
    'LV',
    'LT',
    'LU',
    'MT',
    'NL',
    'NO',
    'PL',
    'PT',
    'SK',
    'ES',
    'SE',
    'GB',
    'UK',
    'GR',
    'EU',
    'RO'
  ],

  // countries that say that all cookie consent choices must be revokable (a user must be able too change their mind)
  revokable: [
    'HR',
    'CY',
    'DK',
    'EE',
    'FR',
    'DE',
    'LV',
    'LT',
    'NL',
    'NO',
    'PT',
    'ES'
  ],

  // countries that say that a person can only "consent" if the explicitly click on "I agree".
  // in these countries, consent cannot be implied via a timeout or by scrolling down the page
  explicitAction: ['HR', 'IT', 'ES', 'NO']
}