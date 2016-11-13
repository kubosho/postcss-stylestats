# postcss-stylestats

[![Build Status](https://travis-ci.org/kubosho/postcss-stylestats.svg?branch=master)](https://travis-ci.org/kubosho/postcss-stylestats)
[![David](https://david-dm.org/kubosho/postcss-stylestats.svg)](https://david-dm.org/kubosho/postcss-stylestats)
[![npm](https://img.shields.io/npm/v/postcss-stylestats.svg)](https://www.npmjs.com/package/postcss-stylestats)

PostCSS plugin for [StyleStats](https://github.com/t32k/stylestats).

## Install

```
npm install --save-dev postcss-stylestats
```

## Example

```js
const fs = require('fs');
const postcss = require('postcss');
const stylestats = require('postcss-stylestats');
const cssnano = require('cssnano');

const css = fs.readFileSync('main.css', 'utf-8');

postcss([stylestats, cssnano])
    .process(css)
    .then((result) => {
        fs.writeFileSync('main.min.css', result.css);

        if (result.messages[0].stats) {
            fs.writeFileSync('stats.js', JSON.stringify(result.messages[0].stats));
        }
    });
```

[Click here for details](https://github.com/kubosho/postcss-stylestats/tree/master/example).

## Contributions

We welcome your pull requests.

1. Fork the repo and create your branch from master.
1. Create your feature branch: git checkout -b foo-bar.
1. Commit your changes: git commit -am 'Add awesome feature'.
1. Push to the branch: git push origin foo-bar.
1. Ensure the test suite passes.
1. Submit Pull Request!
