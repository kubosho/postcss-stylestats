const postcss = require('postcss');
const test = require('ava');

const stylestats = require('./');

function run(input, opts = {}, scb, ecb) {
    return postcss()
        .use(stylestats(opts))
        .process(input)
        .then(scb)
        .catch(ecb);
}

test('`result.messages` have stylestats data', t => {
    return run('.a { }', (result) => {
        t.false(result.messages[0].stats === null);
        t.false(result.messages[0].stats === {});
    });
});

test('can output of JSON format', t => {
    return run('.a { }', { type: 'json' }, (result) => {
        let actual;

        try {
            actual = JSON.parse(result.messages[0].stats);
        } catch (error) {
            actual = error;
        }

        t.false(actual === null);
        t.false(actual.name === 'SyntaxError');
    });
});

test('can output of HTML format', t => {
    return run('.a { }', { type: 'html' }, (result) => {
        t.false(result === null);
    });
});

test('can output of Markdown format', t => {
    return run('.a { }', { type: 'md' }, (result) => {
        t.false(result === null);
    });
});
