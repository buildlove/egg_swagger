'use strict';
let i = 0;
module.exports = {
  schedule: {
    interval: '100m', // 1 分钟间隔  '0 30 5 * * 1', //每周一的5点30分0秒更新
    type: 'all', // 指定所有的 worker 都需要执行
  },
  async task(ctx) {
    i++;
    console.log(i);
  },
};
