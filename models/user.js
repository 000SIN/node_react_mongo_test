const mongoose = require('mongoose'); //몽구스 모듈 가져오기


const userSchema = mongoose.Schema({//
    //몽구스를 이용한 스키마 생성
    name : {
        type : String, //문자열
        maxlength : 50
    },
    email: {
        type : String,//문자열
        trim : true,
        unique : 1
        //ex) jimin choi@Naver.com 를 예시로 든다고 할 떄 jimin과 choi 사이의 빈칸을
        // 없애주는 역할을 한다.
    },
    password: {
        type : String, //문자열
        maxlength : 5
    },
    lastname : {
        type : String, //문자열
        maxlength : 50
    },
    role : { //역할
        type : Number,
        //Number로 하고 숫자로 역할 구분 한다고 생각하기
        //1번은 일반 유저, 2번은 GM 등등
        default : 0
        //만약 임의로 role을 지정하지 않았다면 0을 자동으로 역할 부여
    },
    image : String, //그 사람에 해당하는 이미지 부여
    //{ }라는 object 없이 이렇게 간단하게도 연출 가능
    token : { //token을 이용하여 유효성 관리 가능
        type : String
    },
    tokenExp : { //token 유호기간
        type : Number
    }
})

const User = Mongoose.model('User', userSchema) // (모델명, 스키마)
module.exports = { User }
// 다른곳에서도 사용가능하도록 exports