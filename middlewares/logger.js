const fs = require("fs/promises")
const { EOL } = require("os")
const path = require("path")
async function logger(req, res, next) {
  const filePath = path.resolve(__dirname, "../logs/log.txt")

  try {
    let str = `${req.method} ${req.url} query: ${JSON.stringify(req.params)} body:${JSON.stringify(req.body)}  ${EOL}`
    await fs.appendFile(filePath, str)
    next()
  } catch (e) {
    res.status(500).send()
  }

}
module.exports = {
  logger
}