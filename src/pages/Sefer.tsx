import React, { useState, useContext } from "react";
import axios from "axios";
import {
  AramaMenüsü,
  AramaMenüsüContextProps,
} from "../context/AramaBilgileri";
import { set } from "../../api/users/users-router";

interface SeferData {
  id: number;
  seferAdi: string;
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
            <div key={sefer.id}>
              <p>Sefer Adı: {sefer.seferAdi}</p>
              <p>Kalkış Yeri: {sefer.seferKalkisYeri}</p>
              <p>Varış Yeri: {sefer.seferVarisYeri}</p>
              <p>Tarih: {sefer.seferTarihi}</p>
              <p>Süre: {sefer.seferSuresi}</p>
              <p>Kapasite: {sefer.seferKapasitesi}</p>
              <p>Ücret: {sefer.seferUcreti}</p>
              <p>Açıklama: {sefer.seferAciklama}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Sefer;
