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
exports.PaymentService = void 0;
const helper_1 = require("../../lib/helper");
const model_1 = require("./model");
const config_1 = require("../../config");
const axios_1 = __importDefault(require("axios"));
const { throwError } = helper_1.ResponseHandler;
class PaymentService {
    static create(input) {
        return __awaiter(this, void 0, void 0, function* () {
            const payment = yield this.verifyRef(input.referenceId);
            input.amount = payment.data.amount / 100;
            return yield model_1.Payment.create(input);
        });
    }
    static verifyRef(ref) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(ref.ref);
            const headers = {
                Authorization: `BEARER ${config_1.PAYSTACK_KEY}`,
            };
            try {
                const payment = yield axios_1.default.get(`https://api.paystack.co/transaction/verify/${ref}`, { headers });
                return payment.data;
            }
            catch (error) {
                helper_1.logger.error(error);
                throwError(error, 400);
            }
        });
    }
}
exports.PaymentService = PaymentService;
