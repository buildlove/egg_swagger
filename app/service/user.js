'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  async find(uid) {
    const { ctx } = this;
    console.log(this);
    const user = await ctx.app.mysql.query('select * from citys where id = "0MKzEdMdhJG88sB"');
    return user;
  }
}

module.exports = UserService;
