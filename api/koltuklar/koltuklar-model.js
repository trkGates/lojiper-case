const db = require("../db-config");

exports.getKoltukBul = (seferId) => {
  return db("koltuklar").where("seferId", seferId).returning("*");
};

exports.getUserIdBiletleri = (UserId) => {
  return db("koltuklar").where("UserId", UserId).returning("*");
};

exports.getKoltukEkle = (seferId, koltukNo, UserId, koltukFiyati, cinsiyet) => {
  return db("koltuklar")
    .insert({ seferId, koltukNo, UserId, koltukFiyati, cinsiyet })
    .returning("*");
};

exports.getKoltukVarMi = (seferId, koltukNo) => {
  return db("koltuklar")
    .where("seferId", seferId)
    .andWhere("koltukNo", koltukNo);
};
