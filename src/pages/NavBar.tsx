import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { LoginBilgileriContext } from "../context/LoginBilgileri";

import "./CSS/Navbar.css";

const NavBar = () => {
  const [yazi, setYazi] = useState("");
  const { loginBilgileri, setLoginBilgileri } = useContext(LoginBilgileriContext);

  useEffect(() => {
    if (loginBilgileri.username !== "") {
      setYazi("Merhaba " + loginBilgileri.username);
    }
  }, [loginBilgileri]);

  const handleLogout = () => {
    setLoginBilgileri({ username: "", password: "" });
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img src="https://picsum.photos/50/50" alt="Logo" />
        </Link>
      </div>
      <ul className="navbar-menu">
        {loginBilgileri.username !== "" ? (
          <>
            <li>{yazi}</li>
            <li>
              <button onClick={handleLogout}>Çıkış Yap</button>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/login">Giriş Yap</Link>
            </li>
            <li>
              <Link to="/register">Kayıt Ol</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default NavBar;
