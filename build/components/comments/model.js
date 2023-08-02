"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Comment = void 0;
const mongoose_1 = require("mongoose");
const commentSchema = new mongoose_1.Schema({
    comment: {
        type: String,
    },
    flatId: {
        type: String,
    },
    propertyId: {
        type: String,
    },
    active: { type: Boolean, default: true },
    userId: {
        type: String,
    },
    complianId: {
        type: String,
    },
}, { timestamps: true });
exports.Comment = (0, mongoose_1.model)('comment', commentSchema);
