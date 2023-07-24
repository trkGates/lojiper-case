const express = require("express");
const app = express();

const koltuklarRouter = require("./koltuklar-model");
const {
  koltukDoluMu,
  seferVarMi,
  userVarMi,
} = require("./koltuklar-middleware");

app.post("/koltukBul", seferVarMi, async (req, res, next) => {
  try {
    const { seferId } = req.body;
    if (!seferId) {
      res.status(401).json({ message: "Sefer id boş bırakılamaz." });
    } else if (seferId) {
      await koltuklarRouter.getKoltukBul(seferId).then((koltuk) => {
        if (koltuk < 1) {
          res.status(401).json({ message: "Koltuk bulunamadı." });
        } else if (koltuk) {
          res.status(200).json(koltuk);
        }
      });
    } else {
      res.status(401).json({ message: "Koltuk bulunamadı." });
    }
  } catch (error) {
    if (error.code === "ER_BAD_FIELD_ERROR") {
      res.status(401).json({ message: "Koltuk bulunamadı." });
    } else {
      res.json({ message: "Koltuk bulunamadı." });
    }
  }
});

app.post("/UserIdBiletleri", userVarMi, async (req, res, next) => {
  try {
    const { UserId } = req.body;
    if (!UserId) {
      res.status(401).json({ message: "Lütfen Giriş Yapınız!" });
    } else if (UserId) {
      await koltuklarRouter.getUserIdBiletleri(UserId).then((koltuk) => {
        if (koltuk < 1) {
          res.status(401).json({ message: "Bilet bulunamadı." });
        } else if (koltuk) {
          res.status(200).json(koltuk);
        }
      });
    } else {
      res.status(401).json({ message: "Bilet bulunamadı." });
    }
  } catch (error) {
    if (error.code === "ER_BAD_FIELD_ERROR") {
      res.status(401).json({ message: "Bilet bulunamadı." });
    } else {
      res.json({ message: "Bilet bulunamadı." });
    }
  }
});







app.post(
  "/koltukEkle",
  userVarMi,
  seferVarMi,
  koltukDoluMu,
  async (req, res, next) => {
    try {
      const { seferId, koltukNo, UserId, koltukFiyati, cinsiyet } = req.body;
      if (!seferId) {
        res.status(401).json({ message: "Sefer id boş bırakılamaz." });
      } else if (!koltukNo) {
        res.status(401).json({ message: "Koltuk no boş bırakılamaz." });
      } else if (!UserId) {
        res.status(401).json({ message: "User id boş bırakılamaz." });
      } else if (!koltukFiyati) {
        res.status(401).json({ message: "Koltuk fiyatı boş bırakılamaz." });
      } else if (!cinsiyet) {
        res.status(401).json({ message: "Cinsiyet boş bırakılamaz." });
      } else if (seferId && koltukNo && UserId && koltukFiyati && cinsiyet) {
        await koltuklarRouter
          .getKoltukEkle(seferId, koltukNo, UserId, koltukFiyati, cinsiyet)
          .then((koltuk) => {
            if (koltuk < 1) {
              res.status(401).json({ message: "Koltuk eklenemedi ." });
            } else if (koltuk) {
              res.status(200).json(koltuk);
            }
          });
      } else {
        res.status(401).json({ message: "Koltuk eklenemedi." });
      }
    } catch (error) {
      if (error.code === "ER_BAD_FIELD_ERROR") {
        res.status(401).json({ message: "Koltuk eklenemedi." });
      } else {
        res.json({ message: "Koltuk eklenemedi." });
      }
    }
  }
);

module.exports = app;
