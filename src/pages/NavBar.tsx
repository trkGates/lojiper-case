import React from "react";
import "./CSS/Navbar.css";
const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="https://picsum.photos/50/50" alt="Logo" />
      </div>
      <ul className="navbar-menu">
        <li>
          <a href="/login">Giriş Yap</a>
        </li>
        <li>
          <a href="#">Kayıt Ol</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
