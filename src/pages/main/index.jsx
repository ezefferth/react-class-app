import React from "react";
import { Outlet } from "react-router-dom";

export default function Main() {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h1>Home</h1>
        <h1>Pagina inicial</h1>
      </div>

      <Outlet />
    </div>
  );
}
