const postcss = require('postcss');
const StyleStats = require('stylestats');

const type = 'stylestats';
const plugin = 'postcss-stylestats';

module.exports = postcss.plugin(plugin, (opts) => {
    opts = opts || {};

    return (root, result) => {
        const styleStats = new StyleStats(root.source.input.css, opts);

        return styleStats.parse((error, stats) => {
            if (error !== null) {
                console.error(error.stack);
                return root;
            }

            result.messages.push({
                type,
                plugin,
                stats
            });

            return result;
        });
    };
});
