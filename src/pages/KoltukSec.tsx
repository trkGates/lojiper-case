import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { SeferData } from "./Sefer";

import "./CSS/koltukSec.css";

type Gender = "Erkek" | "Kadın";

interface SeatData {
  seatNumber: number;
  gender: Gender;
}
interface KoltukSecProps {
  sefer: SeferData;
}

const KoltukSec: React.FC<KoltukSecProps> = ({ sefer }) => {
  const [secilenler, setSecilenler] = useState<SeatData[]>([]);
  const [showGenderModal, setShowGenderModal] = useState<boolean>(false);
  const [secilenNumara, setSecilenNumara] = useState<number | null>(null);
  const [tutar, setTutar] = useState<number>(0);
  const {
    id,
    seferSirketResim,
    seferSirketi,
    seferKalkisYeri,
    seferVarisYeri,
    seferTarihi,
    seferSuresi,
    seferSaati,
    seferKapasitesi,
    seferUcreti,
    seferAciklama,
    seferKoltukDüzeni,
  } = sefer;

  const handleSeatClick = (koltuk: number) => {
    const seatIndex = secilenler.findIndex(
      (seatData) => seatData.seatNumber === koltuk
    );

    if (seatIndex !== -1) {
      // Koltuk seçiliyse seçimden çıkarıyoruz
      setSecilenler((prevsecilenler) =>
        prevsecilenler.filter((_, index) => index !== seatIndex)
      );
    } else if (secilenler.length < 5) {
      // Koltuk sayısı 5 olana kadar ekliyoruz
      setSecilenNumara(koltuk);
      setShowGenderModal(true);
    } else {
      // 6. eklemeye çalışıldığında hata veriyor
      toast.error("En fazla 5 koltuk seçebilirsiniz.");
    }
  };

  const handleGenderSelect = (gender: Gender) => {
    setShowGenderModal(false);
    if (secilenNumara !== null) {
      setSecilenler((prevsecilenler) => [
        ...prevsecilenler,
        { seatNumber: secilenNumara, gender },
      ]);
      setSecilenNumara(null);
    }
  };

  const Koltuklar: number[] = [];
  for (let i = 1; i <= 50; i++) {
    Koltuklar.push(i);
  }
  const getMarginBottom = (koltuk: number): string => {
    if (koltuk === 26) return "1px"; // 26 numaralı koltuğun marginBottom değeri 2px olacak
    if (koltuk > 26 && (koltuk - 26) % 4 === 2) {
      return "35px";
    }
    if (koltuk < 26 && koltuk % 4 === 2) {
      return "35px";
    }
    return "1px";
  };
  const get25Number = (koltuk: number): string => {
    return koltuk === 25 ? "109px" : "1px";
  };
  const getSeatBgColor = (koltuk: number): string => {
    const seatData = secilenler.find(
      (seatData) => seatData.seatNumber === koltuk
    );
    return seatData?.gender === "Erkek"
      ? "#50a4f3"
      : seatData?.gender === "Kadın"
      ? "#bd8598"
      : "";
  };
  useEffect(() => {
    const updatedTutar = secilenler.length * Number(seferUcreti);
    setTutar(updatedTutar);
  }, [secilenler.length, seferUcreti]);

  return (
    <div id="K-MainContainer">
      <div id="K-Container1">
        <div id="K-Container1_1">
          <img
            id="fotoDireksiyon"
            src="https://svgsilh.com/svg/150137.svg"
            alt="onTaraf"
          />
        </div>
        <div id="K-Container1_2">
          {Koltuklar.map((koltuk) => (
            <div
              className="K-MAP"
              key={koltuk}
              style={{
                marginBottom: getMarginBottom(koltuk),
                marginTop: get25Number(koltuk),
                backgroundColor: secilenler.some(
                  (seatData) => seatData.seatNumber === koltuk
                )
                  ? "#52b680"
                  : "",
              }}
              onClick={() => handleSeatClick(koltuk)}
            >
              <div id="K-Koltuklar">{koltuk} </div>
            </div>
          ))}
        </div>
        <div>
          {showGenderModal && (
            <div className="gender-modal">
              <button onClick={() => handleGenderSelect("Erkek")}>Erkek</button>
              <button onClick={() => handleGenderSelect("Kadın")}>Kadın</button>
            </div>
          )}
        </div>
      </div>

      <div id="K-Container2">
        {secilenler.length > 0 ? (
          <div id="K-Container2_1">
            <div>
              <p>Seçilen Koltuklar</p>
              <div id="K-secilenler">
                {secilenler.map((seatData) => (
                  <div id="K-secilenler-ic" key={seatData.seatNumber}>
                    <div
                      className="K-MAP"
                      style={{
                        backgroundColor: getSeatBgColor(seatData.seatNumber),
                      }}
                    >
                      {seatData.seatNumber}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p>Toplam Tutar</p>
              <div id="K-tutar">{tutar} TL</div>
            </div>
          </div>
        ) : (
          <p>Lütfen soldan koltuk seçin.</p>
        )}
        <button disabled={secilenler.length < 1} id="K-Button">
          {" "}
          Ödeme Yap{" "}
        </button>
      </div>
    </div>
  );
};

export default KoltukSec;
