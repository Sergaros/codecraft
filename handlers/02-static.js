const serve = require('koa-static');
exports.init = app => {
    app.use(serve('client/dist'));
    //app.use(serve('some_path'));
}
