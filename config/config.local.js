// /* eslint valid-jsdoc: "off" */

// 'use strict';

// const path = require('path');
// /**
//  * @param {Egg.EggAppInfo} appInfo app info
//  */
// module.exports = appInfo => {
//   /**
//    * built-in config
//    * @type {Egg.EggAppConfig}
//    **/
//   const config = exports = {};

//   // use for cookie sign key, should change to your own and keep security
//   config.keys = appInfo.name + '_1560391389136_3735';

//   // add your middleware config here
//   config.middleware = [
//     'params',
//   ];
//   config.security = {
//     csrf: {
//       enable: false,
//       ignoreJSON: false,
//       useSession: false,
//       // cookieDomain: undefined,
//       // cookieName: 'csrfToken',
//       // sessionName: 'csrfToken',
//       // headerName: 'x-csrf-token',
//       // bodyName: '_csrf',
//       // queryName: '_csrf',
//     },
//     domainWhiteList: [ 'http://www.baidu.com' ], // 配置白名单
//   };

//   config.cors = {
//     // origin: '*', // 允许所有跨域访问，注释掉则允许上面 白名单 访问
//     // 一般性最好使用白名单，不要使用全部允许跨域，不安全
//     allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
//   };
//   config.static = {
//     // 静态化访问前缀,如：`http://127.0.0.1:7001/static/images/logo.png`
//     prefix: '/',
//     dir: path.join(appInfo.baseDir, 'app/public'), // `String` or `Array:[dir1, dir2, ...]` 静态化目录,可以设置多个静态化目录
//     dynamic: true, // 如果当前访问的静态资源没有缓存，则缓存静态文件，和`preload`配合使用；
//     preload: false,
//     maxAge: 31536000, // in prod env, 0 in other envs
//     buffer: true, // in prod env, false in other envs
//   };
//   // 数据库
//   config.mysql = {
//     client: {
//       host: '127.0.0.1',
//       port: '3306',
//       user: 'root',
//       password: 'Lixiaoqi2468',
//       database: 'drwifi',
//     },
//     // load into app, default is open
//     app: true,
//     // load into agent, default is close
//     agent: false,
//   };
//   config.session = {
//     key: 'SESSION_ID',
//     maxAge: 10,
//     renew: true, // 延长会话有效期
//   };
//   config.swagger2 = {
//     enable: process.env.NODE_ENV === 'development', // disable swagger , default true
//     base: {
//       schemes: [
//         'http',
//       ],
//       host: '127.0.0.1:7001',
//       basePath: '/',
//       consumes: [
//         'application/json',
//       ],
//       produces: [
//         'application/json',
//       ],
//       info: {
//         description: process.env.description,
//         version: process.env.npm_package_version,
//         title: process.env.npm_package_name,
//       },
//       tags: [],
//       definitions: {
//       // model definitions
//       },
//       securityDefinitions: {
//       // security definitions
//       },
//     },
//   };
//   // add your user config here
//   const userConfig = {
//     // myAppName: 'egg',
//   };

//   return {
//     ...config,
//     ...userConfig,
//   };
// };
