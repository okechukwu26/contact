"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Middleware = void 0;
const model_1 = require("../../components/ContactAuth/model");
const helper_1 = require("../helper");
const helper_2 = require("../helper");
const { badRequest, throwError } = helper_1.ResponseHandler;
class Middleware {
}
exports.Middleware = Middleware;
_a = Middleware;
Middleware.Authenticate = () => (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const token = req.headers['authorization'];
        if (!token) {
            helper_1.logger.error('Authentication failed, no token was provided');
            throwError('Authentication failed, no token was provided', 403);
        }
        const result = yield helper_2.Jwt.verify(token);
        console.log(result);
        if (typeof result === 'string') {
            throwError('invalid typeof for token', 400);
        }
        else {
            const decode = yield model_1.ContactAuth.findOne({
                active: true,
                _id: result._id,
            });
            // const currentDate = new Date().getTime()
            // console.log(
            //   new Date(currentDate).getHours(),
            //   new Date(result.exp).getHours(),
            // )
            // if (currentDate < result.exp) {
            //   logger.error('Token expired')
            //   throwError('token expired', 400)
            // }
            req.user = decode._id;
            next();
        }
    }
    catch ({ message, code }) {
        return badRequest(res, code || 402, message || 'authentication failed, invalid token', next);
    }
});
