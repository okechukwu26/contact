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
exports.ServiceChargeService = void 0;
const model_1 = require("./model");
const helper_1 = require("../../lib/helper");
const { throwError } = helper_1.ResponseHandler;
class ServiceChargeService {
    static create(input) {
        return __awaiter(this, void 0, void 0, function* () {
            const service = yield model_1.ServiceCharge.findOne({
                service: input.service,
                active: true,
            });
            if (service) {
                helper_1.logger.error('service charge already exist');
                throwError('service charge already exists', 400);
            }
            return yield model_1.ServiceCharge.create(input);
        });
    }
    static read() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield model_1.ServiceCharge.find();
        });
    }
    static delete(_id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this._editAccount({ _id }, { active: false });
            return 'deleted';
        });
    }
    static _editAccount(filter, update) {
        return __awaiter(this, void 0, void 0, function* () {
            const edit = yield model_1.ServiceCharge.findOneAndUpdate(filter, update, {
                new: true,
            });
            if (!edit) {
                helper_1.logger.error('not found');
                throwError('not found', 400);
            }
            return edit;
        });
    }
}
exports.ServiceChargeService = ServiceChargeService;
