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
    'CY',
    'CZ',
    'DE',
    'DK',
    'EE',
    'EL',
    'ES',
    'EU',
    'FI',
    'FR',
    'GB',
    'GR',
    'HR',
    'HU',
    'IE',
    'IT',
    'LT',
    'LU',
    'LV',
    'MT',
    'NL',
    'NO',
    'PL',
    'PT',
    'RO',
    'SE',
    'SK',
    'UK'
  ],

  // countries that say that all cookie consent choices must be revokable (a user must be able too change their mind)
  revokable: [
    'CY',
    'DE',
    'DK',
    'EE',
    'ES',
    'FR',
    'HR',
    'LT',
    'LV',
    'NL',
    'NO',
    'PT'
  ],

  // countries that say that a person can only "consent" if the explicitly click on "I agree".
  // in these countries, consent cannot be implied via a timeout or by scrolling down the page
  explicitAction: [
    'ES',
    'HR',
    'IT',
    'NO'
  ]
}