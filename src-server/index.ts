import express, { Request, Response } from "express";
import next from "next";

const dev = process.env.NODE_ENV === "development";
const app = next({ dev });
const handle = app.getRequestHandler();

const prod = next({ dev: false });

(async () => {
  try {
    await app.prepare();
    const server = express();
    server.all("*", (req: Request, res: Response) => {
      return handle(req, res);
    });
    server.listen(3000, () => {
      console.log(`http://$127.0.0.1:${3000}`); 
    });
  } catch (e) {
    console.error(e);
  }
})();

(async () => {
  try {
    await app.prepare();
    const server = express();
    server.all("*", (req: Request, res: Response) => {
      return handle(req, res);
    });
    server.listen(3001, () => {
      console.log(`http://$127.0.0.1:${3001}`);
    });
  } catch (e) {
    console.error(e);
  }
})();
