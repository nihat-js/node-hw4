const fs = require("fs/promises")

class Database {
  static path = "./db.json"
  constructor(){

  }

  static async   read() {
    return await  JSON.parse (fs.readFile("./db.json","utf8"))
  }
}

module.exports = {
  Database
}