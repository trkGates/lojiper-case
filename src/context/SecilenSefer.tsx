import { createContext, useContext, useState } from "react";
import { SeferData } from "../pages/Sefer";

interface SeferContextType {
  seferBilgileri: SeferData;
  setSeferBilgileri: (sefer: SeferData) => void;
}

const SeferContext = createContext<SeferContextType>({
  seferBilgileri: {} as SeferData,
  setSeferBilgileri: () => {},
});

export const useSeferContext = () => useContext(SeferContext);

export const SeferProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [seferBilgileri, setSeferBilgileri] = useState<SeferData>({
    id: 0,
    seferSirketResim: "",
    seferSirketi: "",
    seferKalkisYeri: "",
    seferVarisYeri: "",
    seferTarihi: "",
    seferSuresi: "",
    seferSaati: "",
    seferKapasitesi: "",
    seferUcreti: "",
    seferAciklama: "",
    seferKoltukDüzeni: "",
  });

  return (
    <SeferContext.Provider value={{ seferBilgileri, setSeferBilgileri }}>
      {children}
    </SeferContext.Provider>
  );
};
