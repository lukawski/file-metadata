import express from 'express'
import multer from 'multer'

const router = express.Router()
const upload = multer({ dest: 'uploads/' })

router.post('/upload', upload.single('file'), (req, res) => {
  var fileMetaData = {
    name: req.file.originalname,
    size: req.file.size
  }
  res.send(fileMetaData)
})

export default router
