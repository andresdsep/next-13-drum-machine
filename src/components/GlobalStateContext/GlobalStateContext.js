"use client";
import React from "react";

const GlobalStateContext = React.createContext();
export const useGlobalContext = () => React.useContext(GlobalStateContext);

function GlobalStateContextProvider({ children }) {
  const [soundEnabled, setSoundEnabled] = React.useState(true);
  const contextValue = React.useMemo(
    () => ({ soundEnabled, setSoundEnabled }),
    [soundEnabled]
  );

  return (
    <GlobalStateContext.Provider value={contextValue}>
      {children}
    </GlobalStateContext.Provider>
  );
}

export default GlobalStateContextProvider;
