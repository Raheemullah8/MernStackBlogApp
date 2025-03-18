import multer from 'multer'
import path from 'path'

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/images')
    },
    filename: function (req, file, cb) {
      const fn = Date.now() + "-" + path.extname(file.originalname);
      cb(null, fn)
    }
  })
  
  const upload = multer({ storage: storage })
  export default upload