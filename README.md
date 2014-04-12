# jQuery-mask-o

A lightweight jQuery overlay mask plugin ideal for masking elements while they are loading or being updated.

jQuery-mask-o is small, weighing in at less than 0.5kb (minified & gzipped).

http://danny-mcc.github.io/jquery-mask-o/


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

