"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Complian = void 0;
const mongoose_1 = require("mongoose");
const complianSchema = new mongoose_1.Schema({
    flatId: {
        type: String,
    },
    tenantId: {
        type: String,
    },
    complian: {
        type: String,
    },
    active: {
        type: Boolean,
        default: true,
    },
}, { timestamps: true });
exports.Complian = (0, mongoose_1.model)('complian', complianSchema);
