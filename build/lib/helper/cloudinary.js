"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloudinaryService = void 0;
const cloudinary_1 = require("cloudinary");
const multer_storage_cloudinary_1 = require("multer-storage-cloudinary");
const config_1 = require("../../config");
const path_1 = __importDefault(require("path"));
const Response_1 = require("./Response");
const { throwError } = Response_1.ResponseHandler;
cloudinary_1.v2.config({
    cloud_name: config_1.CLOUDNAME,
    api_key: config_1.CLOUDAPIKEY,
    api_secret: config_1.CLOUDAPISECRET,
});
class CloudinaryService {
    static uploadItem(folder) {
        return new multer_storage_cloudinary_1.CloudinaryStorage({
            cloudinary: cloudinary_1.v2,
            params: (req, file) => __awaiter(this, void 0, void 0, function* () {
                let ext = path_1.default.extname(file.originalname);
                if (ext !== '.jpg' &&
                    ext !== '.jpeg' &&
                    ext !== '.png' &&
                    ext !== '.PNG' &&
                    ext !== '.gif') {
                    throwError('invalid picture format', 400);
                }
                return {
                    folder: folder,
                    public_id: `${file.originalname}`,
                };
            }),
        });
    }
}
exports.CloudinaryService = CloudinaryService;
// export default CloudinaryService;
