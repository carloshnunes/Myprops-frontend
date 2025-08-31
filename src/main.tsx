import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Home from "./pages/home/Home";
import QuemSomos from "./pages/quemsomos/QuemSomos";
import ComoFunciona from "./pages/comofunciona/ComoFunciona";
import Login from "./pages/login/Login";
import PlayerDetails from "./pages/player/PlayerDetails";
import Jogo from "./pages/jogo/Jogo";
import './index.css';

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="quem-somos" element={<QuemSomos />} />
          <Route path="como-funciona" element={<ComoFunciona />} />
          <Route path="jogo" element={<Jogo />} />
          <Route path="login" element={<Login />} />
          <Route path="player/:playerName" element={<PlayerDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
