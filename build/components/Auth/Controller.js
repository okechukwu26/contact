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
exports.AuthController = void 0;
const Service_1 = require("./Service");
const helper_1 = require("../../lib/helper");
const { success } = helper_1.ResponseHandler;
class AuthController {
    static landlordSignUp(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            (0, helper_1.validator)(req);
            const data = yield Service_1.AuthService.signUp(Object.assign(Object.assign({}, req.body), { role: 'LANDLORD' }));
            return success(res, req, 201, data, 'signup successful');
        });
    }
    static signin(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            (0, helper_1.validator)(req);
            const data = yield Service_1.AuthService.signin(req.body);
            return success(res, req, 200, data, 'signin successful');
        });
    }
    static sendVerificationCode(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            (0, helper_1.validator)(req);
            const data = yield Service_1.AuthService.sendEmailVerificationCode(req.body);
            return success(res, req, 200, data, 'verification code sent');
        });
    }
    static verifyCode(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            (0, helper_1.validator)(req);
            const data = yield Service_1.AuthService.verifyCode(req.body);
            return success(res, req, 200, data);
        });
    }
    static tenantSignUp(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            (0, helper_1.validator)(req);
            const data = yield Service_1.AuthService.tenantSignUp(Object.assign(Object.assign({}, req.body), { role: 'TENANT' }));
            return success(res, req, 201, data);
        });
    }
}
exports.AuthController = AuthController;
