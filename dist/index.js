"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// using sample code from https://nextjs.org/docs/pages/building-your-application/configuring/custom-server
var express_1 = __importDefault(require("express"));
var next_1 = __importDefault(require("next"));
var main_1 = __importDefault(require("./x9/main"));
var dev = process.env.NODE_ENV !== 'production';
var port = 3000;
// when using middleware `hostname` and `port` must be provided below
var app = (0, next_1.default)({ dev: dev });
var handle = app.getRequestHandler();
var github_oauth_url = "https://github.com/login/oauth/authorize?client_id=".concat(process.env.GITHUB_CLIENT_ID);
var github_1 = __importDefault(require("./idata/github"));
/**
 * api paths
 * /w3
 * /auth/x9
 * /api
 * /api/info
 */
var server = (0, express_1.default)();
(function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, app.prepare()];
            case 1:
                _a.sent();
                // api test
                //server.use("/apps", apps);
                // /api/v1/user?id=1
                //server.use(`${apiresponsepath}/user`, userdata);
                // userdata api from github
                server.use(github_1.default);
                // x9 api routes
                server.use(main_1.default);
                server.get("/data/info", function (req, res) {
                    res.setHeader("Content-Type", "application/json");
                    res.end(JSON.stringify({
                        message: "vx v0.5",
                    }));
                    res.statusCode = 200;
                });
                server.all("*", function (req, res) {
                    return handle(req, res);
                });
                server.get("*", function (req, res) {
                    console.log("request to " + req.url);
                    return handle(req, res);
                });
                server.post("*", function (req, res) {
                    console.log("request to " + req.url);
                    return handle(req, res);
                });
                server.listen(port, function () {
                    if (dev || process.env.NODE_ENV === "development") {
                        console.log(startUpMsg("localhost", port, "development"));
                    }
                    else {
                        return null;
                    }
                });
                return [2 /*return*/];
        }
    });
}); })();
var startUpMsg = function (addres, port, mode) { return "> Ready on http://".concat(addres, ":").concat(port, "/ in ").concat(mode, " mode"); };
