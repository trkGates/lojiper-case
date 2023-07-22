import React from "react";
import svg from '../../public/direksiyon.svg';
import "./CSS/koltukSec.css";

const KoltukSec: React.FC = () => {
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
    // 26 numaralı koltuktan sonra gelen koltuklar için 4 sayıda bir aralıkla "50px"
    return "1px"; // Diğer koltuklar için marginBottom değeri 2px olacak
  };
  const getDeneme = (koltuk: number): string => {
    return koltuk === 25 ? "109px" : "1px";
  };

  return (
    <div id="koltukSec-MainContainer" >
        <div id="onTaraf"> 
        <img src="{svg}" alt="onTaraf" />
        </div>
        <div id="koltukSec-Container">
      {Koltuklar.map((koltuk) => (
        <div
          id="koltukSec-KoltukContainer"
          key={koltuk}
          style={{
            marginBottom: getMarginBottom(koltuk),
            marginTop: getDeneme(koltuk),
          }}
        >
          <div id="koltukSec-Koltuk">{koltuk}</div>
        </div>
      ))}
      </div>
    </div>
  );
};

export default KoltukSec;
