import React, { createContext, useContext, useState } from 'react';

const Context = createContext();

export const StateContext = ({children}) => {
    const [pokaziMenu, setPokaziMenu] = useState(false)
    const [kontakt, setkontakt] = useState(false)
  return (
    <Context.Provider
      value={{
       pokaziMenu,
       kontakt,
       setkontakt,
       setPokaziMenu,
      }}
    >
      {children}
    </Context.Provider>
  )
}

export const useStateContext = () => useContext(Context);