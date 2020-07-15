const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app) {
  app.use(
    ['/api', '/media'],
    createProxyMiddleware({
      target: 'http://localhost:5000/'
    })
  );
};