

import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Atividades() {

  const navigate = useNavigate()

  return (
    <div>
      <h2>Atividades</h2>
      <button
        onClick={() => navigate("/home")}
      >Ir para pagina inicial</button>
    </div>
  )
}
