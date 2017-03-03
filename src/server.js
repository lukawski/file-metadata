import express from 'express'
import routes from './routes/upload'
import path from 'path'

const app = express()
const port = process.env.PORT || 3000

app.use('/api', routes)
app.use('/', (req, res) => res.sendFile(path.join(__dirname, '/view/index.html')))

app.listen(port, () => console.log(`App listening at port ${port}`))
