import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";
import LoginBilgileriProvider from "./context/LoginBilgileri";
import ArammaBilgiler from "./context/AramaBilgileri";
import { PrimeReactProvider } from "primereact/api";
import { PrimeReactContext } from "primereact/api";

import "./reset.css";
import "./index.css";
import "primereact/resources/themes/lara-light-indigo/theme.css"; // theme
import "primereact/resources/primereact.css"; // core css
import "primeicons/primeicons.css";

axios.defaults.baseURL = "http://localhost:5000";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <PrimeReactProvider>
    <ArammaBilgiler>
      <LoginBilgileriProvider>
        <BrowserRouter>
          <React.StrictMode>
            <App />
          </React.StrictMode>
        </BrowserRouter>
      </LoginBilgileriProvider>
    </ArammaBilgiler>
  </PrimeReactProvider>
);
