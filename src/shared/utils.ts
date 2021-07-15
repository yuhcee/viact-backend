import * as multer from "multer";
import { join }from 'path'

export const FILE_UPLOAD_DIR = join(process.cwd(), 'upload')
export const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, FILE_UPLOAD_DIR)
    },
    filename: function (req, file, cb) {
        const randName= Date.now() + (Math.random().toString(32))
        cb(null, randName + '-'+file.originalname)
    }
})

export const fileFilter = (req, file, cb) => {
    // allow only png, jpeg, files
    const allowedImages = ['image/png', 'image/jpeg', 'image/jpg']
    cb(null, allowedImages.includes(file.mimetype.toLowerCase()))
}
