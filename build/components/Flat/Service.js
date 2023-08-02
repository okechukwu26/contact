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
exports.FlatService = void 0;
const model_1 = require("./model");
const interface_1 = require("./interface");
const helper_1 = require("../../lib/helper");
const dayjs_1 = __importDefault(require("dayjs"));
const model_2 = require("../Property/model");
const model_3 = require("../User/model");
const util_1 = __importDefault(require("../../util"));
const { throwError } = helper_1.ResponseHandler;
class FlatService {
    static create(input) {
        return __awaiter(this, void 0, void 0, function* () {
            const owner = yield model_2.Property.findOne({
                userId: input.userId,
                _id: input.propertyId,
            });
            if (!owner) {
                helper_1.logger.error('invalid property or user Id');
                throwError('invalid property or user Id', 400);
            }
            const user = yield model_3.User.findOne({ _id: owner.userId });
            if (!user) {
                helper_1.logger.error('invalid  user Id');
                throwError('invalid  user Id', 400);
            }
            const number = util_1.default.generateCode();
            const name = user.companyName.substring(0, 2);
            input.flatId = `${name}${number}-${input.flatNumber}`;
            const flatNumber = yield model_1.Flat.findOne({
                active: true,
                flatNumber: input.flatNumber,
            });
            if (flatNumber) {
                helper_1.logger.error('This flat number already exists for this property');
                throwError('This flat number already exists for this property', 400);
            }
            return yield model_1.Flat.create(input);
        });
    }
    static update(query, input) {
        return __awaiter(this, void 0, void 0, function* () {
            const flat = yield model_1.Flat.findOne({
                userId: query.userId,
                active: true,
                propertyId: query.propertyId,
                flatId: query.flatId,
            });
            if (!flat) {
                helper_1.logger.error('invalid user');
                throwError('invalid user', 400);
            }
            if (input.tenure != undefined || input.rentStarted != undefined) {
                input.rentStarted = (0, dayjs_1.default)(input.rentStarted).toDate();
                const futureDate = this.rentDate(input.tenure, input.rentStarted);
                (input.nextRentDate = futureDate.futureDate),
                    (input.rentStarted = futureDate.currentDate);
            }
            yield model_1.Flat.findOneAndUpdate({ _id: flat._id }, input, { new: true });
            return 'update successful';
        });
    }
    static removeTenant(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const flat = yield model_1.Flat.findOne({ flatId: id });
            flat.tenant = undefined;
            flat.status = interface_1.FlatStatus.AVAILABLE;
            yield flat.save();
            return 'tenant has been removed ';
        });
    }
    static rentDate(tenure, date) {
        const currentDate = new Date(date);
        const futureDate = new Date(date);
        futureDate.setFullYear(currentDate.getFullYear() + tenure);
        return { futureDate, currentDate };
    }
    static read(query) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield model_1.Flat.find(query);
        });
    }
    static AssignServiceCharges(input) {
        return __awaiter(this, void 0, void 0, function* () {
            const flat = yield model_1.Flat.findOne({
                active: true,
                flatId: input.flatId,
                propertyId: input.propertyId,
                userId: input.userId,
            });
            if (!flat) {
                helper_1.logger.error('not found');
                throwError('not found', 400);
            }
            let total = 0;
            flat.serviceCharges = input.service;
            for (const service of input.service) {
                total += service.price;
            }
            flat.totalServiceCharge = total;
            yield flat.save();
            return 'hello';
        });
    }
}
exports.FlatService = FlatService;
