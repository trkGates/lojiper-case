

import { createContext, useState } from "react";

export interface LoginBilgileri {
  username: string;
  password: string;
}

export interface LoginBilgileriContextType {
  loginBilgileri: LoginBilgileri;
  setLoginBilgileri: React.Dispatch<React.SetStateAction<LoginBilgileri>>;
}
interface LoginBilgileriProviderProps {
  children: React.ReactNode;
}

export const LoginBilgileriContext = createContext<LoginBilgileriContextType>({
  loginBilgileri: { username: "", password: "" },
  setLoginBilgileri: () => {}
});

export const LoginBilgileriProvider: React.FC<LoginBilgileriProviderProps> = ({ children }) => {
  const [loginBilgileri, setLoginBilgileri] = useState<LoginBilgileri>({
    username: "",
    password: ""
  });

  return (
    <LoginBilgileriContext.Provider value={{ loginBilgileri, setLoginBilgileri }}>
      {children}
    </LoginBilgileriContext.Provider>
  );
};
export default LoginBilgileriProvider;