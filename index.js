var program = require('commander');
var appRoot = require('app-root-path');
var fs = require('fs');

var componentTemplate = require('./templates/component');
var specComponentTemplate = require('./templates/spec-component');
var classComponentTemplate = require('./templates/class-component');
var containerTemplate = require('./templates/container');
var storeTemplate = require('./templates/store');
var specStoreTemplate = require('./templates/spec-store');

var utils = require('./utils');


program
    .option('-g, --generate <type>, generate a new application element')
    .option('-n, --name <name>, name for new file')
    .parse(process.argv)

const LOWER = program.name.toLowerCase();
const CAPITAL = utils.toCapitalCase(LOWER);
const FOLDER = '/' + CAPITAL + '/';

switch (program.generate) {
    case 'component':
        createAsset('components', CAPITAL, componentTemplate, specComponentTemplate);
        break;
    case 'class-component':
        createAsset('components', CAPITAL, classComponentTemplate, specComponentTemplate);
        break;
    case 'container':
        createAsset('containers', CAPITAL, containerTemplate, specComponentTemplate);
        break;
    case 'store':
        createAsset('stores', LOWER + 'Store', storeTemplate, specStoreTemplate);
        break;
    default:
        console.error(program.generate + ' is not a valid element that can be created');
        break;
}

function createAsset(type, fileName, fileTemplate, specTemplate){
    const assetPath = './' + type + FOLDER;

    try {
        fs.mkdirSync(assetPath);
        console.info(fileName + ' was successfully created!');
    } catch(err){
        console.error(err);
        console.error(`That ${type} already exists.  Delete existing file or choose another name.`);
    }

    fs.writeFile(assetPath + CAPITAL + '.js', fileTemplate(LOWER, CAPITAL), function(err){
            if(err){
                console.error(err);
            }

            console.info(`${fileName}.js was successfully created!`)
        });

        fs.writeFile(assetPath + 'spec.js', specTemplate(LOWER, CAPITAL), function(err){
            if(err){
                console.error(err);
            }

            console.info(`${CAPITAL} test file was successfully created!`);
        })


}