import express from 'express'
import routes from './routes/upload'

const app = express()
const port = process.env.PORT || 3000

app.use('/api', routes)

app.listen(port, () => console.log(`App listening at port ${port}`))
