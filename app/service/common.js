'use strict';

const Service = require('egg').Service;
const mysql_help = require('mysql_help');

class common extends Service {
  async getRowsByPage(tableName, p, g) {
    if (tableName && typeof tableName === 'string') {
      p = p ? p : 0;
      g = g ? g : 10;
      const sysPanelHelp = new mysql_help(tableName);
      const data = await sysPanelHelp.getRowsByPage(p, g);
      const total = await sysPanelHelp.getCount(p, g);
      data.total = total.result[0]['COUNT(*)'];
      return data;
    }
    return {
      status: 0,
      msg: '未识别到表名',
    };
  }
  async addRow(tableName, param) {
    const sysPanelHelp = new mysql_help(tableName);
    const s = await sysPanelHelp.addRow(param);
    return s;
  }
  async addRows(tableName, params) {
    const sysPanelHelp = new mysql_help(tableName);
    const s = await sysPanelHelp.addRows(params);
    return s;
  }
  async updateRow(tableName, param) {
    const sysPanelHelp = new mysql_help(tableName);
    const s = await sysPanelHelp.updateRow(param);
    return s;
  }
  async updateRows(tableName, params) {
    const sysPanelHelp = new mysql_help(tableName);
    const s = await sysPanelHelp.updateRows(params);
    return s;
  }
  async deleteRow(tableName, id) {
    const sysPanelHelp = new mysql_help(tableName);
    const s = await sysPanelHelp.deleteRow(id);
    return s;
  }
  async deleteRows(tableName, ids, field) {
    const sysPanelHelp = new mysql_help(tableName);
    const s = await sysPanelHelp.deleteRows(ids, field);
    return s;
  }
}

module.exports = common;
