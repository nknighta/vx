// using sample code from https://nextjs.org/docs/pages/building-your-application/configuring/custom-server
import express, { Request, Response } from "express";
import next from 'next'

const dev = process.env.NODE_ENV !== 'production'

const port = 3000;
// when using middleware `hostname` and `port` must be provided below
const app = next({ dev })
const handle = app.getRequestHandler()

const github_oauth_url = `https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`;
/**
 * api paths
 * /w3
 * /auth/x9
 * /api
 * /api/info
 */

(async () => {
  await app.prepare();
  const server = express();
  let apiresponsepath = "/api/v1";
  // api test
  //server.use("/apps", apps);
  // /api/v1/user?id=1
  //server.use(`${apiresponsepath}/user`, userdata);
  server.use(`${apiresponsepath}/info`, (req: Request, res: Response) => {
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({
      message: "vx v0.5",
    }));
    res.statusCode = 200;
  });

  server.all("*", (req: Request, res: Response) => {
    return handle(req, res);
  });
  server.get("*", (req: Request, res: Response) => {
    console.log("request to " + req.url);
    return handle(req, res);
  });

  server.post("*", (req: Request, res: Response) => {
    console.log("request to " + req.url);
    return handle(req, res);
  });

  server.listen(port, () => {
    console.log(`> Ready on http://127.0.0.1:${port}/ - env ${process.env.NODE_ENV}`);
  });
})();