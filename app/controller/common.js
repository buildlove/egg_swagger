'use strict';

const Controller = require('egg').Controller;

class commonController extends Controller {
  // 分页获取数据
  async getRowsByPage(tableName) {
    const { ctx } = this;
    let { p, g, table } = ctx.params;
    p = p ? p : 0;
    g = g ? g : 10;
    table = table ? table : tableName;
    const userInfo = await ctx.service.common.getRowsByPage(table, p, g);
    ctx.body = userInfo;
  }
  // 保存单条数据
  async addRow(tableName) {
    const { ctx } = this;
    let { table } = ctx.params;
    table = table ? table : tableName;
    const save = await ctx.service.common.addRow(table, commonController.Object2Arr(ctx.params));
    ctx.body = save;
  }
  // 保存多条数据
  async addRows(tableName) {
    const { ctx } = this;
    let { table } = ctx.params;
    table = table ? table : tableName;
    const save = await ctx.service.common.addRows(table, commonController.Object2Arr(ctx.params));
    ctx.body = save;
  }
  // 更新单条数据
  async updateRow(tableName) {
    const { ctx } = this;
    let { table } = ctx.params;
    table = table ? table : tableName;
    const update = await ctx.service.common.updateRow(table, commonController.Object2Arr(ctx.params));
    ctx.body = update;
  }
  // 更新多条数据
  async updateRows(tableName) {
    const { ctx } = this;
    let { table } = ctx.params;
    table = table ? table : tableName;
    const update = await ctx.service.common.updateRows(table, commonController.Object2Arr(ctx.params));
    ctx.body = update;
  }
  // 删除单条数据
  async deleteRow(tableName) {
    const { ctx } = this;
    let { id, table } = ctx.params;
    table = table ? table : tableName;
    const del = await ctx.service.common.deleteRow(table, id);
    ctx.body = del;
  }
  // 删除多条数据
  async deleteRows(tableName, field) {
    const { ctx } = this;
    let { table } = ctx.params;
    table = table ? table : tableName;
    const ids = commonController.Object2Arr(ctx.params);
    console.log(ctx.params);
    const del = await ctx.service.common.deleteRows(table, ids, field);
    ctx.body = del;
  }
  static Object2Arr(params) {
    delete params.table;
    let newArr = null;
    if (params['0']) {
      newArr = [];
      for (const i in params) {
        newArr.push(params[i]);
      }
    } else {
      newArr = params;
    }

    return newArr;
  }
}

module.exports = commonController;
