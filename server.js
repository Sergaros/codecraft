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

router.get('/isloggedin', async function(ctx) {
    //console.log('isLogged - ', ctx.isAuthenticated());
    //console.log('Session - ', ctx.session.passport.user);
    /*console.log('ctx.csrf - ',ctx.csrf);
    console.log('ctx.headers - ',ctx.headers);
    console.log('csrf-token ',ctx.req.headers['csrf-token']);
    console.log('xsrf-token ',ctx.req.headers['xsrf-token']);
    console.log('x-csrf-token ',ctx.req.headers['x-csrf-token']);
    console.log('x-xsrf-token ', ctx.req.headers['x-xsrf-token']);*/
    ctx.body = {result: ctx.isAuthenticated()};
});

router.post('/login', require('./routes/login').post);
router.get('/logout', require('./routes/logout').post);

//require('./routes/some_rout')(router);
//router.post('/api/login', require('./routes/login').post);

app.use(router.routes());

app.listen(config.get('port'));

//git push -u origin master
