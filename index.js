const postcss = require('postcss');
const StyleStats = require('stylestats');
const Format = require('stylestats/lib/format');

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

            var format = new Format(stats);
            var method;

            switch (opts.type) {
            case 'json':
                method = 'toJSON';
                break;
            case 'csv':
                method = 'toCSV';
                break;
            case 'html':
                method = 'toHTML';
                break;
            case 'md':
                method = 'toMarkdown';
                break;
            default:
                method = 'toTable';
                break;
            }

            format[method]((data) => {
                result.messages.push({
                    type,
                    plugin,
                    stats: data
                });
            });

            return result;
        });
    };
});
