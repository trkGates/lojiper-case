import React, { useContext } from "react";
import { useSeferContext } from "../context/SecilenSefer";
import { useKoltukContext } from "../context/SecilenKoltuklar";
import { LoginBilgileriContext } from "../context/LoginBilgileri";

import "./CSS/BiletAl.css";
import { useTutarContext } from "../context/TutarContext";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const BiletAl: React.FC = () => {
  const { seferBilgileri, setSeferBilgileri } = useSeferContext();
  const { secilenKoltuklar, setSecilenKoltuklar } = useKoltukContext();
  const { loginBilgileri, setLoginBilgileri } = useContext(
    LoginBilgileriContext
  );

  const { tutar, setTutar } = useTutarContext();

  const navigate = useNavigate();
  const handleTiklandi = () => {
    secilenKoltuklar.map((koltuk) => {
      axios
        .post("/koltuk/koltukEkle", {
          seferId: seferBilgileri.id,
          koltukNo: koltuk.secilenKoltukNumarasi,
          UserId: loginBilgileri.id,
          koltukFiyati: seferBilgileri.seferUcreti,
          cinsiyet: koltuk.secilenCinsiyet,
        })
        .then((response) => {
          if (response.status === 200) {
            console.log("Başarılııı!!!", response.data);
            toast.success(
              "Biletiniz Başarıyla Alındı. Yönlendiriliyorsunuz..."
            );
            setTimeout(() => {
              navigate("/biletlerim");
            }, 1000);
          } else if (response.status === 401) {
            console.log("Başarısız olduk be abi :", response.data.message);
          }
        })
        .catch((error) => {
          if (error.response) {
            console.log("Kayıt Başarısız:", error.response.data.message);
            toast.warn(error.response.data.message);
          } else if (error.request) {
            console.log("Sunucuya ulaşılamıyor.");
          } else {
            console.log("Bir hata oluştu:", error.message);
          }
        });
    });
  };

  return (
    <div id="B-MainContainer">
      <div id="B-Container_1">
        <div id="B-Div_1">
          <img src={seferBilgileri.seferSirketResim} alt="" />
          <h2>{seferBilgileri.seferSirketi}</h2>
        </div>
        <div id="B-Div_2">
          <div className="B-Div_2_1">
            <div className="B-Div_2_2">
              <h2>Kalkış</h2>
              <p>{seferBilgileri.seferKalkisYeri}</p>
            </div>
            <div className="B-Div_2_2">
              <h2> Varış</h2>
              <p>{seferBilgileri.seferVarisYeri}</p>
            </div>
          </div>
          <div className="B-Div_2_1">
            <div className="B-Div_2_2">
              <h2>Hareket Zamanı</h2>
              <p>{seferBilgileri.seferSaati}</p>
              <p>{seferBilgileri.seferTarihi}</p>
            </div>
            <div className="B-Div_2_2">
              <h2>Koltuk</h2>
              <p id="B-koltuklar">
                {secilenKoltuklar.map((koltuk) => {
                  return koltuk.secilenKoltukNumarasi + ".Numara  ";
                })}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div id="B-Container_2">
        <p className="B-Yocu ">
          <p>Yolcu Bilgiler</p>
        </p>
        <p className="B-Yocu">
          <p>Adı:</p>
          <p>{loginBilgileri.firstName}</p>
        </p>
        <p className="B-Yocu">
          <p>Soyadı:</p>
          <p>{loginBilgileri.lastName}</p>
        </p>
        <p className="B-Yocu">
          <p>Email:</p>
          <p>{loginBilgileri.email}</p>
        </p>
      </div>

      <div id="B-Container_3">
        <div className="B-Container_3_1">
          <p>Ödeme Bilgileri</p>
        </div>
        <div className="B-Container_3_1">
          <p>Kart Numarası</p>
          <input type="text" placeholder="···· ···· ···· ···· " />
        </div>
        <div id="B-ccv-aa">
          <div className="B-Container_3_1">
            <p>Son Kullanma Tarihi</p>
            <input id="B-SKT" type="text" placeholder="AA / YY" />
          </div>
          <div className="B-Container_3_1">
            <p>CVV</p>
            <input type="text" placeholder="··· " />
          </div>
        </div>
        <div className="B-Container_3_1">
          <button onClick={handleTiklandi} id="OdemeButton">
            {tutar}TL Ödeme Yap
          </button>
        </div>
      </div>
    </div>
  );
};

export default BiletAl;
