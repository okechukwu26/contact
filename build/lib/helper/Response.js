"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseHandler = void 0;
const logger_1 = require("./logger");
class ResponseHandler {
    static success(res, req, code, data = {}, message) {
        return res.status(code).send({ status: true, code, message, data });
    }
    static badRequest(res, code, message, next) {
        return res.status(code).send({ status: false, code, message, data: null });
    }
    static throwError(message, code) {
        logger_1.logger.error(`Error status ${code}`);
        throw new Error(message);
    }
}
exports.ResponseHandler = ResponseHandler;
ResponseHandler.ErrorHandler = (fn) => (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
};
