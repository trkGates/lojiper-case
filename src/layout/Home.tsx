import React, { useRef, useEffect } from "react";
import NavBar from "../pages/NavBar";
import AramaMenusu from "../pages/AramaMenusu";
import "./CSS/Home.css";
import Sefer from "../pages/Sefer";

const Home: React.FC = () => {
  return (
    <>
      <NavBar />
      <AramaMenusu />
      <Sefer />
    </>
  );
};

export default Home;
