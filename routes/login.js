const passport = require('koa-passport');

exports.post = async function(ctx, next) {
    console.log('server loggin', ctx.body);
    return passport.authenticate('local', {
            successRedirect: '/',
            failureRedirect: '/'/*,
            failureFlash: true // req.flash, better*/
        })(ctx, next);
};
