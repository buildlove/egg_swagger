'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller, swagger } = app;
  router.get('/user/:id', controller.user.info);
  swagger.get('/user/:id', {
    tags: [
      {
        name: '请求用户信息',
        description: '描述接口',
      },
    ],
    summary: '副标题',
    description: '得到用户信息',
    parameters: [
      {
        in: 'query',
        name: 'id',
        description: '用户id',
      },
    ],
    responses: {},
  });
  router.get('/', controller.home.index);
  swagger.get('/', {
    tags: [
      {
        name: 'index',
        description: '描述接口',
      },
    ],
    summary: '副标题',
    description: '发射火箭',
    parameters: [
      {
        in: 'query',
        name: 'name',
        description: 'role\'s name',
      },
      {
        in: 'query',
        name: 'pageIndex',
        description: 'pageIndex',
      },
      {
        in: 'query',
        name: 'pageSize',
        description: 'pageSize',
      },
    ],
    responses: {},
  });
};
