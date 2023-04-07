const express = require('express')
const app = express()
const port = 3000

const { User } = require("./models/user");
//왜인지 모르겠는데 User는 안되고 user만 가능

//user.js 가져오기
const mongoose = require('mongoose')
mongoose.connect
.catch(err => console.log(err))

app.get('/', (req, res) => {
  res.send('Hello World! 안녕하세요Y')
})

app.post('/register', (req, res) => {
  //회원 가입 할 때 필요한 정보들을 Client에서 가져오면
  //그것들을 데이터 베이스에 넣어준다.

  const user = new User
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})