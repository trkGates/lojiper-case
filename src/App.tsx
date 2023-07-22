import React from "react";
import { Routes, Route  , BrowserRouter as Router  } from "react-router-dom"; // Doğru import yaptığınızdan emin olun
import Home from "./layout/Home";
import Login from "./layout/Login";
import Register from "./layout/Register";
import DashboardPage from "./layout/DashboardPage";
import { ToastContainer } from "react-toastify";

import "./App.css";
const App: React.FC = () =>  {

  return (
    <>
      <div id="MainContainer">
        <div id="Container1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="dashboard" element={<DashboardPage />} />
          </Routes>
          <ToastContainer />

        </div>
      </div>
    </>
  );
};

export default App;
