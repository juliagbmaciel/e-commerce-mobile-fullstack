const express = require('express')
const cors = require('cors')
const app = express()
const router = require('./routes/router')
const port = 3004
app.use(cors())
app.use(router)
app.use(express.json())

app.get('/', (req, res) => res.send('Hello World!'))


app.listen(port, () => console.log(`http://localhost:${port}`))