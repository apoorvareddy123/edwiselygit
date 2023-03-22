import React, { createContext, useState } from "react";

const globalContext = createContext();

const GlobalData = ({ children }) => {
  const [name, setName] = useState("EDWISELY");

  return (
    <globalContext.Provider value={{ name, setName }}>
      {children}
    </globalContext.Provider>
  );
};

export { globalContext, GlobalData };
