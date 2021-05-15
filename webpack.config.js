const path = require('path');

module.exports = {
    entry: [path.resolve('assets', 'js', 'script.js')],
    output: {
        path: path.resolve('static', 'assets', 'js'),
        filename: 'bundle.js',
    },
};