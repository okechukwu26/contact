"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Flat = void 0;
const mongoose_1 = require("mongoose");
const interface_1 = require("./interface");
const flatSchema = new mongoose_1.Schema({
    propertyId: {
        type: String,
    },
    userId: {
        type: String,
    },
    price: {
        type: Number,
    },
    flatId: {
        type: String,
    },
    rentStarted: {
        type: Date,
    },
    nextRentDate: {
        type: Date,
    },
    image: {
        type: String,
    },
    active: {
        type: Boolean,
        default: true,
    },
    flatNumber: { type: Number },
    tenure: {
        type: Number,
    },
    totalServiceCharge: {
        type: Number,
    },
    serviceCharges: [
        {
            name: String,
            price: Number,
        },
    ],
    status: {
        type: String,
        enum: interface_1.FlatStatus,
        default: interface_1.FlatStatus.AVAILABLE,
    },
    tenant: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'tenant',
    },
    description: {
        type: String,
    },
    complains: {
        type: String,
    },
}, { timestamps: true });
exports.Flat = (0, mongoose_1.model)('flat', flatSchema);
