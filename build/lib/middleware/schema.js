"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.service = exports.comment = exports.flatNumber = exports.tenantId = exports.complian = exports.flatId = exports.description = exports.location = exports.complianId = exports.propertyId = exports.userId = exports.image = exports.price = exports.phone = exports.lastName = exports.userName = exports.firstName = exports.email = exports.password = void 0;
const express_validator_1 = require("express-validator");
exports.password = (0, express_validator_1.check)('password')
    .not()
    .isEmpty()
    .withMessage('Password is required')
    .trim()
    .isLength({ min: 6 })
    .withMessage('Password must be at least 6 characters')
    .matches(/\d/)
    .withMessage('Password must contain at least one digit')
    .matches(/[A-Z]/)
    .withMessage('Password must contain at least one uppercase letter')
    .matches(/[a-z]/)
    .withMessage('Password must contain at least one lowercase letter');
exports.email = (0, express_validator_1.check)('email')
    .not()
    .trim()
    .isEmpty()
    .withMessage('email is required')
    .isEmail()
    .withMessage('invalid email address');
exports.firstName = (0, express_validator_1.check)('firstName')
    .not()
    .isEmpty()
    .withMessage('first name is required');
exports.userName = (0, express_validator_1.check)('userName')
    .not()
    .isEmpty()
    .withMessage('user name is required');
exports.lastName = (0, express_validator_1.check)('lastName')
    .not()
    .isEmpty()
    .withMessage(' last name is required');
exports.phone = (0, express_validator_1.check)('phone')
    .not()
    .isEmpty()
    .withMessage('phone is requird')
    .isLength({ min: 11, max: 11 })
    .withMessage('phone number must be 11 digit');
exports.price = (0, express_validator_1.check)('price')
    .not()
    .isEmpty()
    .withMessage('price is required');
exports.image = (0, express_validator_1.check)('image')
    .not()
    .isEmpty()
    .withMessage('image is required');
exports.userId = (0, express_validator_1.check)('userId')
    .not()
    .isEmpty()
    .withMessage('userId is required');
exports.propertyId = (0, express_validator_1.check)('propertyId')
    .not()
    .isEmpty()
    .withMessage('PropertyId is required');
exports.complianId = (0, express_validator_1.check)('complianId')
    .not()
    .isEmpty()
    .withMessage('complianId is required');
exports.location = (0, express_validator_1.check)('location')
    .not()
    .isEmpty()
    .withMessage('location is required');
exports.description = (0, express_validator_1.check)('description')
    .not()
    .isEmpty()
    .withMessage('description is required');
exports.flatId = (0, express_validator_1.check)('flatId')
    .not()
    .isEmpty()
    .withMessage('flatId is required');
exports.complian = (0, express_validator_1.check)('complian')
    .not()
    .isEmpty()
    .withMessage('complian is required');
exports.tenantId = (0, express_validator_1.check)('tenantId')
    .not()
    .isEmpty()
    .withMessage('tenantId is required');
exports.flatNumber = (0, express_validator_1.check)('flatNumber')
    .not()
    .isEmpty()
    .withMessage('flat number is required');
exports.comment = (0, express_validator_1.check)('comment')
    .not()
    .isEmpty()
    .withMessage('comment is required');
exports.service = (0, express_validator_1.check)('service')
    .not()
    .isEmpty()
    .withMessage('service is required');
