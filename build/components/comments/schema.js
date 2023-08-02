"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentSchema = void 0;
const middleware_1 = require("../../lib/middleware");
const schema_1 = require("../../lib/middleware/schema");
const CommentSchema = () => [
    middleware_1.flatId,
    middleware_1.userId,
    middleware_1.propertyId,
    schema_1.complianId,
    schema_1.comment,
];
exports.CommentSchema = CommentSchema;
