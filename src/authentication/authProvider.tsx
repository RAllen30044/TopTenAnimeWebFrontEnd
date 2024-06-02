import { createContext, ReactNode, useContext, useState } from "react";
import { yesNo } from "../header/header";

type AuthProviderType = {
  addAnime: addAnimeAuth;
  setAddAnime: React.Dispatch<React.SetStateAction<addAnimeAuth>>;
  token: string | null;
  setToken: React.Dispatch<React.SetStateAction<string | null>>;
  username: string;
  setUsername: React.Dispatch<React.SetStateAction<string>>;
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  viewAdminForm: yesNo;
  setViewAdminForm: React.Dispatch<React.SetStateAction<yesNo>>;
};

export const AuthContext = createContext<AuthProviderType>(
  {} as AuthProviderType
);

type addAnimeAuth = "authorized" | "notAuthorized";
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [addAnime, setAddAnime] = useState<addAnimeAuth>("notAuthorized");
  const [viewAdminForm, setViewAdminForm] = useState<yesNo>("no");
  const [token, setToken] = useState<string | null>(
    localStorage.getItem("token") || null
  );
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <AuthContext.Provider
      value={{
        addAnime,
        setAddAnime,
        token,
        setToken,
        username,
        setUsername,
        password,
        setPassword,
        viewAdminForm,
        setViewAdminForm,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export const UseAuthProvider = () => useContext(AuthContext);
