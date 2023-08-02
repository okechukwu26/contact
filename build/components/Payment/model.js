"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Payment = void 0;
const mongoose_1 = require("mongoose");
const PaymentSchema = new mongoose_1.Schema({
    flatId: {
        type: String,
    },
    paymentType: {
        type: String,
        enum: ['RENEWAL', 'SERVICECHARGE', 'SUBSCRIPTION'],
    },
    amount: {
        type: Number,
    },
    propertyId: { type: String },
    method: {
        type: String,
    },
    userId: {
        type: String,
    },
    referenceId: {
        type: String,
    },
}, { timestamps: true });
exports.Payment = (0, mongoose_1.model)('payment', PaymentSchema);
