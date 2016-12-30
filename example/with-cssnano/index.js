const fs = require('fs');
const postcss = require('postcss');
const stylestats = require('../../index.js');
const cssnano = require('cssnano');

const css = fs.readFileSync('main.css', 'utf-8');

postcss([stylestats, cssnano])
    .process(css)
    .then((result) => {
        fs.writeFileSync('main.min.css', result.css);

        if (result.messages[0].stats) {
            console.log(result.messages[0].stats);
        }
    });
