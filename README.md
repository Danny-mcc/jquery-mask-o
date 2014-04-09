# jquery-mask-o

Very simple jQuery overlay mask plugin.


## Example Usage

### jQuery

Use the plugin as follows:

Mask an element.
```js
var options {
     image        : 'loader.gif', // Overlay image
     opacity      : 0.5,          // Overlay opacity
     color        : '#FFF',       // Overlay colour
     zIndex       : 50,           // Z-index of overlay
}


$('form').masko( options );
```

Unmask an element.
```js
$('form').unmasko();
```

## Options

You can specify the following options.
```js
     image        : 'loader.gif', // Overlay image
     opacity      : 0.5,          // Overlay opacity
     color        : '#FFF',       // Overlay colour
     zIndex       : 50,           // Z-index of overlay
     customClass  : false         // Class to apply to overlay
```

## License

This plugin is available under [the MIT license](http://mths.be/mit).

