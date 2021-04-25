# Change Log

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/)
and this project adheres to [Semantic Versioning](http://semver.org/).

## [4.0.0] - Release Date

### Added
- Watches key press for allow or deny, default keys are 13 (Enter) and 27 (Esc) respectively [#571, #487]
- Categories: 'Uncategorized', 'Essential', 'Analytics', 'Marketing', 'Personalization' `{ /*...options*/, type: "categories" }`
- Events: 'initialized', 'error', 'popupOpened', 'popupClosed', 'revokeChoice', 'statusChanged' `cc.on( 'error', console.error.bind( console ) )`
- Moved to Webpack 4.0: This move integrates the CSS(SCSS) into the JS so there is only one file needed from the CDN [#558]
- Added the link click event watcher that will dismiss the pop-up if option `dismissOnLinkClick: (false)` is set to true [#503]

### Security
- Updated all dependencies to latest stable releases
- `npm audit`

### Fixed
- Throws appropriate message if there is no container for the popup to attach to [#579]
- Opt-out changes cookie value appropriately [#560] ( we're not destroying them as they fall under the 'essential' category)
- 'initialise' callback now 'initialized' event that fires before any user actions are possible [#474]
- Removed `event.path` from the code base [#502]

### Refactor:
- Started move to ES6
- Distribute utilities
- Set constants
- Event emitter added
- Removed utilities that have built-in JS functionality solutions

### Deprecated:
- Callbacks: `onInitialise`, `onPopupOpen`, `onPopupClose`, `onStatusChange`, `onRevokeChoice`

### Where can you help?
- Move storage to localStorage [#455]
- Multilingual support [#570]
- Allow for custom categories
- More lifecycle events

## [3.1.1] - 2019-05-22

### Security

- Updated all dependencies to latest stable releases

### Fixed

- Expiration date future calculation error
- Closing with touch out did not work when cookie consent was displayed on iPhone Safari and dismissOnWindowClick is enabled

### Random

- Insite branding and domains replaced with Osano branding and domains

## [3.1.0] - 2018-07-17

### Added

- Secure cookies (must use the `secure` flag) in the `cookie` option
- Added a onNoCookieLaw hook
- Added a few `content` options like `policy` and `target`
- Added `dismissOnWindowClick` option (with an `ignoreClickFrom`) option which blacklists any clicks

### Fixed

- Icons (plus anything else) now allowed in buttons
- Dont call location service again if user has already chosen their privacy level
- Revoke option bug (fixed bug where revoke option wouldn't show on refresh after user has picked choice)

### Random

- Lowered console log level from error to warning when location service fails
- Removed non-standard X-Requested-By header from XxmHttpRequest
- Removed Maxmind as a default service, but you can still add it yourself (you need to whitelist a domain with maxmind)

### Deprecated

- Removed deprecated FreeGeoIP

## [3.0.2] - 2016-10-17

### Added

- Accessibility
  - :focus effects
  - ARIA rules for accessibility
- GoogleOff/GoogleOn tags for all content inside the banner. This prevents Google registering CookieConsent text as site content.

## [3.0.1] - 2016-09-21

### Added

- Changelog
- Application written to support:
  - geolocation
  - callback hooks
  - different consent types
  - new and easy to customize stylings
