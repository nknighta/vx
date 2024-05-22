// using sample code from https://nextjs.org/docs/pages/building-your-application/configuring/custom-server
import { createServer } from "http";
import { authBasicHandler } from "./auth/basic";
import { parse } from "url";
import { z } from "zod";
import { authGithubHandler } from "./auth/github";
//const next = require('next')
import next from 'next'
const dev = process.env.NODE_ENV !== 'production'
const hostname = 'localhost'
const port = 3000
// when using middleware `hostname` and `port` must be provided below
const app = next({ dev, hostname, port })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  createServer(async (req, res) => {
    try {
      // Be sure to pass `true` as the second argument to `url.parse`.
      // This tells it to parse the query portion of the URL.
      const pz = z.string();
      const url = pz.parse(req.url);
      const parsedUrl = parse(url, true)
      const { pathname } = parsedUrl
      if (pathname === '/hello') {
        res.statusCode = 200
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify({ message: 'Hello World' }))
      } else if (pathname === '/auth') {
        console.log('Request:', req.url)
        authBasicHandler(res, req, pathname)
      } else if (pathname === '/auth/github') {
        authGithubHandler(res, req)
      } else {
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
    .listen(port, () => {
      console.log(`> Ready on http://${hostname}:${port}`)
    })
})

// authriztion handler for basic
