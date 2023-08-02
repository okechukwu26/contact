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
exports.FlatController = void 0;
const Service_1 = require("./Service");
const helper_1 = require("../../lib/helper");
const { success } = helper_1.ResponseHandler;
class FlatController {
    static create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            (0, helper_1.validator)(req);
            const data = yield Service_1.FlatService.create(req.body);
            return success(res, req, 201, data);
        });
    }
    static update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            (0, helper_1.validator)(req);
            const query = req.query;
            const data = yield Service_1.FlatService.update(query, req.body);
            return success(res, req, 200, data);
        });
    }
    static removeTenant(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            (0, helper_1.validator)(req);
            const id = req.params.id;
            const data = yield Service_1.FlatService.removeTenant(id);
            return success(res, req, 200, data);
        });
    }
    static read(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            (0, helper_1.validator)(req);
            const data = yield Service_1.FlatService.read(req.query);
            return success(res, req, 200, data);
        });
    }
    static AssignService(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            (0, helper_1.validator)(req);
            const data = yield Service_1.FlatService.AssignServiceCharges(req.body);
            return success(res, req, 200, data);
        });
    }
}
exports.FlatController = FlatController;
