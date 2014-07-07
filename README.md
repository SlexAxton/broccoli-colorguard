> Broccoli wrapped [Colorguard](https://github.com/SlexAxton/css-colorguard) - Keep a watchful eye on your css colors

### Warning

As of the first iteration of this plugin, colorguard is run **once per file**, not as a sum total
of all files. This is wrong, but it's a start. The best way to use this is after a concatenation
step (or precompilation step that includes concatenation) in broccoli.

## Install

```bash
$ npm install --save broccoli-colorguard
```

## Usage

```js
var compileSass = require('broccoli-sass');
var colorguard = require('broccoli-colorguard');

var cssTree = compileSass(inputTree, 'myapp/app.scss', 'assets/app.css', {
  sassoptions: 'go here'
});

// Colorguard always returns exactly what you gave it. But it might throw errors before that
// happens. In this case, it gets the full built output from sass so it knows how to parse it.
cssTree = colorguard(cssTree, {
  threshold: 3,
  ignore: ['#555555'],
  whitelist: [['#000000', '#010101']]
});

module.exports = cssTree;
```

## API

### colorguard(tree, opts)

Initialize a new colorguard with the given string of regular CSS. Optionally supply
an object with options as the last argument.

## Options

These are blindly passed to colorguard. See options [there](https://github.com/SlexAxton/css-colorguard).

## License

Apache 2

## Thanks

Heavily cargo-culted from [kevva/broccoli-rework](https://github.com/kevva/broccoli-rework)
