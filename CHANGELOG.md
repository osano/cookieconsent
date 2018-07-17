# Change Log

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/)
and this project adheres to [Semantic Versioning](http://semver.org/).

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
  - new and easy to customise stylings

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
