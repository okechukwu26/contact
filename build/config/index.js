"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PAYSTACK_KEY = exports.CLOUDAPISECRET = exports.CLOUDNAME = exports.CLOUDAPIKEY = exports.PASSWORD = exports.EMAIL = exports.APP_SECRET = exports.APP_NAME = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const envFound = dotenv_1.default.config({ path: 'env' });
if (!envFound) {
    throw new Error('env not found');
}
exports.APP_NAME = 'APP_NAME';
exports.APP_SECRET = 'Vokproperty';
exports.EMAIL = 'emordiokechukwu26@gmail.com';
exports.PASSWORD = 'Okechukwuemordi@27';
exports.CLOUDAPIKEY = '728959894335376';
exports.CLOUDNAME = 'dqltz1lgo';
exports.CLOUDAPISECRET = '2fYi754UhQOZYE6t5hPpfPX8wUU';
exports.PAYSTACK_KEY = 'sk_test_94628a4899bc1f11113899784610ad83616d1689';
