const fs = require('fs');
const postcss = require('postcss');
const stylestats = require('../../index.js');

const css = fs.readFileSync('main.css', 'utf-8');

postcss([stylestats])
    .process(css)
    .then((result) => {
        if (result.messages[0].stats) {
            console.log(result.messages[0].stats);
        }
    });
