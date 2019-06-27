[![Build Status][bi]][bl]
[![MIT License][li]][ll]
[![Twitter][ti]][tl]

<p align="center"><a href="https://cookieconsent.osano.com"><img width="460" src="images/cookie-consent.png"></a></p>

## What is Cookie Consent?

[Cookie Consent][cl] is a lightweight JavaScript plugin for alerting users about the use of cookies on your website.

It is designed to help you quickly comply with the EU Cookie Law. So we made it fast, free, and relatively painless.

Cookie Consent is seen over 2 BILLION times every month and is used on millions of sites, making this the by far most popular consent project on the Internet.

We welcome community contributions and actively review pull requests.

## Version 3.0

Version 3.0 is a complete rewrite from version 2. The most substantial new features are:

- Ability to GeoLocate and only show the addon to people in the relevant countries
- Callback hooks for showing/accepting/revoking the banner
- Support for different types of compliance, giving you the flexibility to obey even the strictest cookie laws
- Easy no-fuss themes and customisable styles

## Installation

The easiest way to get up and running is to use our [wizard][dll].

You can also install this project through [npm](https://www.npmjs.com/package/cookieconsent):

```sh
npm install cookieconsent
```

Or through [Yarn](https://yarnpkg.com/en/package/cookieconsent):

```sh
yarn add cookieconsent@3
```

Or through [Bower](https://bower.io/):

```sh
bower install cookieconsent
```

Or via a jsDelivr:

```html
<script src="https://cdn.jsdelivr.net/npm/cookieconsent@3/build/cookieconsent.min.js"></script>
```

## Documentation

See our [full documentation][dl].

## Contributing

Feel free to improve the plugin and send us a pull request.

The easiest way to develop is to host the files with a local webserver. e.g.

```sh
python -m SimpleHTTPServer
```

We use Gulp 4 to compile the SCSS and minify the JavaScript. You can run a build with:

```sh
gulp build
```

or

```sh
npm run-script build
```

or

```sh
yarn run build
```

## Credits

Cookie Consent v3

- Alex Morley-Finch (@alexmorleyfinch) - JavaScript
- Piiu Pilt - JavaScript
- Oliver Emberton (@oliveremberton) - a couple of lines of CSS, maybe

Cookie Consent v2

- David Ball (@drball) - CSS / themes
- Adam Hutchinson (@adjohu) - JavaScript


## Export Control

This distribution includes cryptographic software. The country in which you
currently reside may have restrictions on the import, possession, use, and/or
re-export to another country, of encryption software. BEFORE using any
encryption software, please check your country's laws, regulations and
policies concerning the import, possession, or use, and re-export of encryption
software, to see if this is permitted. See <http://www.wassenaar.org/> for more
information.

The U.S. Government Department of Commerce, Bureau of Industry and Security
(BIS), has classified this software as Export Commodity Control Number (ECCN)
5D002.C.1, which includes information security software using or performing
cryptographic functions with asymmetric algorithms. The form and manner of this
Apache Software Foundation distribution makes it eligible for export under the
License Exception ENC Technology Software Unrestricted (TSU) exception (see the
BIS Export Administration Regulations, Section 740.13) for both object code and
source code.

[li]: https://img.shields.io/badge/license-MIT-brightgreen.svg
[ll]: LICENSE
[bl]: https://travis-ci.org/osano/cookieconsent
[bi]: https://travis-ci.org/osano/cookieconsent.svg?branch=master
[dl]: https://cookieconsent.osano.com/documentation/
[dll]: https://cookieconsent.osano.com/download/
[cl]: https://cookieconsent.osano.com
[ti]: https://img.shields.io/twitter/url/https/osanoatx.svg?style=social
[tl]: https://twitter.com/osanoatx