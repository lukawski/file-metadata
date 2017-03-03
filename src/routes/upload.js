import express from 'express'
import multer from 'multer'

const router = express.Router()
const upload = multer({ dest: 'uploads/' })

router.post('/upload', upload.single('file'), (req, res) => {
  res.send(req.file)
})

export default router
