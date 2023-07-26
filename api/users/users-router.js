const express = require("express");
const app = express();
const usersModel = require("./users-model");
require("dotenv").config();

app.post("/user", async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const user = await usersModel.getUserNameAndPassword(username, password);
    if (user) {
      await res.status(200).json(user);
    } else {
      res.status(401).json({ message: "Kullanıcı adı veya şifre hatalı." });
    }
  } catch (error) {
    next(error);
  }
});

app.post("/userBul", async (req, res, next) => {
  try {
    const { username } = req.body;
    await usersModel.getUserBul(username).then((user) => {
      if (user) {
        res.status(200).json({ message: `Merhaba, ${user.username}!` });
      } else {
        res.status(401).json({ message: "Kullanıcı adı hatalı." });
      }
    });
  } catch (error) {
    next(error);
  }
});

app.post("/register", async (req, res, next) => {
  try {
    const { username, email } = req.body;
    await usersModel.getUserBul(username).then((user) => {
      if (user) {
        res
          .status(401)
          .json({ message: "Kullanıcı adı daha önce kullanılmış." });
      } else {
        usersModel.getMailBul(email).then((user) => {
          if (user) {
            res.status(401).json({ message: "Email daha önce kullanılmış." });
          } else {
            usersModel.addUser(req.body).then((user) => {
              res.status(200).json({ message: "Kullanıcı başarıyla eklendi." });
            });
          }
        });
      }
    });
  } catch (error) {
    next(error);
  }
});

module.exports = app;
