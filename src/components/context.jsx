import { createContext, useEffect, useState } from "react";
import { Firebase } from "./firebase";
import { getAuth } from "firebase/auth";
import axios from "axios";
export const Context = createContext();

export default function ConetextProvider({ children }) {
  const auth = getAuth(Firebase);
  const [user, setUser] = useState();
  const [isLogged, setIsLogged] = useState(false);
  const [alunos, setAlunos] = useState();

  useEffect(() => {
    const fecthData = async () => {
      await axios("http://localhost:4003/findAluno", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      })
        .then((response) => {
          console.log("Sucesso em fetch categoria!", response.data);
          setAlunos(response.data);
        })
        .catch((error) => {
          console.log("Erro em fetch categoria!", error);
        });
    };
    fecthData();
  }, []);

  return (
    <Context.Provider value={{ auth, isLogged, setIsLogged, user, setUser }}>
      {children}
    </Context.Provider>
  );
}
