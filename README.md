[![Build Status](https://travis-ci.org/insites/cookieconsent.svg)](https://travis-ci.org/insites/cookieconsent)

## What is Cookie Consent? 

Cookie Consent is a lightweight JavaScript plugin for alerting users about the use of cookies on your website.

It is designed to help you comply with the hideous EU Cookie Law and not make you want to kill yourself in the process. So we made it fast, free, and relatively painless.

## Installation

The easiest way to get up and running is to use our [wizard](https://cookieconsent.insites.com/download/). 

You can also install this project through npm
```
npm install cookieconsent
```

Or through bower
```
bower install cookieconsent
```

## Documentation 

See our [full documentation](https://cookieconsent.insites.com/documentation/).

## Contributing

Feel free to improve the plugin and send us a pull request.  

The easiest way to develop is to host the files with a local webserver. I.e. 
```
python -m SimpleHTTPServer
```

We use gulp to compile scss and minify the javascript. Assuming [nodejs](http://nodejs.org/) is installed, you can run a build with:

```sh
cd path/to/cookieconsent
npm install
npm install -g gulp
gulp build
```

## License
Code released under the [MIT licence](http://opensource.org/licenses/MIT).

## Credits

+ David Ball (@drball) - CSS / themes  
+ Adam Hutchinson (@adjohu) - JavaScript
