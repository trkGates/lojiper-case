const koltuklarModel = require("./koltuklar-model");
const seferlerModel = require("../seferler/sefer-model");
const userModel = require("../users/users-model");
const koltukDoluMu = async (req, res, next) => {
  await koltuklarModel
    .getKoltukVarMi(req.body.seferId, req.body.koltukNo)
    .then((koltuk) => {
      if (koltuk < 1) {
        next();
      } else if (koltuk) {
        res.status(401).json({ message: "Koltuk dolu." });
      }
    });
};

const seferVarMi = async (req, res, next) => {
  await seferlerModel.getSeferVarMi(req.body.seferId).then((sefer) => {
    if (sefer < 1) {
      res.status(401).json({ message: "Sefer bulunamadı." });
    } else if (sefer) {
      next();
    }
  });
};

const userVarMi = async (req, res, next) => {
  await userModel.getUserVarMi(req.body.UserId).then((user) => {
    if (user < 1) {
      res.status(401).json({ message: "Lütfen Giriş yapın veya Kayıt olunuz" });
    } else if (user) {
      next();
    }
  });
};

module.exports = { koltukDoluMu, seferVarMi, userVarMi };
