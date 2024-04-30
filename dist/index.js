"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const next_1 = __importDefault(require("next"));
const router_1 = require("./router");
const port = 3000;
const dev = process.env.NODE_ENV === "development";
const app = (0, next_1.default)({ dev: dev });
const handle = app.getRequestHandler();
(async () => {
    await app.prepare();
    const server = (0, express_1.default)();
    server.use("/api", router_1.router);
    // api test
    server.all("*", (req, res) => {
        return handle(req, res);
    });
    server.get("/auth", (req, res) => {
        const { session } = res.locals;
        res.render("index", { user: session?.user });
    });
    server.get("*", (req, res) => {
        console.log("request to " + req.url);
        return handle(req, res);
    });
    server.post("*", (req, res) => {
        console.log("request to " + req.url);
        return handle(req, res);
    });
    server.set('trust proxy', true);
    server.listen(port);
})();
