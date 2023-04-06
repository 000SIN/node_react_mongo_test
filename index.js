const express = require('express')
const app = express()
const port = 3000

const mongoose = require('mongoose')
mongoose.connectxxxxxxxxxxxxxxxxxxx
.catch(err => console.log(err))

app.get('/', (req, res) => {
  res.send('Hello World! 안녕하세요Y')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})