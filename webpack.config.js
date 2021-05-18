const path = require('path');
const webpack = require('webpack');
// const WebpackManifestPlugin = require('webpack-manifest-plugin');

module.exports = {
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            }
        ]
    },
    entry: './assets/js/script.js',
    output: {
        path: path.resolve(__dirname, 'assets', 'js'),
        filename: 'bundle.js',
    },
    externals: {
        jquery: 'jQuery',
    },
    /*    plugins: [
           new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
            })
        ]*/
};