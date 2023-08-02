"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = require("mongoose");
const UserSchema = new mongoose_1.Schema({
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
    },
    companyName: {
        type: String,
    },
    role: {
        type: String,
    },
    image: {
        type: String,
    },
    phone: {
        type: String,
    },
}, { timestamps: true });
exports.User = (0, mongoose_1.model)('user', UserSchema);
