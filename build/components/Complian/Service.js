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
exports.ComplianService = void 0;
const model_1 = require("./model");
const helper_1 = require("../../lib/helper");
const model_2 = require("../Flat/model");
const { throwError } = helper_1.ResponseHandler;
class ComplianService {
    static create(input) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(input);
            const flat = yield model_2.Flat.findOne({
                active: true,
                flatId: input.flatId,
                tenant: input.tenantId,
            });
            if (!flat) {
                helper_1.logger.error('invalid flat');
                throwError('invalid flat', 400);
            }
            return yield model_1.Complian.create(input);
        });
    }
    static read(query) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield model_1.Complian.find(query);
        });
    }
    static delete(_id) {
        return __awaiter(this, void 0, void 0, function* () {
            const complian = yield model_1.Complian.findOne({ active: true, _id });
            if (!complian) {
                helper_1.logger.error('complian does not exists');
                throwError('complian does not exist', 400);
            }
            yield this._editAccount({ _id }, { active: false });
            return 'complian deleted';
        });
    }
    static _editAccount(filter, update) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield model_1.Complian.findOneAndUpdate(filter, update, { new: true });
            if (!user) {
                helper_1.logger.error('user not found');
                throwError('User not found', 400);
            }
            return user;
        });
    }
}
exports.ComplianService = ComplianService;
