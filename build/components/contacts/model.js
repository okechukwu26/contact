"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Contacts = void 0;
const mongoose_1 = require("mongoose");
const contactsSchema = new mongoose_1.Schema({
    phone: {
        type: String,
    },
    isFavorite: {
        type: Boolean,
    },
    image: {
        type: String,
    },
    firstName: {
        type: String,
    },
    LastName: {
        type: String,
    },
    active: {
        type: Boolean,
        default: true,
    },
}, { timestamps: true });
exports.Contacts = (0, mongoose_1.model)('contact', contactsSchema);
