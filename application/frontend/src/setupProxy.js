const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app) {
  app.use(require('body-parser').json({limit: '50mb'}));
  app.use(
    ['/api', '/media'],
    createProxyMiddleware({
      target: 'http://localhost:5000/', changeOrigin: true
    })
  );
};