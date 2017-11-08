'use strict'

const passport = require('koa-passport');

module.exports = (router)=>{
    router.post('/login',
        passport.authenticate('local'),
        function(ctx) {
            ctx.body = {
                result: ctx.isAuthenticated()
            };
        }
    )
}
