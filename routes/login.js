const passport = require('koa-passport');

exports.post = async function(ctx, next) {
    console.log('server loggin', ctx.request.body);
    return passport.authenticate('local', {
            successRedirect: '/',
            failureRedirect: '/'
        })(ctx, next);
};
