

exports.publicConfig = async (req, res, next) => {
    console.log('====================================');
    console.log(Middleware);
    console.log('====================================');
    res.locals.publicConfig = "Hello world";
    next();
}
