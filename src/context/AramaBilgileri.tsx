import { createContext, useState, ReactNode } from "react";

export interface AramaMenüsüContextProps {
  secilen: {
    kalkisNoktasi: string | null | any;
    varisNoktasi: string | null | any;
    yolculukTarihi: string | null | any;
  };
  setSecilen: React.Dispatch<
    React.SetStateAction<{
      kalkisNoktasi: string | null | any;
      varisNoktasi: string | null | any;
      yolculukTarihi: string | null | any;
    }>
  >;
}

export const AramaMenüsü = createContext<AramaMenüsüContextProps>({
  secilen: {
    kalkisNoktasi: null,
    varisNoktasi: null,
    yolculukTarihi: null,
  },
  setSecilen: () => {},
});

const AramaMenüsüDosyası: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [secilen, setSecilen] = useState<AramaMenüsüContextProps["secilen"]>({
    kalkisNoktasi: null,
    varisNoktasi: null,
    yolculukTarihi: null,
  });

  const contextState: AramaMenüsüContextProps = {
    secilen: secilen,
    setSecilen: setSecilen,
  };

  return (
    <AramaMenüsü.Provider value={contextState}>{children}</AramaMenüsü.Provider>
  );
};

export default AramaMenüsüDosyası;
