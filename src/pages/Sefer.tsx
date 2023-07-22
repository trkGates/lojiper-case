import React, { useState, useContext } from "react";
import axios from "axios";
import {
  AramaMenüsü,
  AramaMenüsüContextProps,
} from "../context/AramaBilgileri";

import "./CSS/sefer.css";
interface SeferData {
  id: number;
  seferSirketi: string;
  seferKalkisYeri: string;
  seferVarisYeri: string;
  seferTarihi: string;
  seferSuresi: string;
  seferKapasitesi: string;
  seferUcreti: string;
  seferAciklama: string;
}

const Sefer: React.FC = () => {
  const { secilen, setSecilen } =
    useContext<AramaMenüsüContextProps>(AramaMenüsü);
  const [seferData, setSeferData] = useState<SeferData[]>([]);
  const [error, setError] = useState<string | null>(null);

  const seferBul = () => {
    axios
      .post<SeferData[]>("http://localhost:5000/sefer/seferBul", {
        seferKalkisYeri: secilen.kalkisNoktasi?.label,
        seferVarisYeri: secilen.varisNoktasi?.label,
        seferTarihi: secilen.yolculukTarihi,
      })
      .then((response) => {
        setSeferData(response.data);
        setError(null);
      })
      .catch((error) => {
        console.log(error.response.data.message);
        setSeferData([]);
        setError(error.response.data.message);
      });
  };

  return (
    <div>
      <h1>Sefer</h1>
      <button onClick={seferBul}>Seferi Bul</button>
      <div>
        {error ? ( // If there's an error, display the error message
          <p>{error}</p>
        ) : (
          // Otherwise, display the seferData if available
          seferData.map((sefer) => (
            <div id="sefer" key={sefer.id}>
              <p className="detay">Sefer Adı: {sefer.seferSirketi}</p>
              <p className="detay">Kalkış Yeri: {sefer.seferKalkisYeri}</p>
              <p className="detay">Varış Yeri: {sefer.seferVarisYeri}</p>
              <p className="detay">Tarih: {sefer.seferTarihi}</p>
              <p className="detay">Süre: {sefer.seferSuresi}</p>
              <p className="detay">Kapasite: {sefer.seferKapasitesi}</p>
              <p className="detay">Ücret: {sefer.seferUcreti}</p>
              <p className="detay">Açıklama: {sefer.seferAciklama}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Sefer;
