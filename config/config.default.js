'use strict';

module.exports = appInfo => {
  const config = exports = {
    cluster: {
      listen: {
        path: '',
        port: 9000,
        hostname: '0.0.0.0',
      },
    },
  };
  // 添加 view 配置
  exports.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.tpl': 'nunjucks',
    },
  };

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1543975812976_6191';

  // add your config here
  config.middleware = [];

  return config;
};
