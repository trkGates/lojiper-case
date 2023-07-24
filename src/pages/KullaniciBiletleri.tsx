import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { LoginBilgileriContext } from "../context/LoginBilgileri";

import "./CSS/Kullanici.css";

interface Bilet {
  id: number;
  seferId: number;
  koltukNo: number;
  UserId: number;
  koltukFiyati: number;
  cinsiyet: string;
}

interface SeferIdObject {
  seferId: number;
}

const KullaniciBiletleri = () => {
  const [biletlerim, setBiletlerim] = useState<Bilet[]>([]);
  const [seferIdList, setSeferIdList] = useState<SeferIdObject[]>([]);
  const [seferler, setSeferler] = useState<any[]>([]);

  const { loginBilgileri, setLoginBilgileri } = useContext(
    LoginBilgileriContext
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .post("/koltuk/UserIdBiletleri", { UserId: loginBilgileri.id })
      .then((response) => {
        if (response.status === 200) {
          console.log("BİLETLERİM !", response.data);
          setBiletlerim(response.data);
          // SeferId'leri ayrı bir state'e ekleyelim
          const seferIds: number[] = response.data.map(
            (bilet: Bilet) => bilet.seferId
          );
          // Yalnızca tekil seferId'leri filtreleyelim ve nesne dizisine dönüştürelim
          const uniqueSeferIds: SeferIdObject[] = Array.from(
            new Set(seferIds)
          ).map((seferId) => ({ seferId }));
          setSeferIdList(uniqueSeferIds);
        } else if (response.status === 401) {
          console.log("Başarısız:", response.data.message);
        }
      })
      .catch((error) => {
        if (error.response) {
          console.log("Kayıt Başarısız:", error.response.data.message);
        } else if (error.request) {
          console.log("Sunucuya ulaşılamıyor.");
        } else {
          console.log("Bir hata oluştu:", error.message);
        }
      });
  }, []);

  useEffect(() => {
    console.log("seferIdList:", seferIdList);
  }, [seferIdList]);

  useEffect(() => {
    seferIdList.map((seferObj) =>
      axios
        .post("/sefer/seferVarMi", { seferId: seferObj.seferId })
        .then((response) => {
          if (response.status === 200) {
            console.log("Sefer var mı?", response.data);

            // Update the seferler state by spreading the previous array and the new data array
            setSeferler((prevSeferler) => [...prevSeferler, ...response.data]);
          } else if (response.status === 401) {
            console.log("Başarısız:", response.data.message);
          }
        })
    );
  }, [seferIdList]);

  useEffect(() => {
    console.log("seferler:", seferler);
  }, [seferler]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div id="Kullanici-MainContainer">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {biletlerim.map((bilet) => (
            <div id="Kullanici-Map" key={bilet.id}>
              {seferler.map((sefer) => {
                if (sefer.id == bilet.seferId) {
                  return (
                    <div key={bilet.id}>
                      <div id="Kullanici-Resim">
                        <img
                          src={sefer.seferSirketResim}
                          alt="Şirket Resmi"
                        ></img>
                        <p>Sefer Şirketi: {sefer.seferSirketi}</p>
                      </div>

                      <div className="Kullanici-Bilgiler">
                        <p>Sefer Tarihi: {sefer.seferTarihi}</p>
                        <p>Sefer Kalkış Yeri: {sefer.seferKalkisYeri}</p>
                        <p>Sefer Varış Yeri: {sefer.seferVarisYeri}</p>
                        <p>Sefer Kalkış Saati: {sefer.seferSuresi}</p>
                        <p>Sefer Koltuk Düzeni: {sefer.seferKoltukDüzeni}</p>
                        <p>Sefer Ücreti: {sefer.seferUcreti} TL</p>
                      </div>
                    </div>
                  );
                }
              })}
              <div>
                <div className="Kullanici-Bilgiler">
                  <p>Bilet Numarası: {bilet.id}</p>
                  <p>Adı: {loginBilgileri.firstName}</p>
                  <p>Soyadı: {loginBilgileri.lastName}</p>
                  <p>Koltuk Numarası: {bilet.koltukNo}</p>
                  <p>Email: {loginBilgileri.email}</p>
                  <p>Cinsiyet: {bilet.cinsiyet}</p>
                </div>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default KullaniciBiletleri;
