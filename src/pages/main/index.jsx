import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import { Context } from "../../components/context";

export default function Main() {
  const { setIsLogged } = useContext(Context);
  return (
    <div style={{backgroundColor:"blue", height: "100vh"}}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h1>Home</h1>
        <h1>Pagina inicial</h1>
      </div>

      <div
        style={{
          margin: "15px",
          display: "flex",
          justifyContent: "center",
          backgroundColor: "red",
          height: "50vh",
          width: "90vw",
        }}
      >
        <Outlet />
      </div>
      <button onClick={() => setIsLogged(false)}>SAIR</button>
    </div>
  );
}
