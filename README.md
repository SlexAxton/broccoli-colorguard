> Broccoli wrapped [Colorguard](https://github.com/SlexAxton/css-colorguard) - Keep a watchful eye on your css colors

As of the first iteration of this plugin, colorguard is run **once per file**, not as a sum total
of all files. This is wrong, but it's a start. For now, you can pass it the 'tree' of your build
directory.

## Install

```bash
$ npm install --save broccoli-colorguard
```

## Usage

```js
var colorguard = require('broccoli-colorguard');

// Normally you would return the tree here, but colorguard returns warnings so you don't want that
// This will simply throw errors that you'll get during a broccoli-serve to help you catch these
// problems right away.
colorguard(tree, {
  threshold: 3,
  ignore: ['#555555'],
  whitelist: [['#000000', '#010101']]
});
```

## API

### colorguard(tree, opts)

Initialize a new colorguard with the given string of regular CSS. Optionally supply
an object with options as the last argument.

## Options

These are blindly passed to colorguard. See options [there](https://github.com/SlexAxton/css-colorguard).

## License

MIT © [Alex Sexton](https://github.com/slexaxton)

## Thanks

Heavily cargo-culted from [kevva/broccoli-rework](https://github.com/kevva/broccoli-rework)
