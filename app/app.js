"use strict";  // ECMA sciprt문법을 준수하겟다는 표현

// 모듈
const express = require("express");
const app = express();
const bodyParser = require("body-parser")

// 라우팅
const home = require("./src/routes/home")  // home의 index파일을 읽음

// 앱 세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");

app.use(express.static(`${__dirname}/src/public`))  // dirname은 해당 app.js파일의 위치를 반환함  // express.static -> 정적 파일을 사용할때 사용
app.use(bodyParser.json());   // body-parser 미들웨어 등록: bodyParser가 데이터를 json데이터로 parsing하도록 해준다
app.use(bodyParser.urlencoded({ extended: true }));  // url을 통해 전달되는 데이터에 한글, 공백 등과 같은 문자가 포함될 경우 제대로 인식되지 않는 문제 해결
app.use("/", home) // use는 middle ware 등록하는 method

module.exports = app;

// npm install express를 설치하면 package.json, package-lock.json, node-module등이 설치된다.



// HTTP 내장 모듈로 서버 실행하기
// const http = require('http');
// const app = http.createServer((req, res) => {
//   // 화면에 한글 뜨게하기: 정상 헤더에 타입을 지정해준다.
//   res.writeHead(200, { "Content-Type": "text/html; charset=utf-8"}) 
//   if(req.url === '/') {
//     res.end('루트 페이지 입니다.')
//   } else if (req.url === '/login') {
//     res.end('로그인 페이지 입니다.')
//   }
// });

// // root 경로를 찾을 수 없을 때는 browser창의 loading이 계속 된다.
// // http.createServer() -> http.createServer((req, res) => {console.log(req.url)});
// // console창에 해당 url(root를 제외한)이 찍힌다. 이것을 이용하여 routing할 수 있다.

// app.listen(3031,  () => {
//   console.log('http로 가동된 서버입니다.')
// })