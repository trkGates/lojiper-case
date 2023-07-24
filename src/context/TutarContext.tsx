import { createContext, useContext, useState } from "react";

interface TutarContextType {
  tutar: number;
  setTutar: React.Dispatch<React.SetStateAction<number>>;
}

const TutarContext = createContext<TutarContextType>({
  tutar: 0,
  setTutar: () => {},
});

export function useTutarContext() {
  return useContext(TutarContext);
}

export function TutarProvider({ children }: { children: React.ReactNode }) {
  const [tutar, setTutar] = useState<number>(0);

  return (
    <TutarContext.Provider value={{ tutar, setTutar }}>
      {children}
    </TutarContext.Provider>
  );
}
