import React, { useState, useContext } from "react";
import axios from "axios";
import {
  AramaMenüsü,
  AramaMenüsüContextProps,
} from "../context/AramaBilgileri";

import "./CSS/sefer.css";
import { Button } from "primereact/button";
import KoltukSec from "./KoltukSec";
import { ButtonBase } from "@mui/material";
import { toast } from "react-toastify";
import { LoginBilgileriContext } from "../context/LoginBilgileri";
export interface SeferData {
  id: number;
  seferSirketResim: string;
  seferSirketi: string;
  seferKalkisYeri: string;
  seferVarisYeri: string;
  seferTarihi: string;
  seferSuresi: string;
  seferSaati: string;
  seferKapasitesi: string;
  seferUcreti: string;
  seferAciklama: string;
  seferKoltukDüzeni: string;
}

const Sefer: React.FC = () => {
  const { secilen, setSecilen } =
    useContext<AramaMenüsüContextProps>(AramaMenüsü);
  const [seferData, setSeferData] = useState<SeferData[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [koltukSecVisibleMap, setKoltukSecVisibleMap] = useState<{
    [id: number]: boolean;
  }>({});
  const { loginBilgileri, setLoginBilgileri } = useContext(
    LoginBilgileriContext
  );

  // Function to toggle the visibility of KoltukSec for a specific id
  const toggleKoltukSecVisible = (id: number) => {
    setKoltukSecVisibleMap((prevMap) => ({
      ...prevMap,
      [id]: !prevMap[id] || false,
    }));
  };

  const seferBul = () => {
    axios
      .post<SeferData[]>("/sefer/seferBul", {
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
        toast.error(error.response.data.message);
      });
  };

  return (
    <div>
      <Button id="S-Button" onClick={seferBul}>
        Seferi Bul
      </Button>
      <div>
        {seferData.map((sefer) => (
          <div id="sefer" key={sefer.id}>
            <div id="sefer-container">
              <div className="sefer-ortak" id="seferResim">
                <img
                  id="resimBoyut"
                  src={sefer.seferSirketResim}
                  alt="Pamukkale"
                />
              </div>

              <div className="sefer-ortak" id="seferSaati">
                <p>
                  <i className="pi pi-clock"></i> {sefer.seferSaati}
                </p>
                <p className="detay">{sefer.seferSuresi}</p>
              </div>

              <div className="sefer-ortak" id="seferDuzeni">
                <p id="koltuk-duzeni"> {sefer.seferKoltukDüzeni}</p>
                <p className="detay">
                  {" "}
                  {sefer.seferKalkisYeri}{" "}
                  <i className="pi pi-angle-double-right"></i>
                  {sefer.seferVarisYeri}
                </p>
              </div>

              <div className="sefer-ortak" id="seferUcreti">
                <p className="detay">{sefer.seferUcreti} ₺</p>
              </div>
              <div>
                <Button onClick={() => toggleKoltukSecVisible(sefer.id)}>
                  KOLTUK SEÇ
                </Button>
              </div>
            </div>

            <div id="">

              {koltukSecVisibleMap[sefer.id] && <KoltukSec sefer={sefer} />}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sefer;
