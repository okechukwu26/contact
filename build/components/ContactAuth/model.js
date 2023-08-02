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
exports.ContactAuth = void 0;
const mongoose_1 = require("mongoose");
const util_1 = __importDefault(require("../../util"));
const contactAuth = new mongoose_1.Schema({
    email: {
        type: String,
        unique: true,
    },
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    password: {
        type: String,
    },
    userName: {
        type: String,
    },
    // role: {
    //   type: String,
    //   enum: ['LANDLORD', 'TENANT', 'REALESTATE', 'ADMIN'],
    // },
    // isEmailVerified: {
    //   type: Boolean,
    //   default: false,
    // },
    // emailVerificationCode: {
    //   type: Number,
    // },
    // emailVerificationExpiration: {
    //   type: Number,
    // },
    // emailVerificationStatus: {
    //   type: Boolean,
    // },
    // passwordResetCode: {
    //   type: Number,
    // },
    expires: { type: Number },
    active: {
        type: Boolean,
        default: true,
    },
    // passwordResetExpiration: {
    //   type: Number,
    // },
    // passwordResetStatus: {
    //   type: Boolean,
    //   default: false,
    // },
}, { timestamps: true });
contactAuth.pre('save', function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            if (!this.isModified('password')) {
                return next();
            }
            const hash = yield util_1.default.bcryptEncoded({ value: this.password });
            this.password = hash;
            return next();
        }
        catch (error) {
            return next(error);
        }
    });
});
exports.ContactAuth = (0, mongoose_1.model)('contactAuth', contactAuth);
