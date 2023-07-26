import React from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom"; // Doğru import yaptığınızdan emin olun
import Home from "./layout/Home";
import Login from "./layout/Login";
import Register from "./layout/Register";
import { ToastContainer } from "react-toastify";
import SatinAlma from "./layout/SatinAlma";

import "./App.css";
import Biletlerim from "./layout/Biletlerim";
const App: React.FC = () => {
  return (
    <>
      <div id="MainContainer">
        <div id="Container1">
          <Routes>
            <Route path="/*" element={<Home />}></Route>
            <Route path="/satinAlma" element={<SatinAlma />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/biletlerim" element={<Biletlerim />} />
          </Routes>
          <ToastContainer />
        </div>
      </div>
    </>
  );
};

export default App;
