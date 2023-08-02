"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.contactSignInSchema = exports.contactAuthSchema = void 0;
const middleware_1 = require("../../lib/middleware");
const contactAuthSchema = () => {
    return [middleware_1.userName, middleware_1.password, middleware_1.firstName, middleware_1.lastName, middleware_1.password, middleware_1.email];
};
exports.contactAuthSchema = contactAuthSchema;
const contactSignInSchema = () => {
    return [middleware_1.userName, middleware_1.password];
};
exports.contactSignInSchema = contactSignInSchema;
