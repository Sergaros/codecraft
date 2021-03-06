'use strict'

const passport = require('koa-passport');
const Recaptcha = require('recaptcha2');
const config = require('config');

const PUBLIC_KEY = config.get('recaptcha.public_key');
const PRIVATE_KEY = config.get('recaptcha.private_key');

const recaptcha = new Recaptcha({
  siteKey: PUBLIC_KEY,
  secretKey: PRIVATE_KEY
});

module.exports = (router)=>{
    router.post('/login',
        function (ctx, next) {
            return recaptcha.validate(ctx.request.body.recaptcha, ctx.request.ip)
                .then(function() {
                    return next();
                })
                .catch(function(errorCodes) {
                    console.log(recaptcha.translateErrors(errorCodes)); // translate error codes to human readable text
                    ctx.body = {result: false}
                });
        },
        function (ctx, next) {
            return passport.authenticate('local')(ctx, next);
        },
        function(ctx) {
            ctx.body = {
                result: ctx.isAuthenticated()
            };
        }
    )
}
