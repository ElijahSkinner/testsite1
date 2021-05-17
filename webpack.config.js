const path = require('path');
const WebpackManifestPlugin = require('webpack-manifest-plugin');

module.exports = {
    entry: './assets/js/script.js',
    output: {
        path: path.resolve('static', 'assets', 'js'),
        filename: 'bundle.js',
    },
    externals: {
        jquery: 'jQuery',
    },/*
    plugins: [
        new WebpackManifestPlugin({
            fileName:'../assets/manifest.json'
        })
    ]*/
};