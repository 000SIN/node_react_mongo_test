const express = require('express');
const app = express();
const port = 3000;

const bodyParser = require('body-parser');
const { User } = require("./models/user");
//왜인지 모르겠는데 User는 안되고 user만 가능
//user.js 가져오기

var d = require('mongoose');
var mongoose = require('mongoose');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
// app.use 두 줄의 의미
// bodyParser가 클라이언트에서 오는 정보를 서버에서 분석하여
// 가져올 수 있도록 하는 역할을 담당
// 따라서 윗 부분은 application/x-www-form-bodyParser.urlencoded라는 것을
// 분석해서 가져올 수 있도록 해주고
// 아랫 부분은 application/json 부분을 분석해서 가져올 수 있도록 해준다.

const mongoose = require('mongoose');
mongoose.connect
.catch(err => console.log(err));

app.get('/', (req, res) => {
  res.send('Hello World! 안녕하세요Y')
});

app.post('/register', (req, res) => {
  //회원 가입 할 때 필요한 정보들을 Client에서 가져오면
  //그것들을 데이터 베이스에 넣어준다.

  const user = new User(req.body);

  user.save((err, userInfo) => {//user.save = mongoDB에서 오는 메소드
    if(err) return res.json({ success: false, err})
    return res.status(200).json({ //status(200) = 성공했다. 
      success: true
    })
  }) 
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});

//회원가입을 위한 라우트 만드는 과정

async function connectToDatabase(){
  try{
await.mongoose.connect('mongodb+srv://jimin:sin011221&@boilerplate.aympa7c.mongodb.net/test',
//{useNewUrlParser : true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false}
).then(function(){}, console.log('MongoDB Connected...'))
.catch(err => console.log(err))
}
}