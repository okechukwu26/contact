"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceCharge = void 0;
const mongoose_1 = require("mongoose");
const serviceChargeSchema = new mongoose_1.Schema({
    active: {
        type: Boolean,
    },
    service: {
        type: String,
    },
}, { timestamps: true });
exports.ServiceCharge = (0, mongoose_1.model)('serviceCharge', serviceChargeSchema);
