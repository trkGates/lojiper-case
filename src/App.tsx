import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./layout/Home";
import Login from "./layout/Login";

import "./App.css";
function App() {
  return (
    <>
     <div id="MainContainer">
      <div id="Container1">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />} />
      </Routes>
      </div>
    </div>
    </>
  );
}

export default App;
