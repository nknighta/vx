// using sample code from https://nextjs.org/docs/pages/building-your-application/configuring/custom-server
import Express, { Request, Response } from "express";
import next from 'next';
import x9 from "./x9/main";
const dev = process.env.NODE_ENV !== 'production'

const port = 3001;
// when using middleware `hostname` and `port` must be provided below
const app = next({ dev })
const handle = app.getRequestHandler()

const github_oauth_url = `https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`;

import x9gitapi from "./idata/github";
/**
 * api paths
 * /w3
 * /auth/x9
 * /api
 * /api/info
 */
const server = Express();

(async () => {
  await app.prepare();
  // api test
  //server.use("/apps", apps);
  // /api/v1/user?id=1
  //server.use(`${apiresponsepath}/user`, userdata);

  // userdata api from github
  server.use(x9gitapi);
  // x9 api routes
  server.use(x9);

  server.get(`/data/info`, (req: Request, res: Response) => {
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({
      message: "vx v0.5",
    }));
    res.statusCode = 200;
  });

  server.all("*", (req: Request, res: Response) => {
    console.log(process.env.NODE_ENV === "development" ? 
      `method: ${req.method} url:http://localhost:${port}${req.url}`
      : 
      null)
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
    if (dev || process.env.NODE_ENV === "development") {
      console.log(startUpMsg("localhost", port, "development"));
      console.log(`http://localhost:${port}/test`);
    } else {
      return null;
    }
  });
})();

const startUpMsg = (addres, port, mode) => `> Ready on http://${addres}:${port}/ in ${mode} mode`;