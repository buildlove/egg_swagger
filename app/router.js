'use strict';
const commonRouter = require('./routers/common');
const mysql_help = require('mysql_help');

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  mysql_help.config({
    mysql: app.config.mysql.client,
  });
  commonRouter(app);
};
