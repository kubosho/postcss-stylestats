const postcss = require('postcss');
const StyleStats = require('stylestats');

module.exports = postcss.plugin('postcss-stylestats', (opts = {}) => (
    (root, result) => {
        const styleStats = new StyleStats(root.source.input.css, opts);

        return styleStats.parse((error, stats) => {
            if (error !== null) {
                console.error(error.stack);
                return root;
            }

            result.messages.push({
                type: 'stylestats',
                plugin: 'postcss-stylestats',
                stats: stats
            });

            return result;
        });
    }
));
