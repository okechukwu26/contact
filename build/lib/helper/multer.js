"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.imageHelper = void 0;
const multer_1 = __importDefault(require("multer"));
const cloudinary_1 = require("./cloudinary");
const imageHelper = () => {
    return (0, multer_1.default)({
        storage: cloudinary_1.CloudinaryService.uploadItem('Subcategory'),
        limits: { fileSize: 500000 },
    }).single('image');
};
exports.imageHelper = imageHelper;
// export const imageCategory = () => {
//   return multer({
//     storage: CloudinaryService.uploadItem("category"),
//     limits: { fileSize: 500000 },
//   }).single("riderImage");
// };
// export { imageHelper, imageCategory };
