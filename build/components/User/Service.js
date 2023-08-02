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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const model_1 = require("./model");
const helper_1 = require("../../lib/helper");
const Auth_1 = require("../Auth");
const { throwError } = helper_1.ResponseHandler;
class UserService {
    static createProfile(input) {
        return __awaiter(this, void 0, void 0, function* () {
            const email = yield Auth_1.AUTH.findOne({ active: true, email: input.email });
            if (!email) {
                helper_1.logger.error('user not found');
                throwError('user not found', 400);
            }
            if (!email.isEmailVerified) {
                helper_1.logger.error(`${email.email} has not been verified`);
                throwError('verify email to proceed', 400);
            }
            const exist = yield model_1.User.findOne({ email: input.email });
            if (exist) {
                helper_1.logger.error('this user already exists');
                throwError('this user already exist', 400);
            }
            const user = yield model_1.User.create(input);
            user.role = email.role;
            yield this._editAcount({ email: input.email }, { role: email.role });
            return 'profile created';
        });
    }
    static _editAcount(filter, update) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield model_1.User.findOneAndUpdate(filter, update, { new: true });
            if (!user) {
                helper_1.logger.error('user not found');
                throwError('User not found', 400);
            }
            return user;
        });
    }
}
exports.UserService = UserService;
