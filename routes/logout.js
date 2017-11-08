'use strict'

module.exports = async function(ctx) {
    ctx.logout();
    ctx.redirect('/');
};
