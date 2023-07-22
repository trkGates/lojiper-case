const db = require("../db-config");

exports.getSeferBul = (seferKalkisYeri, seferVarisYeri, seferTarihi) => {
  return db("seferler")
    .where("seferKalkisYeri", seferKalkisYeri)
    .where("seferVarisYeri", seferVarisYeri)
    .where("seferTarihi", seferTarihi)
    .returning("*");
};

exports.getSeferVarMi = (seferId) => {
  return db("seferler").where("id", seferId).returning("*");
};
