const dotenv = require('dotenv')
const express = require('express')
const app = express()

dotenv.config()

app.get('/', (req, res) => {
  res.send('todo app')
})

const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
  console.log(`Server started in port ${PORT}`)
})
