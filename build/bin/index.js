"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("../app"));
const http_1 = require("http");
const helper_1 = require("../lib/helper");
const db_1 = require("../db");
const port = 5000;
(0, db_1.DATABASE)();
(0, http_1.createServer)(app_1.default).listen(port, () => {
    helper_1.logger.info(`server  is listening on port ${port}`);
});
