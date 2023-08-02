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
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const { floor, random } = Math;
class Util {
    static generateCode() {
        const code = 1000;
        return code;
    }
    static generateRandom() {
        return Math.floor(Math.random() * (9999 - 1000 + 1) + 1000);
    }
    static bcryptDecoded(input) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(input);
            const response = yield bcryptjs_1.default.compareSync(input.value, input.comparedValue);
            console.log(response);
            return response;
        });
    }
    static bcryptEncoded(input) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield bcryptjs_1.default.hashSync(input.value);
            return response;
        });
    }
    static intertionalizePhone(tele, code = '+234') {
        const arrange = tele
            .split('')
            .reverse()
            .join('')
            .substring(0, 10)
            .split('')
            .reverse()
            .join('');
        return `${code}${arrange}`;
    }
    static Capitalize(input) {
        return __awaiter(this, void 0, void 0, function* () {
            return input.charAt(0).toUpperCase() + input.slice(1);
        });
    }
    static LowerCase(str) {
        return __awaiter(this, void 0, void 0, function* () {
            return str.toLowerCase();
        });
    }
    static changeHours(date, hrs) {
        // Replace with your actual date object
        return Math.floor(new Date(date).setHours(date.getHours() + hrs) / 1000);
    }
}
exports.default = Util;
