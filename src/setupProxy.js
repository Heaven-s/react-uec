const { createProxyMiddleware } = require('http-proxy-middleware')

const PROXY_ENV = process.env.PROXY_ENV || 'dev'
const targets = {
  mock: 'http://127.0.0.1:3721/',
  dev: 'http://127.0.0.1:3721/',
  uat: 'http://127.0.0.1:3721/',
  prod: 'http://127.0.0.1:3721/'
}
console.info(`[PROXY] ${PROXY_ENV}环境: ${targets[PROXY_ENV]}`)

module.exports = function(app) {
  app.use(
    createProxyMiddleware('/api', 
      {
        target: targets[PROXY_ENV],
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    )
  )
}