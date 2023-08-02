"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.propertySchema = void 0;
const middleware_1 = require("../../lib/middleware");
const propertySchema = () => [middleware_1.email, middleware_1.location, middleware_1.image];
exports.propertySchema = propertySchema;
