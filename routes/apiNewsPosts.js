const express = require('express')
const { v4 } = require('uuid')
const route = express.Router()
const { Database } = require("../lib/Database")


// function setJsonHeader()

route.get("/", async (req, res) => {
  try {
    let data = await Database.get({ page: +req.query.page, size: +req.query.size })
    res.setHeader("Content-Type", "application/json")
    res.send(JSON.stringify(data))
  } catch (e) {
    res.status(500).send()
  }
})

route.get("/:id", async (req, res) => {
  try {
    let result = await Database.get({ id: req.params.id })
    if (result) {
      res.status(200).send(result)
    } else {
      res.status(404).send("Not found newsposts with that id")
    }
  } catch (e) {
    res.status(500).send()
  }

})


route.post("/", async (req, res) => {
  let { title, text } = req.body
  try {
    let id = await Database.insert({ title, text })
    if (id) {
      res.status(200).send(id)
    }else{
      res.status(404).send("Invalid data")
    }
  } catch (e) {
    // console.log(e)
    res.status(500).send()
  }
})

route.put("/:id", async (req, res) => {
  try {
    let result = await Database.updateById(req.params.id, { title: req.body.title, text: req.body.text })
    if (result) {
      res.status(200).send()
    }else{
      res.status(404).send("Invalid id")
    }
  } catch (e) {
    res.status(500).send()
  }

})


route.delete("/:id", async (req, res) => {
  try {
    let result = await Database.deleteById(req.params.id)
    if (result) {
      res.status(200).send(result)
    } else {
      res.status(404).send()
    }
  }
  catch (e) {
    res.status(500).send()
  }
})

module.exports = {
  apiNewsPostsRoute: route
}




