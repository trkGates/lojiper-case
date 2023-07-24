const db = require("../db-config");

exports.getUserBul = (username) => {
  return db("users").where("username", username).first().returning("*");
};
exports.getMailBul = (email) => {
  return db("users").where("email", email).first();
};

exports.getUserNameAndPassword = (username, password) => {
  return db("users")
    .where("username", username)
    .where("password", password)
    .first()
    .returning("*");
};

exports.addUser = (user) => {
  return db("users").insert(user);
};
exports.getUserVarMi = (UserId) => {
  return db("users").where("id", UserId);
};
