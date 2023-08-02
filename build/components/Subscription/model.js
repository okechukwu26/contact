"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Subscription = void 0;
const mongoose_1 = require("mongoose");
const subscriptionSchema = new mongoose_1.Schema({
    userId: {
        type: String,
    },
    dateOfSubscription: {
        type: Date,
    },
    nextRenewalDate: {
        type: Date,
    },
}, { timestamps: true });
exports.Subscription = (0, mongoose_1.model)('subscription', subscriptionSchema);
