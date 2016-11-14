# postcss-stylestats

[![Build Status](https://travis-ci.org/kubosho/postcss-stylestats.svg?branch=master)](https://travis-ci.org/kubosho/postcss-stylestats)
[![David](https://david-dm.org/kubosho/postcss-stylestats.svg)](https://david-dm.org/kubosho/postcss-stylestats)
[![npm](https://img.shields.io/npm/v/postcss-stylestats.svg)](https://www.npmjs.com/package/postcss-stylestats)

PostCSS plugin for [StyleStats](https://github.com/t32k/stylestats).

## Examples

### input (input.css)

```css
div {
    width: 300px;
    height: 300px;
    margin: 10px;
    padding: 10px;
    background-color: #003760;
    color: #fff;
    text-align: center;
}
```

### output (CSS statistics data for StyleStats)

```js
{
  "published": "2016-11-14T05:04:18.521Z",
  "paths": [],
  "stylesheets": 0,
  "styleElements": 0,
  "size": 154,
  "dataUriSize": 0,
  "ratioOfDataUriSize": 0,
  "gzippedSize": 126,
  "rules": 1,
  "selectors": 1,
  "declarations": 7,
  "simplicity": 1,
  "averageOfIdentifier": 1,
  "mostIdentifier": 1,
  "mostIdentifierSelector": "div",
  "averageOfCohesion": 7,
  "lowestCohesion": 7,
  "lowestCohesionSelector": [
    "div"
  ],
  "totalUniqueFontSizes": 0,
  "uniqueFontSizes": [],
  "totalUniqueFontFamilies": 0,
  "uniqueFontFamilies": [],
  "totalUniqueColors": 1,
  "uniqueColors": [
    "#FFFFFF"
  ],
  ...
}
```

## Install

```
npm install --save-dev postcss-stylestats
```

## Usage

```js
const fs = require('fs');
const stylestats = require('postcss-stylestats');

const css = fs.readFileSync('input.css', 'utf-8');

postcss([stylestats])
    .process(css)
    .then((result) => {
        if (result.messages[0].stats) {
            console.log(result.messages[0].stats);
        }
    });
```

## Contributions

We welcome your pull requests.

1. Fork the repo and create your branch from master.
1. Create your feature branch: git checkout -b foo-bar.
1. Commit your changes: git commit -am 'Add awesome feature'.
1. Push to the branch: git push origin foo-bar.
1. Ensure the test suite passes.
1. Submit Pull Request!
