import React, { createContext, useContext, useState } from "react";

export type secilenCinsiyet = "Erkek" | "Kadın";

export interface SeatData {
  secilenKoltukNumarasi: number;
  secilenCinsiyet: secilenCinsiyet;
}

interface KoltukContextType {
  secilenKoltuklar: SeatData[];
  setSecilenKoltuklar: React.Dispatch<React.SetStateAction<SeatData[]>>;
}
export const KoltukContext = createContext<KoltukContextType>({
  secilenKoltuklar: [],
  setSecilenKoltuklar: () => {},
});

export function useKoltukContext() {
  return useContext(KoltukContext);
}

export function KoltukContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [secilenKoltuklar, setSecilenKoltuklar] = useState<SeatData[]>([]);

  return (
    <KoltukContext.Provider value={{ secilenKoltuklar, setSecilenKoltuklar }}>
      {children}
    </KoltukContext.Provider>
  );
}
