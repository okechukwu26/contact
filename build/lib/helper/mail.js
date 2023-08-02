"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendingMail = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
const sendingMail = (to, subject, message) => {
    console.log(to, subject, message);
    const transporter = nodemailer_1.default.createTransport({
        service: 'Gmail',
        auth: {
            user: 'emordiokechukwu26@gmail.com',
            pass: 'Okechukwuemordi@27',
        },
    });
    const mailOptions = {
        from: 'emordiokechukwu26@gmail.com',
        to,
        subject,
        text: message,
    };
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error:', error);
        }
        else {
            console.log('Email sent:', info.response);
        }
    });
};
exports.sendingMail = sendingMail;
