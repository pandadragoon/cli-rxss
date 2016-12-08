#! /usr/bin/env node

var shell = require('shelljs');
var argv = require('yargs').argv;

shell.exec(`node ../index.js -g ${ argv.g || argv.generate } -n ${ arvg.n || arvg.name }`);