"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const helper_1 = require("../../lib/helper");
const router_1 = __importDefault(require("../Auth/router"));
const helper_2 = require("../../lib/helper");
const controller_1 = require("./controller");
const { ErrorHandler } = helper_1.ResponseHandler;
router_1.default.post('/upload', (0, helper_2.imageHelper)(), ErrorHandler(controller_1.MediaController.upload));
exports.default = router_1.default;
