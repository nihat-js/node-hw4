const express = require('express')
const { Database } = require('./lib/Database')
const {apiNewsPostsRoute} = require('./routes/apiNewsPosts')
const { logger } = require('./middlewares/logger')

const app = express()
const port = 12000

app.use(express.json())
app.use(logger)
app.use("/api/newsposts",apiNewsPostsRoute)


app.listen(port,()=>console.log(`Server started on ${port}`))