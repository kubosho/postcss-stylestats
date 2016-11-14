# postcss-stylestats

[![Build Status](https://travis-ci.org/kubosho/postcss-stylestats.svg?branch=master)](https://travis-ci.org/kubosho/postcss-stylestats)
[![David](https://david-dm.org/kubosho/postcss-stylestats.svg)](https://david-dm.org/kubosho/postcss-stylestats)
[![npm](https://img.shields.io/npm/v/postcss-stylestats.svg)](https://www.npmjs.com/package/postcss-stylestats)

PostCSS plugin for [StyleStats](https://github.com/t32k/stylestats).

## Install

```
npm install --save-dev postcss-stylestats
```

## Usage

```js
const fs = require('fs');
const css = fs.readFileSync('main.css', 'utf-8');

postcss([require('postcss-stylestats')])
    .process(css)
    .then((result) => {
        if (result.messages[0].stats) {
            fs.writeFileSync('stats.json', JSON.stringify(result.messages[0].stats, null, 2));
        }
    });
```

[Click here for example code details](https://github.com/kubosho/postcss-stylestats/tree/master/example).

### Returned JSON (example)

```json
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
  "totalUniqueBackgroundImages": 0,
  "uniqueBackgroundImages": [],
  "idSelectors": 0,
  "universalSelectors": 0,
  "unqualifiedAttributeSelectors": 0,
  "javascriptSpecificSelectors": 0,
  "importantKeywords": 0,
  "floatProperties": 0,
  "propertiesCount": [
    {
      "property": "width",
      "count": 1
    },
    {
      "property": "height",
      "count": 1
    },
    {
      "property": "margin",
      "count": 1
    },
    {
      "property": "padding",
      "count": 1
    },
    {
      "property": "background-color",
      "count": 1
    },
    {
      "property": "color",
      "count": 1
    },
    {
      "property": "text-align",
      "count": 1
    }
  ],
  "mediaQueries": 0
}
```

## Contributions

We welcome your pull requests.

1. Fork the repo and create your branch from master.
1. Create your feature branch: git checkout -b foo-bar.
1. Commit your changes: git commit -am 'Add awesome feature'.
1. Push to the branch: git push origin foo-bar.
1. Ensure the test suite passes.
1. Submit Pull Request!
