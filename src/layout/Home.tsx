import React, { useRef, useEffect } from "react";
import NavBar from "../pages/NavBar";
import AramaMenusu from "../pages/AramaMenusu";
import "./CSS/Home.css";
import Sefer from "../pages/Sefer";
import KoltukSec from "../pages/KoltukSec";

const Home: React.FC = () => {
  return (
    <>
      <NavBar />
      <AramaMenusu />
      <Sefer />
      <KoltukSec />
    </>
  );
};

export default Home;
