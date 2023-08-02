"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.contactSchema = void 0;
const middleware_1 = require("../../lib/middleware");
const contactSchema = () => [
    middleware_1.phone,
    middleware_1.image,
    middleware_1.firstName,
    middleware_1.lastName,
];
exports.contactSchema = contactSchema;
