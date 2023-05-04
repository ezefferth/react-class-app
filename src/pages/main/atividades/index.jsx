import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Atividades() {
  const navigate = useNavigate();

  const location = useLocation();

  return (
    <div>
      <h2>Atividades</h2>
      <button onClick={() => navigate("/home")}>Ir para pagina inicial</button>

      <h2>{location?.state.title}</h2>
    </div>
  );
}
