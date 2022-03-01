"use strict";

const User = require("../../models/User");
// const UserStorage = require("../../models/UserStorage");

const output = {
  home: (req, res) => {
    // browser에서 '/'경로로 get요청이 들어오면 callback 함수 실행
    res.render("home/index");
  },
  login: (req, res) => {
    res.render("home/login");
  },
  register: ((req, res) => {
    res.render("home/register")
  })
  
}

const process = {
  login: (req, res) => {
    const user = new User(req.body);
    const response = user.login();
    // console.log(response)
    return res.json(response);
  },

  register: (req, res) => {
    const user = new User(req.body);
    const response = user.register();
    // console.log(response)
    return res.json(response);
  }
}




module.exports = {
  output,
  process
};