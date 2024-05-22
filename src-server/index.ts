
const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')

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
      const parsedUrl = parse(req.url, true)
      const { pathname, query } = parsedUrl
      if (pathname === '/hello') {
        res.statusCode = 200
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify({ message: 'Hello World' }))
      } else if (pathname === '/auth') {
        console.log('Request:', req.url)
        authBasicHandler(res, req, pathname)
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
    .listen(port, () => {
      console.log(`> Ready on http://${hostname}:${port}`)
    })
})

// authriztion handler for basic
async function authBasicHandler(res, req, basedPath) {
  try {
    const auth = req.headers.authorization
    if (!auth) {
      res.statusCode = 401
      res.setHeader('WWW-Authenticate', 'Basic realm="Secure Area"')
      res.end('Access denied')
      return
    }
    const [username, password] = Buffer.from(auth.split(' ')[1], 'base64')
      .toString()
      .split(':')
    if (username === 'admin' || password === 'password') {
      res.statusCode = 200
      res.end('OK')
    }  else {
      res.statusCode = 403
      res.end('Access denied')
    }
  } catch (err) { 
    console.error('Error occurred handling', req.url, err)
    res.statusCode = 500
    res.end('internal server error')
  }
  //const data = { name: 'auth', value: 'true' }
  //res.statusCode = 200
  //res.setHeader('Content-Type', 'application/json')
  //res.end(JSON.stringify(data))
}