"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Property = void 0;
const mongoose_1 = require("mongoose");
const PropertySchema = new mongoose_1.Schema({
    userId: {
        type: String,
    },
    active: {
        type: Boolean,
        default: true,
    },
    location: {
        type: String,
    },
    description: {
        type: String,
    },
    status: {
        type: String,
        enum: ['occupied', 'available'],
    },
    image: {
        type: String,
    },
}, { timestamps: true });
exports.Property = (0, mongoose_1.model)('property', PropertySchema);
