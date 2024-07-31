import fastify, { FastifyInstance, FastifySchema, RouteShorthandOptionsWithHandler } from 'fastify';

export default async function (fastify: FastifyInstance) {
  fastify.get('/', async function () {
    return { message: 'VX API', version: '1.2.0' };
  });

  let users = ['main']

  fastify.get('/ping', async (request, reply) => {
    return 'pong\n'
  })

  // GET endpoint to retrieve data from the shopping array
  fastify.get('/api/data/open/users', async (request, reply) => {
    return users
  })

  // Define a schema for the POST request body
  const postShoppingSchema: FastifySchema = {
    body: {
      type: 'object',
      properties: {
        user: { type: 'string' }
      },
      required: ['user']
    }
  }

  // POST endpoint to add data to the shopping array
  const postShoppingOptions: RouteShorthandOptionsWithHandler = {
    schema: postShoppingSchema,
    handler: async (request, reply) => {
      // asを使用して、型アサーションを行う。型アサーションとは、型を明示的に指定すること。
      const { user } = request.body as { user: string }
      users.push(user)
      return users
    }
  }

  fastify.post('/api/users', postShoppingOptions)
}
