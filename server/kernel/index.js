const http = require('http');
<<<<<<< HEAD
const mongoose = require('mongoose');
=======
const _ = require('lodash');
>>>>>>> b4e6fc970906d9d49b6121e29fc1d8be71629edd

class Kernel {
    startHttpServer() {
        const app = http.createServer(this.app);
        app.listen(process.env.PORT, null, () => {
            // TODO - load env from config
            console.log('Express server listening on %d, in %s mode', process.env.PORT, process.env.NODE_ENV || 'development');
        });
    }
}

function kernelFactory(config) {
    const kernel = new Kernel(config);
    return kernel;
}
  
module.exports = kernelFactory;