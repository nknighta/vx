import express, { Request, Response } from 'express';
import next from "next";
import { router } from "./router"; 

const port = 3000;
const dev = process.env.NODE_ENV === "development";
const app = next({ dev: dev });
const handle = app.getRequestHandler();

(async () => {
    await app.prepare();
    const server = express();
    server.use("/api", router);

    // api test
    server.all("*", (req: Request, res: Response) => {
        return handle(req, res);
    });

    server.get("/auth", (req, res) => {
        const { session } = res.locals
        res.render("index", { user: session?.user })
    })
    server.get("*", (req: Request, res: Response) => {
        console.log("request to " + req.url);
        return handle(req, res);
    });

    server.post("*", (req: Request, res: Response) => {
        console.log("request to " + req.url);
        return handle(req, res);
    });

    server.set('trust proxy', true)
    server.listen(port)
})();