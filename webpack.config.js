const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const WebpackManifestPlugin = require('webpack-manifest-plugin');

module.exports = {
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.(scss|sass)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'sass-loader',
                ]
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
    resolve: {
        alias: {
            'jquery': path.join(__dirname, '/node_modules/jquery/dist/jquery.js')
        }
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        }),
        new MiniCssExtractPlugin()
    ]
};