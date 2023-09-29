const express = require('express')
const {v4}  = require('uuid')
const route = express.Router()

route.get("/", async (req,res)=>{
  let data  =await  Database.get()
  console.log('off')
  res.setHeader("Content-Type","application/json")
  res.send(JSON.stringify(data))
})

route.get("/api/newsposts/:id", async (req,res)=>{
  let data = await Database.read()
  let findedData = data.find(el => el.id === +req.params.id )
  if (findedData){
    res.status(200).send(JSON.stringify(findedData))
  }else{
    res.status(404).send("Not found newsposts with that id")

  }
})

route.post("",async (req,res)=>{
  let {title,text}  = req.body

  if  (req.title && req.text) return res.status(401).send("Wrong data shape")
  let newsPost = {
    id : v4(),  
    title,
    text
  }

  route.put()

})

module.exports = {
  apiNewsPostsRoute : route
}




