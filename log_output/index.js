const crypto = require('node:crypto')

const randomString = crypto.randomUUID()

const logOutput = () => {
  console.log(`${new Date().toISOString()}: ${randomString}`)
}

logOutput()
setInterval(logOutput, 5000)
