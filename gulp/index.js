require('./tasks/compileTsFiles');
require('./tasks/copyPageTemplates');
var cleanDistFolder = require('./tasks/cleanDistFolder');
require('./tasks/copyStaticResources');

module.exports = [
    cleanDistFolder,
    'compileTsFiles',
    'copyPageTemplates',
    'copyStaticResources'
];