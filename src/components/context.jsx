import { createContext, useState } from "react";

export const Context = createContext();

export default function ConetextProvider({ children }) {
  const [isLogged, setIsLogged] = useState(false);

  return (
    <Context.Provider value={{ isLogged, setIsLogged }}>
      {children}
    </Context.Provider>
  );
}
