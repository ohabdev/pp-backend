const http = require('http');
const _ = require('lodash');
const mongoose = require('mongoose');

class Kernel {

    constructor(config){
        // Kernel object base key configuration
        this.config = config || {};
        this._modelSchema = {};
        this._mongoosePlugins = {};
        this._routes = [];
        this._agendaJobs = [];
        this._services =  {};
        this.httpServer = null;
        this.db = {};
        this.middleware = {
            Response: {},
            Request: {}
        }
    }

    addProp(key, val){
        this[key] = val;
    }
    
    startHttpServer() {
        const app = http.createServer(this.app);
        app.listen(process.env.PORT, null, () => {
            // TODO - load env from config
            console.log('Express server listening on %d, in %s mode', process.env.PORT, process.env.NODE_ENV || 'development');
        });
    }
    
    loadModule(module){

        console.log('=====loadModule==>', module);

        if (module.config){
            this.config = _.defaults(this.config, module.config);
        }

        if (module.core) {
            module.core(this);    
        }
    }
}

function kernelFactory(config) {

    const kernel = new Kernel(config);
    
    kernel.loadModule(require('./core/express'));
    kernel.loadModule(require('./core/mongoose'));
    kernel.loadModule(require('./models/log'));

    return kernel;
}
  
module.exports = kernelFactory;