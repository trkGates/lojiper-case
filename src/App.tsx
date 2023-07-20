import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./layout/Home";
import Login from "./layout/Login";
import Register from "./layout/Register";

import "./App.css";
function App() {
  return (
    <>
     <div id="MainContainer">
      <div id="Container1">
      <Routes>
        <Route path="/*" element={<Home />}></Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      </div>
    </div>
    </>
  );
}

export default App;
