"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Controller_1 = require("./Controller");
const helper_1 = require("../../lib/helper");
const { ErrorHandler } = helper_1.ResponseHandler;
const router = (0, express_1.Router)();
router.post('/profile', ErrorHandler(Controller_1.UserController.createUser));
exports.default = router;
