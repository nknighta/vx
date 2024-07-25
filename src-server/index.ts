// using sample code from https://nextjs.org/docs/pages/building-your-application/configuring/custom-server
import { createServer } from "http";
import { parse } from "url";
import { z } from "zod";
import next from 'next'
const dev = process.env.NODE_ENV !== 'production'
// when using middleware `hostname` and `port` must be provided below
const app = next({ dev })
const handle = app.getRequestHandler()
// Get command line arguments

app.prepare().then(() => {
  createServer(async (req, res) => {
    try {
      const pz = z.string();
      const url = pz.parse(req.url);
      const parsedUrl = parse(url, true)
      const { pathname } = parsedUrl
      if (pathname === '/hello') {
        res.statusCode = 200
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify({ message: 'Hello World' }))
      } else if (pathname === '/w3/') {
        res.writeHead(301, { Location: '/w3/core/' });
      }
      else {
        await handle(req, res, parsedUrl)
      }
    } catch (err) {
      console.error('Error occurred handling', req.url, err)
      res.statusCode = 500
      res.end('internal server error')
    }
  })
    .once('error', (err) => {
      console.error(err)
      process.exit(1)
    })
    .listen(3000, () => {
      console.log(`> Ready on http://localhost:3000`)
    })
})

export default app;