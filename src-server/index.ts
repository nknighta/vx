// using sample code from https://nextjs.org/docs/pages/building-your-application/configuring/custom-server
import { createServer } from "http";
import { authBasicHandler } from "./auth/basic";
import { parse } from "url";
import { z } from "zod";
import { authGithubHandler } from "./auth/github";
import { authCallbackHandler } from "./auth/callbacked";
import { W3 } from "./w3/index";
import next from 'next'
const dev = process.env.NODE_ENV !== 'production'
<<<<<<< HEAD
=======
const hostname = 'localhost'
const port = 3003
>>>>>>> 1de88a642b1f67ec54bef10e077551533c22de4a
// when using middleware `hostname` and `port` must be provided below
const app = next({ dev})
const handle = app.getRequestHandler()
// Get command line arguments

app.prepare().then(() => {
  createServer(async (req, res) => {
    try {
      // Be sure to pass `true` as the second argument to `url.parse`.
      // This tells it to parse the query portion of the URL.
      
      //if (args[0] == '--open') {
      //}
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
        await authBasicHandler(res, req, pathname)
      } else if (pathname === '/auth/github/') {
        await authGithubHandler(res, req, url)
      } else if (pathname === '/auth/callback/') {
        console.log('Request:', req.url)
        await  authCallbackHandler(res, req, url)
      } else if (pathname == '/w3/core/') {
        console.log('Request:', req.url)
        await W3(res, req, url)
      }  else if (pathname === '/w3/') {
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

// authriztion handler for basic
