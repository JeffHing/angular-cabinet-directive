/*
 * Copyright 2015. Author: Jeffrey Hing. All Rights Reserved.
 *
 * MIT License
 *
 * menus directive.
 */
'use strict';

//--------------------------------------
// Module dependencies and variables
//--------------------------------------

var cabinetDirective = require('angular-cabinet');

require('./menusDirective.css');

//--------------------------------------
// Module exports
//--------------------------------------

module.exports = function(moduleName) {

    cabinetDirective(moduleName, {
        openOnHover: true,

        directiveNames: {
            cabinet: 'menus',
            drawerTrigger: 'menuTrigger',
            drawerContents: 'menuContents',
            drawerClass: 'menuClass'
        }
    });
};
