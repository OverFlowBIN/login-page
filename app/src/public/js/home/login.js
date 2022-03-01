'use strict';

// ## login page JavaScript
// DOM -> Document Object Medel

const id = document.querySelector("#id"),
  password = document.querySelector("#password"),
  loginBtn = document.querySelector("#button");

loginBtn.addEventListener("click", login);

function login () {
  const req = {
    id: id.value,
    password: password.value
  };
  // console.log(req)
  // console.log(JSON.stringify(req))

  fetch("/login", {
    method: "POST",  // 바디를 통해서 데이터를 전달 할 때는 HTTP method를 선택해야됨
    headers: {
      "Content-Type": "application/json"   // 내가 전달하는 데이터의 타입을 정해줘야한다
    },     
    body: JSON.stringify(req)
  })
  .then(res => res.json())
  // .then(console.log) ->  .then(data => console.log(data)) 여기서 data 생략 가능
  // then함수가 첫번째 인자로 들어오는 파라미터함수를 실행시킬때

  // 로그인 결과에 따른 process 추가
  // 데이터베이스에 있는 아이디 비번이 맞으면 홈화면으로 이동
  .then(resData => {
    if(resData.success === true) {
      // 루트로 이동하기
      location.href = '/';

    // 데이터 베이스에 있는 아이디 비번이 아니면 경고창 표시
    } else {
      alert(resData.msg)
      // console.log(location.href)  ->  loaction.href 현재 위치의 url을 환인 및 변경할 수있다
    }
  })
  // error 처리하기
  .catch((err) => {
    console.error("로그인 중 에러 발생")
  });
}






// fetch("/login", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify(req),
// }).then((res) => {
//   console.log(res);
//   res.send();
// });
