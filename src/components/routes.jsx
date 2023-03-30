import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Login from "../pages/login";
import Main from "../pages/main";
import Atividades from "../pages/main/atividades";
import PaginaInicial from "../pages/main/paginaInicial";

export default function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<Main />}>
          <Route path="/atividades" element={<Atividades />} />
          <Route path="/home" element={<PaginaInicial />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
