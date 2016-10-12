[![Build Status](https://travis-ci.org/insites/cookieconsent.svg)](https://travis-ci.org/insites/cookieconsent)
## What is Cookie Consent? 

[Cookie Consent](https://cookieconsent.insites.com/) is a lightweight JavaScript plugin for alerting users about the use of cookies on your website.

It is designed to help you comply with the hideous EU Cookie Law and not make you want to kill yourself in the process. So we made it fast, free, and relatively painless.

## Version 3.0

Version 3.0 is a complete rewrite from version 2. The most substantial new features are:

- the ability to GeoLocate and only show the addon to people in the relevant countries
- callback hooks for showing/accepting/revoking the banner
- support for different types of compliance, giving you the flexibility to obey even the strictest cookie laws
- easy no-fuss themes and customisable styles

## Installation

The easiest way to get up and running is to use our [wizard](https://cookieconsent.insites.com/download/). 

You can also install this project through [npm](https://www.npmjs.com/):

```sh
npm install cookieconsent
```

Or through [Bower](https://bower.io/):

```sh
bower install cookieconsent
```

## Documentation 

See our [full documentation](https://cookieconsent.insites.com/documentation/).

## Contributing

Feel free to improve the plugin and send us a pull request.  

The easiest way to develop is to host the files with a local webserver. e.g. 

```sh
python -m SimpleHTTPServer
```

We use Gulp to compile the SCSS and minify the JavaScript. You can run a build with:

```sh
gulp build
```

## License

Code released under the [MIT licence](http://opensource.org/licenses/MIT).

## Credits

Cookie Consent v3

+ Alex Morley-Finch - JavaScript
+ Piiu Pilt - JavaScript
+ Oliver Emberton (@oliveremberton) - a couple of lines of CSS, maybe

Cookie Consent v2

+ David Ball (@drball) - CSS / themes
+ Adam Hutchinson (@adjohu) - JavaScript
