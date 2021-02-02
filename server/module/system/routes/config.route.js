
const configController =  require('../controllers/config.controller');

module.exports = (router) => {

    router.get(
        '/v1/system/configs/public',
        configController.publicConfig,
        Middleware.Response.success('publicConfig')
    )

}