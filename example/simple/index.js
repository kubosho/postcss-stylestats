const fs = require('fs');
const postcss = require('postcss');

const css = fs.readFileSync('main.css', 'utf-8');

postcss([require('postcss-stylestats')])
    .process(css)
    .then((result) => {
        if (result.messages[0].stats) {
            fs.writeFileSync('stats.json', JSON.stringify(result.messages[0].stats, null, 2));
        }
    });
