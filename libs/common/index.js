const checkAuth = (ctx, next)=>{
    if(ctx.isAuthenticated())
        return next();
    else {
        ctx.status = 401;
        ctx.body = 'Authorisation fail.';
    }
}

module.exports = {checkAuth};
