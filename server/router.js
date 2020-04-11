const fastifyPlugin = require('fastify-plugin')
async function routes (fastify, options) {
  fastify.get('/api/hello', function (request, reply) {
    reply.send({ hello: 'world' })
  })
}

module.exports = fastifyPlugin(routes)

