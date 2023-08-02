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
exports.ServiceChargeController = void 0;
const helper_1 = require("../../lib/helper");
const Service_1 = require("./Service");
const { success } = helper_1.ResponseHandler;
class ServiceChargeController {
    static create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            (0, helper_1.validator)(req);
            const data = yield Service_1.ServiceChargeService.create(req.body);
            return success(res, req, 200, data);
        });
    }
    static read(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            (0, helper_1.validator)(req);
            const data = yield Service_1.ServiceChargeService.read();
            return success(res, req, 200, data);
        });
    }
    static delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            (0, helper_1.validator)(req);
            const data = yield Service_1.ServiceChargeService.delete(req.params.id);
            return success(res, req, 200, data);
        });
    }
}
exports.ServiceChargeController = ServiceChargeController;
