"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.complianSchema = void 0;
const middleware_1 = require("../../lib/middleware");
const complianSchema = () => [
    middleware_1.flatId,
    middleware_1.tenantId,
    middleware_1.complian,
];
exports.complianSchema = complianSchema;
