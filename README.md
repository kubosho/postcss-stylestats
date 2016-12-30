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

```
┌─────────────────────────────────┬───────────────────────────┐
│ Published                       │ December 30, 2016 2:36 PM │
├─────────────────────────────────┼───────────────────────────┤
│ Paths                           │ N/A                       │
├─────────────────────────────────┼───────────────────────────┤
│ Style Sheets                    │ 0                         │
├─────────────────────────────────┼───────────────────────────┤
│ Style Elements                  │ 0                         │
├─────────────────────────────────┼───────────────────────────┤
│ Size                            │ 154B                      │
├─────────────────────────────────┼───────────────────────────┤
│ Data URI Size                   │ 0                         │
├─────────────────────────────────┼───────────────────────────┤
│ Ratio of Data URI Size          │ 0.0%                      │
├─────────────────────────────────┼───────────────────────────┤
│ Gzipped Size                    │ 126B                      │
├─────────────────────────────────┼───────────────────────────┤
│ Rules                           │ 1                         │
├─────────────────────────────────┼───────────────────────────┤
│ Selectors                       │ 1                         │
├─────────────────────────────────┼───────────────────────────┤
│ Declarations                    │ 7                         │
├─────────────────────────────────┼───────────────────────────┤
│ Simplicity                      │ 100.0%                    │
├─────────────────────────────────┼───────────────────────────┤
│ Average of Identifier           │ 1.000                     │
├─────────────────────────────────┼───────────────────────────┤
│ Most Identifier                 │ 1                         │
├─────────────────────────────────┼───────────────────────────┤
│ Most Identifier Selector        │ div                       │
├─────────────────────────────────┼───────────────────────────┤
│ Average of Cohesion             │ 7.000                     │
├─────────────────────────────────┼───────────────────────────┤
│ Lowest Cohesion                 │ 7                         │
├─────────────────────────────────┼───────────────────────────┤
│ Lowest Cohesion Selector        │ div                       │
├─────────────────────────────────┼───────────────────────────┤
│ Total Unique Font Sizes         │ 0                         │
├─────────────────────────────────┼───────────────────────────┤
│ Unique Font Sizes               │ N/A                       │
├─────────────────────────────────┼───────────────────────────┤
│ Total Unique Font Families      │ 0                         │
├─────────────────────────────────┼───────────────────────────┤
│ Unique Font Families            │ N/A                       │
├─────────────────────────────────┼───────────────────────────┤
│ Total Unique Colors             │ 1                         │
├─────────────────────────────────┼───────────────────────────┤
│ Unique Colors                   │ #FFFFFF                   │
├─────────────────────────────────┼───────────────────────────┤
│ Total Unique Background Images  │ 0                         │
├─────────────────────────────────┼───────────────────────────┤
│ Unique Background Images        │ N/A                       │
├─────────────────────────────────┼───────────────────────────┤
│ ID Selectors                    │ 0                         │
├─────────────────────────────────┼───────────────────────────┤
│ Universal Selectors             │ 0                         │
├─────────────────────────────────┼───────────────────────────┤
│ Unqualified Attribute Selectors │ 0                         │
├─────────────────────────────────┼───────────────────────────┤
│ JavaScript Specific Selectors   │ 0                         │
├─────────────────────────────────┼───────────────────────────┤
│ Important Keywords              │ 0                         │
├─────────────────────────────────┼───────────────────────────┤
│ Float Properties                │ 0                         │
├─────────────────────────────────┼───────────────────────────┤
│ Properties Count                │ width: 1                  │
│                                 │ height: 1                 │
│                                 │ margin: 1                 │
│                                 │ padding: 1                │
│                                 │ background-color: 1       │
│                                 │ color: 1                  │
│                                 │ text-align: 1             │
├─────────────────────────────────┼───────────────────────────┤
│ Media Queries                   │ 0                         │
└─────────────────────────────────┴───────────────────────────┘
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
