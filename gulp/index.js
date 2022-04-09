const { series, parallel } = require('gulp');

require('./tasks/compileTsFiles');
require('./tasks/copyPageTemplates');
var cleanDistFolder = require('./tasks/cleanDistFolder');
require('./tasks/copyStaticResources');


var tasks = series(
    cleanDistFolder,
    'compileTsFiles',
    parallel('copyPageTemplates', 'copyStaticResources'));


module.exports = tasks;
