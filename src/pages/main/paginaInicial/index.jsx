import React from "react";
import { useNavigate } from "react-router-dom";

export default function PaginaInicial() {
  const navigate = useNavigate();
  return (
    <div>
      <h2>Pagina inicial</h2>
      <button onClick={() => navigate("/atividades")}>
        Ir para pagina Atividades
      </button>
    </div>
  );
}
