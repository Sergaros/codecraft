const Koa = require('koa');
const app = new Koa();

const config = require('config');

const path = require('path');
const fs = require('fs');

const handlers = fs.readdirSync(path.join(__dirname, 'handlers')).sort();
handlers.forEach(handler => require('./handlers/' + handler).init(app));

const Router = require('koa-router');
const router = new Router();

//require('./routes/some_rout')(router);
//router.post('/api/login', require('./routes/login').post);

app.use(router.routes());

app.listen(config.get('port'));
