function Btn({ children }) {
  return <button>{children}</button>;
}

import React, { useContext } from "react";
import { Context } from "../../components/context";
import { signInWithEmailAndPassword } from "firebase/auth";

export default function Login() {
  const { user, auth, setIsLogged, setUser } = useContext(Context);

  function login() {
    const email = "teste@teste.com";
    const password = "111111";
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setIsLogged(true);
        setUser(userCredential);
      })
      .catch((error) => {
        console.log(error.code);
        console.log(error.message);
      });
  }

  function test() {
    console.log(auth);
  }

  return (
    <div>
      Login
      { }
      <button onClick={() => login() /* setIsLogged(true) */}>LOGAR</button>
      <button onClick={() => test() /* setIsLogged(true) */}>Click-me</button>
    </div>
  );
}
