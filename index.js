const next = require('next')
const { parse } = require('url')
const dev = process.env.NODE_ENV !== 'production'
const { appName, serverPort } = require('./config')
const app = next({
  dev,
  quiet: false
})

const handle = app.getRequestHandler()

app.prepare().then(() => {
  const fastify = require('fastify')({
    // 可以开启logger,方便debug;关闭logger，主要是因为log刷屏
    logger: true
  })

  // 注册一个fastify插件，起api路由作用
  fastify.register(require('./server/router'))



  // 增加一个fastify中间件，分别规定命中next路由和fastify的api路由
  fastify.use((req, res, next) => {
    const parsedUrl = parse(req.url, true)
    let reqPath = parsedUrl.path
    console.log('path', parsedUrl.path)
    if (reqPath.search(/^\/api/) === -1) {
      handle(req, res, parsedUrl)
    } else {
      next()
    }
  })

  fastify.listen(serverPort, function (err, address) {
    if (err) {
      fastify.log.error(err)
      process.exit(1)
    }
    fastify.log.info(`server listening on ${address}`)
  })

})


