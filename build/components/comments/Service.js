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
exports.CommentService = void 0;
const model_1 = require("./model");
const helper_1 = require("../../lib/helper");
const model_2 = require("../Complian/model");
const model_3 = require("../Flat/model");
const { throwError } = helper_1.ResponseHandler;
class CommentService {
    static create(input) {
        return __awaiter(this, void 0, void 0, function* () {
            const complian = yield model_2.Complian.findOne({
                active: true,
                _id: input.complianId,
                flatId: input.flatId,
            });
            if (!complian) {
                helper_1.logger.error('complian does not exists');
                throwError('complian does not exists', 400);
            }
            const prop = yield model_3.Flat.findOne({
                active: true,
                userId: input.userId,
                flatId: input.flatId,
                propertyId: input.propertyId,
            });
            if (!prop) {
                helper_1.logger.error('invalid property or user');
                throwError('invalid property or user', 400);
            }
            return yield model_1.Comment.create(input);
        });
    }
    static read(input) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield model_1.Comment.find(input);
        });
    }
    static delete(_id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this._editAcount({ active: true, _id }, { active: false });
            return 'comment deleted';
        });
    }
    static _editAcount(filter, update) {
        return __awaiter(this, void 0, void 0, function* () {
            const edit = yield model_1.Comment.findOneAndUpdate(filter, update, { new: true });
            if (!edit) {
                helper_1.logger.error('not found');
                throwError('not found', 400);
            }
            return edit;
        });
    }
}
exports.CommentService = CommentService;
