const postcss = require('postcss');
const test = require('ava');

const stylestats = require('./');

function run(input, scb, ecb) {
    return postcss()
        .use(stylestats())
        .process(input)
        .then(scb)
        .catch(ecb);
}

test('result.messages have stylestats data', t => {
    return run('.a { }', (result) => {
        t.false(result.messages[0].stats === null);
        t.false(result.messages[0].stats === {});
    });
});
