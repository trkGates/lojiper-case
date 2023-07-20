import React from "react";
import { Link } from "react-router-dom";
import "./CSS/Navbar.css";
const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="https://picsum.photos/50/50" alt="Logo" />
      </div>
      <ul className="navbar-menu">
        <li>
          <Link to="/login">Giriş Yap</Link>
        </li>
        <li>
          <Link to="/register">Kayıt Ol</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
