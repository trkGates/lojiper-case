const db = require("../db-config");

exports.getKoltukBul = (seferId) => {
  return db("koltuklar").where("seferId", seferId).returning("*");
};

exports.getKoltukEkle = (seferId, koltukNo, UserId, koltukFiyati) => {
  return db("koltuklar")
    .insert({ seferId, koltukNo, UserId, koltukFiyati })
    .returning("*");
};

exports.getKoltukVarMi = (seferId, koltukNo) => {
  return db("koltuklar").where("seferId", seferId).andWhere("koltukNo", koltukNo);
}

