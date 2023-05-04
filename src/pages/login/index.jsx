
function Btn({children}){
  return <button>{children}</button>
}

import React, { useContext } from 'react'
import { Context } from '../../components/context';

export default function Login() {
  const { setIsLogged } = useContext(Context);
  return (
    <div>Login
      <button onClick={() => setIsLogged(true)}>Click-me</button>
    </div>
  )
}
