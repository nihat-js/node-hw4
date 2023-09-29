const path = require('path')
const fs = require("fs/promises")


class Database {

  static  filePath = path.resolve(__dirname, "../db", "db.json")

  static async get(arg1, arg2) {

    let data = JSON.parse(await fs.readFile(this.filePath))
    if (typeof arg1 == "number" && typeof arg2 == "number") {
      return data.slice((arg1 - 1) * arg2, arg1 * arg2)
    } else {
      return data
    }
  }
  static async save(){

  }
  static async deleteById(id){
    let data = JSON.parse(await fs.readFile(this.filePath))
    let result = data.find(el =>el.id ===id )
    if (!result) return false
    let filteredData = data.filter(el=> el.id !== id)
    let foo =  await fs.writeFile(this.filePath, JSON.stringify(filteredData))
    if (foo) {
      return filteredData
    }else{
      return Error("Something wen wrong")
    }

  }

  static async updateById(id,{title,text}){
    let data = JSON.parse(await fs.readFile(this.filePath))
    data = data.map(el=> {
      if (el.id === i)
      el.id === id ?
    } )
  }

}

module.exports = {
  Database
}