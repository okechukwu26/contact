"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userSchema = void 0;
const middleware_1 = require("../../lib/middleware");
const userSchema = () => [
    middleware_1.email,
    middleware_1.firstName,
    middleware_1.lastName,
    middleware_1.phone,
];
exports.userSchema = userSchema;
