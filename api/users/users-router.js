const express = require("express");
const app = express();

const usersModel = require("./users-model");

app.post("/user", (req, res, next) => {
    const { username, password } = req.body;
    usersModel
        .getUserNameAndPassword(username, password)
        .then((user) => {
            if (user) {
                
                res.status(200).json({ message: `Merhaba, ${user.username}!` });
            } else {
                res.status(401).json({ message: "Kullanıcı adı veya şifre hatalı." });
            }
        })
        .catch(next);
});

module.exports = app;
