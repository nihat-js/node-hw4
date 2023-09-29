const express = require('express')
const { Database } = require('./lib/Database')
const {apiNewsPostsRoute} = require('./routes/apiNewsPosts')

const app = express()

app.use(express.json())
const port = 12000
app.use("/api/newsposts/",apiNewsPostsRoute)


app.listen(port,()=>console.log(`Server started on ${port}`))