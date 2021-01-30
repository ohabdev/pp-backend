const http = require('http');
const _ = require('lodash');

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