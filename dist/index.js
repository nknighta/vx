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
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
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
var http_1 = require("http");
var basic_1 = require("./auth/basic");
var url_1 = require("url");
var zod_1 = require("zod");
var github_1 = require("./auth/github");
var callbacked_1 = require("./auth/callbacked");
var index_1 = require("./w3/index");
var next_1 = __importDefault(require("next"));
var dev = process.env.NODE_ENV !== 'production';
<<<<<<< HEAD
=======
var hostname = 'localhost';
var port = 3003;
>>>>>>> 1de88a642b1f67ec54bef10e077551533c22de4a
// when using middleware `hostname` and `port` must be provided below
var app = (0, next_1.default)({ dev: dev });
var handle = app.getRequestHandler();
// Get command line arguments
app.prepare().then(function () {
    (0, http_1.createServer)(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var pz, url, parsedUrl, pathname, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 13, , 14]);
                    pz = zod_1.z.string();
                    url = pz.parse(req.url);
                    parsedUrl = (0, url_1.parse)(url, true);
                    pathname = parsedUrl.pathname;
                    if (!(pathname === '/hello')) return [3 /*break*/, 1];
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'application/json');
                    res.end(JSON.stringify({ message: 'Hello World' }));
                    return [3 /*break*/, 12];
                case 1:
                    if (!(pathname === '/auth')) return [3 /*break*/, 3];
                    console.log('Request:', req.url);
                    return [4 /*yield*/, (0, basic_1.authBasicHandler)(res, req, pathname)];
                case 2:
                    _a.sent();
                    return [3 /*break*/, 12];
                case 3:
                    if (!(pathname === '/auth/github/')) return [3 /*break*/, 5];
                    return [4 /*yield*/, (0, github_1.authGithubHandler)(res, req, url)];
                case 4:
                    _a.sent();
                    return [3 /*break*/, 12];
                case 5:
                    if (!(pathname === '/auth/callback/')) return [3 /*break*/, 7];
                    console.log('Request:', req.url);
                    return [4 /*yield*/, (0, callbacked_1.authCallbackHandler)(res, req, url)];
                case 6:
                    _a.sent();
                    return [3 /*break*/, 12];
                case 7:
                    if (!(pathname == '/w3/core/')) return [3 /*break*/, 9];
                    console.log('Request:', req.url);
                    return [4 /*yield*/, (0, index_1.W3)(res, req, url)];
                case 8:
                    _a.sent();
                    return [3 /*break*/, 12];
                case 9:
                    if (!(pathname === '/w3/')) return [3 /*break*/, 10];
                    res.writeHead(301, { Location: '/w3/core/' });
                    return [3 /*break*/, 12];
                case 10: return [4 /*yield*/, handle(req, res, parsedUrl)];
                case 11:
                    _a.sent();
                    _a.label = 12;
                case 12: return [3 /*break*/, 14];
                case 13:
                    err_1 = _a.sent();
                    console.error('Error occurred handling', req.url, err_1);
                    res.statusCode = 500;
                    res.end('internal server error');
                    return [3 /*break*/, 14];
                case 14: return [2 /*return*/];
            }
        });
    }); })
        .once('error', function (err) {
        console.error(err);
        process.exit(1);
    })
        .listen(3000, function () {
        console.log("> Ready on http://localhost:3000");
    });
});
// authriztion handler for basic
