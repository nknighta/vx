"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("@auth/express");
const github_1 = __importDefault(require("@auth/express/providers/github"));
const express_2 = __importDefault(require("express"));
const app = (0, express_2.default)();
// If app is served through a proxy, trust the proxy to allow HTTPS protocol to be detected
// https://expressjs.com/en/guide/behind-proxies.html
app.set('trust proxy', true);
app.use("/auth/*", (0, express_1.ExpressAuth)({ providers: [github_1.default] }));
