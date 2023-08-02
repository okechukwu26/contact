"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.flatSchema = void 0;
const middleware_1 = require("../../lib/middleware");
const flatSchema = () => [
    middleware_1.propertyId,
    middleware_1.image,
    middleware_1.userId,
    middleware_1.description,
    middleware_1.price,
    middleware_1.flatNumber,
];
exports.flatSchema = flatSchema;
