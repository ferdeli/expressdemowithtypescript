require('./tasks/compileTsFiles');
require('./tasks/copyPageTemplates');
require('./tasks/cleanDistFolder');
require('./tasks/copyStaticResources');

module.exports = [
    'cleanDistFolder',
    'compileTsFiles',
    'copyPageTemplates',
    'copyStaticResources'
];