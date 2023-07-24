import { createContext, useState } from "react";

export interface LoginBilgileri {
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  id: string;
}

export interface LoginBilgileriContextType {
  loginBilgileri: LoginBilgileri;
  setLoginBilgileri: React.Dispatch<React.SetStateAction<LoginBilgileri>>;
}
interface LoginBilgileriProviderProps {
  children: React.ReactNode;
}

export const LoginBilgileriContext = createContext<LoginBilgileriContextType>({
  loginBilgileri: {
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    id: "",
  },
  setLoginBilgileri: () => {},
});

export const LoginBilgileriProvider: React.FC<LoginBilgileriProviderProps> = ({
  children,
}) => {
  const [loginBilgileri, setLoginBilgileri] = useState<LoginBilgileri>({
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    id: "",
  });

  return (
    <LoginBilgileriContext.Provider
      value={{ loginBilgileri, setLoginBilgileri }}
    >
      {children}
    </LoginBilgileriContext.Provider>
  );
};
export default LoginBilgileriProvider;
