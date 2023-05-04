import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import React, { useContext } from "react";
import Login from "../pages/login";
import Main from "../pages/main";
import Atividades from "../pages/main/atividades";
import PaginaInicial from "../pages/main/paginaInicial";
import { Context } from "./context";

function PrivateRoute({ isLogged }) {
  return isLogged ? <Outlet /> : <Navigate to="/login" />;
}

function NotPrivateRoute({ isLogged }) {
  return isLogged ? <Navigate to="/home" /> : <Outlet />;
}

export default function Routers() {
  const { isLogged } = useContext(Context);
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PrivateRoute isLogged={isLogged} />}>
          <Route element={<Main />}>
            <Route path="/atividades" element={<Atividades />} />
            <Route path="/home" element={<PaginaInicial />} />
          </Route>
        </Route>
        <Route element={<NotPrivateRoute isLogged={isLogged} />}>
          <Route path="/login" element={<Login />} />
        </Route>
        <Route path="*" element={<h1>page not found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}
