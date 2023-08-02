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
exports.AuthService = void 0;
const model_1 = require("./model");
const helper_1 = require("../../lib/helper");
const util_1 = __importDefault(require("../../util"));
const model_2 = require("../User/model");
const model_3 = require("../Flat/model");
const interface_1 = require("../Flat/interface");
const { throwError } = helper_1.ResponseHandler;
class AuthService {
    static signUp(input) {
        return __awaiter(this, void 0, void 0, function* () {
            const emailExist = yield model_1.AUTH.findOne({ email: input.email, active: true });
            if (emailExist) {
                helper_1.logger.error(`The email ${input.email} already exist`);
                throwError('email already exist', 400);
            }
            const user = yield model_1.AUTH.create(input);
            user.password = undefined;
            return user;
        });
    }
    static signin(input) {
        return __awaiter(this, void 0, void 0, function* () {
            const email = yield this._findOne({ email: input.email, active: true });
            if (!email) {
                helper_1.logger.error(`invalid credentials`, 400);
                throwError('invalid credentials', 400);
            }
            const user = yield model_2.User.findOne({ role: email.role, email: email.email });
            if (!user)
                return 404;
            const isMatch = yield util_1.default.bcryptDecoded({
                value: input.password,
                comparedValue: email.password,
            });
            if (!isMatch) {
                helper_1.logger.error(`invalid credentials`, 400);
                throwError('invalid credentials', 400);
            }
            const expires = util_1.default.changeHours(new Date(), 24);
            const token = yield helper_1.Jwt.encoded({ _id: email._id });
            if (!email.isEmailVerified) {
                helper_1.logger.error(`${email.email} has not been verified`);
                throwError('verify email to proceed', 400);
            }
            yield this._editAccount({ email: email.email }, { expires });
            email.password = undefined;
            email.password = undefined;
            return { email, token };
        });
    }
    static tenantSignUp(input) {
        return __awaiter(this, void 0, void 0, function* () {
            const flat = yield model_3.Flat.findOne({ active: true, flatId: input.flatId });
            if (!flat) {
                helper_1.logger.error('invalid flat Id');
                throwError('invalid flat Id', 400);
            }
            const email = yield this._findOne({ email: input.email, active: true });
            if (email) {
                helper_1.logger.error('this email is already taken');
                throwError('this email is already taken', 400);
            }
            const user = yield model_1.AUTH.create(input);
            flat.tenant = user._id;
            flat.status = interface_1.FlatStatus.OCCUPIED;
            yield model_3.Flat.findOneAndUpdate({ flatId: input.flatId }, { status: interface_1.FlatStatus.OCCUPIED, tenant: user._id }, { new: true });
            user.password = undefined;
            return user;
        });
    }
    static sendEmailVerificationCode(input) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this._findOne({ _id: input.id });
            if (!user) {
                helper_1.logger.error('user not found');
                throwError('user not found', 400);
            }
            if (user.email !== input.email) {
                helper_1.logger.error('invalid credential');
                throwError('invalid credential', 400);
            }
            const code = util_1.default.generateCode();
            const expired = new Date().getTime() + 600000;
            user.emailVerificationCode = code;
            user.emailVerificationExpiration = expired;
            user.emailVerificationStatus = true;
            const data = {
                emailVerificationCode: user.emailVerificationCode,
                emailVerificationExpiration: user.emailVerificationExpiration,
                emailVerificationStatus: user.emailVerificationStatus,
            };
            (0, helper_1.sendingMail)(user.email, 'Verification code', code);
            yield this._editAccount({ _id: input.id }, data);
            return 'hello';
        });
    }
    static _findOne(query) {
        return __awaiter(this, void 0, void 0, function* () {
            const auth = yield model_1.AUTH.findOne(query);
            return auth;
        });
    }
    static verifyCode(input) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield model_1.AUTH.findOne({ email: input.email, active: true });
            if (!user) {
                helper_1.logger.error('user not found');
                throwError('user not found', 400);
            }
            if (user.emailVerificationCode !== Number(input.code)) {
                helper_1.logger.error('invalid verification code');
                throwError('invalid verification code', 400);
            }
            const now = new Date().getTime();
            if (now > user.emailVerificationExpiration) {
                helper_1.logger.error('OTP has expired');
                throwError('OTP has expired', 400);
            }
            if (user.emailVerificationStatus === false) {
                helper_1.logger.error('verification code is not valid');
                throwError('Verification code is not valid', 400);
            }
            yield this._editAccount({ email: input.email }, { isEmailVerified: true });
            return 'code verified';
        });
    }
    static _editAccount(filter, update) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield model_1.AUTH.findOneAndUpdate(filter, update, { new: true });
            if (!user) {
                helper_1.logger.error('user not found');
                throwError('User not found', 400);
            }
            return user;
        });
    }
}
exports.AuthService = AuthService;
