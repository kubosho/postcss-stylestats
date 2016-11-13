# postcss-stylestats

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
