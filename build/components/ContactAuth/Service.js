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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Service = void 0;
const model_1 = require("./model");
const helper_1 = require("../../lib/helper");
const util_1 = __importDefault(require("../../util"));
const { throwError } = helper_1.ResponseHandler;
class Service {
    static create(input) {
        return __awaiter(this, void 0, void 0, function* () {
            const userName = yield model_1.ContactAuth.findOne({
                active: true,
                userName: input.userName,
            });
            if (userName) {
                helper_1.logger.error('user name already exist');
                throwError('user name already exist', 400);
            }
            const email = yield model_1.ContactAuth.findOne({
                active: true,
                email: input.email,
            });
            if (email) {
                helper_1.logger.error('email already exist');
                throwError('email already exist', 400);
            }
            return yield model_1.ContactAuth.create(input);
        });
    }
    static login(input) {
        return __awaiter(this, void 0, void 0, function* () {
            const email = yield model_1.ContactAuth.findOne({
                active: true,
                email: input.email,
            });
            if (!email) {
                helper_1.logger.error('invalid credential');
                throwError('invalid credential', 400);
            }
            const isMatch = yield util_1.default.bcryptDecoded({
                value: input.password,
                comparedValue: email.password,
            });
            if (!isMatch) {
                helper_1.logger.error(`invalid credentials`, 400);
                throwError('invalid credentials', 400);
            }
            const token = yield helper_1.Jwt.encoded({ _id: email._id });
            email.password = undefined;
            return { email, token };
        });
    }
}
exports.Service = Service;
