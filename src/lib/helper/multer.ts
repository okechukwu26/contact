import multer from 'multer'
import { CloudinaryService } from './cloudinary'
export const imageHelper = () => {
  return multer({
    storage: CloudinaryService.uploadItem('Subcategory'),
    limits: { fileSize: 100000 },
  }).single('image')
}
