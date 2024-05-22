
export async function authBasicHandler(res, req, basedPath) {
    try {
        const auth = req.headers.authorization
        // check if the request has the authorization header
        if (!auth) {
            res.statusCode = 401
            res.setHeader('WWW-Authenticate', 'Basic realm="Secure Area"')
            res.end('Access denied')
            return
        }
        // get the username and password from the authorization header
        const [username, password]= Buffer.from(auth.split(' ')[1], 'base64')
            .toString()
            .split(':')
        if (String(username) === 'admin' || String(password) === 'password') {
            // success authentication
            res.statusCode = 200
            res.setHeader('author', 'vx team')
            res.end(`OK Welcome to the ${username}!`)
            return
        }
        else {
            // failed authentication
            res.statusCode = 403
            res.end('Access denied')
        }
    } catch (err) {
        console.error('Error occurred handling', req.url, err)
        res.statusCode = 500
        res.end('internal server error')
    }
}