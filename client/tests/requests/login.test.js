/** @jest-environment jsdom */
global.TextEncoder = require("util").TextEncoder;
global.TextDecoder = require("util").TextDecoder;


const jsdom = require('jsdom')
const {JSDOM} = jsdom;
const login = require('../../static/js/login');
global.document = new JSDOM(html).window.document;


