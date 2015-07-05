/*
 * Copyright 2015. Author: Jeffrey Hing. All Rights Reserved.
 *
 * MIT License
 *
 * Webpack configuration for develepment.
 */
'use strict';

//-------------------------------------
// Module dependencies and variables
//-------------------------------------

var path = require('path');
var common = require('./webpack.common.js');

//-------------------------------------
// Module exports
//-------------------------------------

module.exports = {

    devServer: {
        contentBase: 'src/',
        noInfo: true,
        inline: true
    },

    entry: './src/app.js',

    eslint: {
        failOnError: false
    },

    module: {
        loaders: [
            common.CSS_LOADER,
            common.ESLINT_LOADER,
            common.HTML_LOADER
        ]
    },

    output: {},

    resolve: {
        alias: {
            'angular-cabinet-directive': path.join(__dirname,
                common.CABINET_DIRECTIVE_SOURCE)
        }
    }
};
