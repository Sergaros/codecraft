'use strict'

const serve = require('koa-static');

module.exports = app => {
    app.use(serve('client/dist'));
}
