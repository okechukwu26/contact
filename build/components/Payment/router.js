"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const helper_1 = require("../../lib/helper");
const Controller_1 = require("./Controller");
const { ErrorHandler } = helper_1.ResponseHandler;
const router = (0, express_1.Router)();
router.post('/', ErrorHandler(Controller_1.PaymentController.create));
exports.default = router;
