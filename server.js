const Koa = require('koa');
const config = require('config');
const app = new Koa();

const passport = require('koa-passport');

//db connect
require('./libs/database');

// trust proxy
app.proxy = true

//middlewares
require('./handlers/favicon')(app);
require('./handlers/static')(app);
require('./handlers/logger')(app);
require('./handlers/error')(app);
require('./handlers/body_parser')(app);
require('./handlers/session')(app);
require('./handlers/passport')(app);


// routes
const fs    = require('fs');
const Router = require('koa-router');
const router = new Router();

router.get('/isloggedin', function(ctx) {
    console.log('isLogged - ', ctx.isAuthenticated());
    console.log('Session - ', ctx.session);
    /*console.log('ctx.csrf - ',ctx.csrf);
    console.log('ctx.headers - ',ctx.headers);
    console.log('csrf-token ',ctx.req.headers['csrf-token']);
    console.log('xsrf-token ',ctx.req.headers['xsrf-token']);
    console.log('x-csrf-token ',ctx.req.headers['x-csrf-token']);
    console.log('x-xsrf-token ', ctx.req.headers['x-xsrf-token']);*/
    ctx.body = {result: ctx.isAuthenticated()};
});

/*router.get('/', function(ctx) {
  ctx.type = 'html'
  ctx.body = fs.createReadStream('views/login.html')
});

router.post('/custom', function(ctx) {
  return passport.authenticate('local', function(err, user, info, status) {
    if (user === false) {
      ctx.body = { success: false }
      ctx.throw(401)
    } else {
      ctx.body = { success: true }
      return ctx.login(user)
    }
  })(ctx)
});*/

// POST /login
/*router.post('/login',
  passport.authenticate('local', {
        successRedirect: '/',
        failureRedirect: '/'
    })
);*/

require('./routes/login')(router);
router.get('/logout', require('./routes/logout'));

require('./routes/theme')(router);
require('./routes/article')(router);

app.use(router.routes());

// start server
const port = process.env.PORT || config.get('port');

if(require.main === module)
    app.listen(port, () => console.log('Server listening on', port))
else
    module.exports = app;
