const Koa = require('koa');
const app = new Koa();

const config = require('config');

const path = require('path');
const fs = require('fs');

const mongoose = require('m_mongoose');
require('m_database');

const handlers = fs.readdirSync(path.join(__dirname, 'handlers')).sort();
handlers.forEach(handler => require('./handlers/' + handler).init(app));

const Router = require('koa-router');
const router = new Router();

router.get('/dbtest', async function(ctx) {
    //let users = await mongoose.models.User.find({});
    //console.log('users list - ', users);
    ctx.body = await mongoose.models.About.find({});
});

//require('./routes/some_rout')(router);
//router.post('/api/login', require('./routes/login').post);

app.use(router.routes());

app.listen(config.get('port'));
