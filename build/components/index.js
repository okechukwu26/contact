"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const router_1 = __importDefault(require("./Auth/router"));
const router_2 = __importDefault(require("./User/router"));
const router_3 = __importDefault(require("./Property/router"));
const router_4 = __importDefault(require("./Flat/router"));
const router_5 = __importDefault(require("./media/router"));
const router_6 = __importDefault(require("./Complian/router"));
const router_7 = __importDefault(require("./comments/router"));
const router_8 = __importDefault(require("./ServiceCharge/router"));
const router_9 = __importDefault(require("./Payment/router"));
const router_10 = __importDefault(require("./ContactAuth/router"));
const router_11 = __importDefault(require("./contacts/router"));
module.exports = {
    auth: {
        routes: router_1.default,
    },
    user: {
        routes: router_2.default,
    },
    property: {
        routes: router_3.default,
    },
    flat: {
        routes: router_4.default,
    },
    media: {
        routes: router_5.default,
    },
    complian: {
        routes: router_6.default,
    },
    comment: {
        routes: router_7.default,
    },
    serviceCharge: {
        routes: router_8.default,
    },
    payment: {
        routes: router_9.default,
    },
    contactAuth: {
        routes: router_10.default,
    },
    contact: {
        routes: router_11.default,
    },
};
