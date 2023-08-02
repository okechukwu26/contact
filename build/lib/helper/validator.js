"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validator = void 0;
const express_validator_1 = require("express-validator");
const Response_1 = require("./Response");
const { throwError } = Response_1.ResponseHandler;
const validator = (req) => {
    const error = (0, express_validator_1.validationResult)(req);
    if (!error.isEmpty()) {
        const err = error.mapped();
        let errMsg;
        for (const y in err) {
            errMsg = err[y].msg;
        }
        throwError(errMsg, 400);
        return errMsg;
    }
};
exports.validator = validator;
