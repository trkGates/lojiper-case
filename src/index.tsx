import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";

import LoginBilgileriProvider from "./context/LoginBilgileri";
import ArammaBilgiler from "./context/AramaBilgileri";
import { PrimeReactProvider } from "primereact/api";
import { KoltukContextProvider } from "./context/SecilenKoltuklar";
import { SeferProvider } from "./context/SecilenSefer";

import "./reset.css";
import "./index.css";
import "primereact/resources/themes/lara-light-indigo/theme.css"; // theme
import "primereact/resources/primereact.css"; // core css
import "primeicons/primeicons.css";
import { TutarProvider } from "./context/TutarContext";

axios.defaults.baseURL = "http://localhost:5000";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <PrimeReactProvider>
    <TutarProvider>
      <SeferProvider>
        <KoltukContextProvider>
          <ArammaBilgiler>
            <LoginBilgileriProvider>
              <BrowserRouter>
                <React.StrictMode>
                  <App />
                </React.StrictMode>
              </BrowserRouter>
            </LoginBilgileriProvider>
          </ArammaBilgiler>
        </KoltukContextProvider>
      </SeferProvider>
    </TutarProvider>
  </PrimeReactProvider>
);
