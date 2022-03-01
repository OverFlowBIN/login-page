'use strict';

class UserStorage {
  // 인증을 위한 dummy_data
  // static을 이용하면 인스턴스를 생성하지 않고 UserStorage.users에 바로 접근할 수 있다.
  // users의 변수를 #users로 바꾸면 public -> private 변수로 바꿀 수 있다 -> 외부에서 불러 올 수 없다.
  static #users = {  
    id: ["bin11788", "overflowbin", "abcde"],
    password: ["1234", "123456", "abc123"],
    name: ["김영빈", "이종석", "우리밋"],
    email: ["1@naver.com", "2@naver.com", "3@gmail.com"]
  }

  static getUsers = (...fileds) => {
    const users = this.#users;
    const newUsers = fileds.reduce((newUsers, filed) => {
      if(users.hasOwnProperty(filed)) {
        newUsers[filed] = users[filed];
      }
      return newUsers;
    }, {})
    // console.log('newUsers', newUsers)

    return newUsers;
  }

  static getUserInfo(id) {
    const users = this.#users;
    const idx = users.id.indexOf(id);
    const userInfo = Object.keys(users).reduce((newUser, info) => {  // [id, password, name]
      newUser[info] = users[info][idx];
      return newUser
    }, {})

    return userInfo;
  }

  static save(userinfo) {
    const users = this.#users;
    users.id.push(userinfo.id)
    users.name.push(userinfo.name)
    users.password.push(userinfo.password)
    users.email.push(userinfo.email)
    return { success: true }
  }

};

module.exports = UserStorage;