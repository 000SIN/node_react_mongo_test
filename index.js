const express = require('express');
const app = express();
const port = 3000;

const bodyParser = require('body-parser');
const { User } = require("./models/user");


var d = require('mongoose');
//var mongoose = require('mongoose');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://jimin:sin011221&@boilerplate.aympa7c.mongodb.net/test',
//{userNewUrlParse : true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false})
).then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err));


app.get('/', (req, res) => {
  res.send('Hello World! 안녕하세요')
});

app.post('/register', (req, res) => {
  const user = new User(req.body);

  user.save()
    .then(() => {
      res.status(200).json({ success: true });
    })
    .catch((err) => {
      res.json({ success: false, err });
    });
}); 

app.listen(port, () => 
  console.log(`Example app listening on port ${port}!`));
