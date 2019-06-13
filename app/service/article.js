'use strict';
const Service = require('egg').Service;
class ArticleService extends Service {
  async add() {
    const { ctx } = this;
    // 获取请求参数
    const {
      userId,
      title,
      content,
    } = ctx.params;
    const result = await ctx.model.Article.create({
      userId,
      title,
      content,
    });
    return result;
  }
}
module.exports = ArticleService;
