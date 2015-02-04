#Cookie Consent [![Build Status](https://magnum.travis-ci.com/silktide/cookieconsent2.svg?token=btYRVH7DuRxTxFVwH8Cs&branch=master)](https://magnum.travis-ci.com/silktide/cookieconsent2)

Cookie consent is a lightweight JavaScript plugin to alert users about the use of cookies on your site.

* **Lightweight:** (~3.5kb minified)
* **Customisable:** Easily change the wording to fit your site.
* **Built in themes:** We've created a variety of different themes so you don't have to. 

##Getting started

The easiest way to get up and running is to use our [configurator](http://silktide.com/tools/cookieconsent). This will guide you through customising the plugin.

For more advanced configuration, keep reading.

## Installation
Include cookieconsent.js on your page.
```html
<!-- Minified cookie consent served from CDN -->
<script src="http://cc.silktide.com/cookieconsent.min.js"></script>
```

## Customisation
To customise the cookie consent plugin, you can provide an options object before including it.

```html
<script>
    window.cookieconsent_options = {
        learnMore: 'More info',
        link: 'http://example.com/cookiepolicy'
    };
</script>
<script src="http://cc.silktide.com/cookieconsent.min.js"></script>
```

### Options
These are the options you can pass to cookie consent.

* **message:** *(string)* - default: 'This website uses cookies to ensure you get the best experience on our website'
    
    The message shown by the plugin
* **dismiss:** *(string)* - default: 'Got it!'
    
    The text used on the dismiss button 

* **learnMore:** *(string)* - default: 'More info'

    The text shown on the link to the cookie policy (requires the link option to also be set)

* **link:** *(string)* - default: null
    
    The url of your cookie policy. If it's set to null, the link is hidden.
    
* **container:** *(string: CSS selector)* - default: null     

    The element you want the cookie consent notification to be appended to. If null, the cookie consent plugin is appended to the body. 
    
    *Note: the majority of our built in themes are designed around the plugin being a child of the body.*

* **theme:** *(string)* - default: 'light-floating'

    The theme you wish to use. Can be any of the themes from the style directory, i.e. 'dark-top'.
    
    If you wish to use your own css instead, pass a path here. i.e. `'styles/my_custom_theme.css'` and it will be dynamically loaded.


## Contributing

Feel free to improve the plugin and send us a pull request.

We use gulp to compile scss and minify the javascript. 

Assuming [nodejs](http://nodejs.org/) is installed, you can run a build with:

```sh
    cd path/to/cookieconsent
    npm install
    npm install -g gulp
    gulp build
```

## License
Code released under the [GPLv3 License](http://www.gnu.org/copyleft/gpl.html).

