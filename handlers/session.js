'use strict'

const session = require('koa-session');
const config = require('config');

module.exports = app => {
    app.keys = [config.get('secret')];

    const CONFIG = {
      key: config.get('session_key'),
      maxAge: 86400000,
      overwrite: true,
      httpOnly: true,
      signed: true,
      rolling: false
  };

    app.use(session(CONFIG, app));
};
