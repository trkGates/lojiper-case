import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { LoginBilgileriContext } from "../context/LoginBilgileri";

import "./CSS/Navbar.css";

const NavBar = () => {
  const [yazi, setYazi] = useState("");
  const { loginBilgileri, setLoginBilgileri } = useContext(
    LoginBilgileriContext
  );

  useEffect(() => {
    if (loginBilgileri.username !== "") {
      setYazi("Merhaba " + loginBilgileri.firstName + " " + loginBilgileri.lastName);
    }
  }, [loginBilgileri]);

  const handleLogout = () => {
    setLoginBilgileri({
      username: "",
      password: "",
      firstName: "",
      lastName: "",
      email: "",
      id: "",
    });
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo ">{/* istege baglı eklenebilir  */}</div>
      <ul className="navbar-menu">
        {loginBilgileri.username !== "" ? (
          <>
            <li id="yaziNavbar">
              <p>{yazi}</p>
            </li>
            <p className="ButunlarNav">
              <Link to="/">Ana Sayfa</Link>
            </p>
            <li className="ButunlarNav">
              <Link id="deneme1234" to="/biletlerim">
                Biletlerim
              </Link>
            </li>
            <li>
              <Link to="/" className="ButunlarNav" onClick={handleLogout}>
                Çıkış Yap
              </Link>
            </li>
          </>
        ) : (
          <>
            <p className="ButunlarNav">
              <Link to="/">Ana Sayfa</Link>
            </p>
            <li className="ButunlarNav">
              <Link to="/login">Giriş Yap</Link>
            </li>
            <li className="ButunlarNav">
              <p>
                <Link to="/register">Kayıt Ol</Link>
              </p>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default NavBar;
