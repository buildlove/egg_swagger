'use strict';
const tags = [
  {
    name: '通用接口查询',
    description: '',
  },
];

const sysPanelCaseSchema = require('../definitions/sysPanelCase.json');
function commonRouter(app) {
  const { router, config, controller, swagger } = app;
  const tableName = {
    in: 'query',
    name: 'table',
    description: '表名',
    example: 'sys_panel_case',
    enum: Object.values(config.db),
  };
  router.get('/common/getRowsByPage', controller.common.getRowsByPage);
  swagger.get('/common/getRowsByPage', {
    tags,
    summary: '分页查询数据',
    description: '',
    parameters: [
      {
        in: 'query',
        name: 'p',
        description: '当前第 p 页',
        example: '1',
      },
      {
        in: 'query',
        name: 'g',
        description: '每页取 g 条数据',
        example: '10',
      },
      tableName,
    ],
    responses: {},
  });

  router.post('/common/addRow', controller.common.addRow);
  swagger.post('/common/addRow', {
    tags,
    summary: '保存单条数据',
    description: '',
    parameters: [
      tableName,
      {
        in: 'body',
        name: 'body',
        description: '保存数据表数据',
        required: true,
        schema: sysPanelCaseSchema,
      },
    ],

    responses: {},
  });

  router.post('/common/addRows', controller.common.addRows);
  swagger.post('/common/addRows', {
    tags,
    summary: '保存多条数据',
    description: '',
    parameters: [
      tableName,
      {
        in: 'body',
        name: 'body',
        description: '保存数据表数据',
        required: true,
        schema: {
          items: sysPanelCaseSchema,
        },
      },
    ],

    responses: {},
  });

  router.post('/common/updateRow', controller.common.updateRow);
  swagger.post('/common/updateRow', {
    tags,
    summary: '更新单条数据',
    description: '',
    parameters: [
      tableName,
      {
        in: 'body',
        name: 'body',
        description: '更新数据表数据',
        required: true,
        schema: sysPanelCaseSchema,
      },
    ],

    responses: {},
  });

  router.post('/common/updateRows', controller.common.updateRows);
  swagger.post('/common/updateRows', {
    tags,
    summary: '更新多条数据',
    description: '',
    parameters: [
      tableName,
      {
        in: 'body',
        name: 'body',
        description: '更新多条数据表数据4',
        required: true,
        schema: {
          items: sysPanelCaseSchema,
        },
      },
    ],
    responses: {},
  });

  router.post('/common/deleteRow', controller.common.deleteRow);
  swagger.post('/common/deleteRow', {
    tags,
    summary: '删除单条数据',
    description: '',
    parameters: [
      tableName,
      {
        in: 'query',
        name: 'id',
        description: '表 id',
        example: '236',
      },
    ],
    responses: {},
  });

  router.post('/common/deleteRows', controller.common.deleteRows);
  swagger.post('/common/deleteRows', {
    tags,
    summary: '删除多条数据',
    description: '',
    parameters: [
      tableName,
      {
        in: 'query',
        name: 'ids',
        schema: {
          items: {
            type: 'string',
            example: '236',
          },
        },
      },
    ],
    responses: {},
  });
}

module.exports = commonRouter;
