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
exports.PropertyService = void 0;
const helper_1 = require("../../lib/helper");
const model_1 = require("../User/model");
const model_2 = require("./model");
// import { Flat } from '../Flat/model'
// import { IUser } from '../User/interface'
const { throwError } = helper_1.ResponseHandler;
class PropertyService {
    static create(input) {
        return __awaiter(this, void 0, void 0, function* () {
            const owner = yield model_1.User.findOne({ email: input.email });
            if (!owner) {
                helper_1.logger.error('No user found');
                throwError('No user found', 400);
            }
            input.userId = owner._id.toString();
            const property = new model_2.Property(input);
            const name = owner.companyName.substring(0, 2);
            property.userId = owner._id.toString();
            yield property.save();
            return 'property created';
        });
    }
    static read(query) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield model_2.Property.find(query);
        });
    }
}
exports.PropertyService = PropertyService;
