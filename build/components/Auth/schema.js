"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tenantSchema = exports.signinSchema = exports.signupSchema = void 0;
const express_validator_1 = require("express-validator");
const middleware_1 = require("../../lib/middleware");
const signupSchema = () => [middleware_1.email, middleware_1.password];
exports.signupSchema = signupSchema;
const signinSchema = () => [middleware_1.email, middleware_1.password];
exports.signinSchema = signinSchema;
const tenantSchema = () => [
    (0, express_validator_1.check)('flatId').not().isEmpty().withMessage('flatId is required'),
    middleware_1.email,
    middleware_1.password,
];
exports.tenantSchema = tenantSchema;
