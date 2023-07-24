const express = require("express");
const app = express();
const seferModel = require("./sefer-model");

app.post("/seferBul", async (req, res, next) => {
  try {
    const { seferKalkisYeri, seferVarisYeri, seferTarihi } = req.body;
    if (!seferKalkisYeri) {
      res.status(401).json({ message: "Kalkış yeri boş bırakılamaz." });
    } else if (!seferVarisYeri) {
      res.status(401).json({ message: "Varış yeri boş bırakılamaz." });
    } else if (!seferTarihi) {
      res.status(401).json({ message: "Tarih boş bırakılamaz." });
    } else if (seferKalkisYeri && seferVarisYeri && seferTarihi) {
      await seferModel
        .getSeferBul(seferKalkisYeri, seferVarisYeri, seferTarihi)
        .then((sefer) => {
          if (sefer < 1) {
            res.status(401).json({ message: "Sefer bulunamadı." });
          } else if (sefer) {
            res.status(200).json(sefer);
          }
        });
    } else {
      res.status(401).json({ message: "Sefer bulunamadı." });
    }
  } catch (error) {
    if (error.code === "ER_BAD_FIELD_ERROR") {
      res.status(401).json({ message: "Sefer bulunamadı." });
    } else {
      res.json({ message: "sssSefer bulunamadı." });
    }
  }
});


app.post("/seferVarMi", async (req, res, next) => {
  try {
    const { seferId } = req.body;
    if (!seferId) {
      res.status(401).json({ message: "Sefer id boş bırakılamaz." });
    } else if (seferId) {
      await seferModel.getSeferVarMi(seferId).then((sefer) => {
        if (sefer < 1) {
          res.status(401).json({ message: "Sefer bulunamadı." });
        } else if (sefer) {
          res.status(200).json(sefer);
        }
      });
    } else {
      res.status(401).json({ message: "Sefer bulunamadı." });
    }
  } catch (error) {
    if (error.code === "ER_BAD_FIELD_ERROR") {
      res.status(401).json({ message: "Sefer bulunamadı." });
    } else {
      res.json({ message: "Sefer bulunamadı." });
    }
  }
});


module.exports = app;
