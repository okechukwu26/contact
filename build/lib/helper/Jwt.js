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
exports.Jwt = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const Response_1 = require("./Response");
const config_1 = require("../../config");
const { throwError } = Response_1.ResponseHandler;
class Jwt {
    static encoded(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            return jsonwebtoken_1.default.sign(payload, config_1.APP_SECRET, { expiresIn: '48hrs' });
        });
    }
    static decoded(token) {
        return __awaiter(this, void 0, void 0, function* () {
            return jsonwebtoken_1.default.decode(token);
        });
    }
    static verify(token) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = jsonwebtoken_1.default.verify(token, config_1.APP_SECRET);
                return result;
            }
            catch (error) {
                throwError('Token expired', error.code || 400);
            }
        });
    }
}
exports.Jwt = Jwt;
