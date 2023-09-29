const path = require('path')
const fs = require("fs/promises")
const { v4 } = require("uuid")

class Database {

  static #filePath = path.resolve(__dirname, "../db", "db.json")


  static async #read() {
    try {
      return JSON.parse(await fs.readFile(this.#filePath))
    } catch (e) {
      throw Error("Couldn't read")
    }
  }
  static async #save(data) {
    try {
      return await fs.writeFile(this.#filePath, JSON.stringify(data))
    } catch (e) {
      throw Error("Error when saving")
    }
  }

  static async get({ id, page, size }) {
    let data = await Database.#read()
    if (page && size) {
      return data.slice((page - 1) * size, page * size)
    }
    else if (id) {
      return data.find(el => el.id == id)
    }
    else {
      return data
    }
  }


  static async deleteById(id) {
    console.log(id)
    let data = Database.#read()
    let findedData = data.find(el => el.id === id)
    if (!findedData) return false
    let filteredData = data.filter(el => el.id !== id)
    await Database.#save(filteredData)
    return findedData

  }

  static async insert({ title, text }) {
    if (!title || !text) return false
    let data = await Database.#read()
    let id = v4()
    let newPost = { id, title, text }
    data.push(newPost)
    await Database.#save(data)
    return id

  }

  static async updateById(id, { title, text }) {
    if (!title && !text) return false
    let data = Database.#read()
    let isFound = false
    data = data.map(el => {
      if (el.id === id) {
        isFound = true
        if (title) el.title = title
        if (text) el.text = text
      }
      return true
    })
    if (!isFound) return false
    await fs.writeFile(data)
    return true
  }

}

module.exports = {
  Database
}