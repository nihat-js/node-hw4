const fs = require("fs/promises")
const path = require("path")
async function logging(req, res, next) {
  const filePath = path.resolve(__dirname, "./logs/log.js")

  let data = await fs.readFile(filePath)

  // let str = `${method} ${req.url} query:${} body:${body}  `

  let res = await fs.appendFile(filePath, data)
  if (res) {
    next()
  }
}

function buildString() {
  return `${method} `
}