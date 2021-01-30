const express =  require('express');
const path =  require('path');
const SwigEngine = require('swig').Swig;
const nconf = require('nconf');
const cors = require('cors');

const swig = new SwigEngine();

exports.name = 'kernel-app';

exports.config = {
    publicPath: path.resolve('./public')
};

exports.core = (kernel) => {
    kernel.addProp('app', express());
    kernel.app.engine('swig', swig.renderFile);
    kernel.app.engine('html', swig.renderFile);
    kernel.app.set('view engine', 'swig');
    kernel.app.set('views', path.join(__dirname, '..', '..', 'views'));
    kernel.app.set('view cache', false);
    kernel.app.disable('x-powered-by');
    kernel.app.locals.baseUrl = nconf.get('baseUrl');

    process.env.ALLOW_CORS && kernel.app.use(cors());
    

} 