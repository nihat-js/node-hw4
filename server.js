const express = require('express')
const { Database } = require('./Database')

const app = express()
const port = 12000
app.get("/api/newsposts", async (req,res)=>{
  let data  = Database.read()
  console.log("test")
})

app.get("/api/newposts/:id",(req,res)=>{

})


app.listen(port,()=>console.log(`Server started on ${port}`))