import React, { createContext, useContext, useState } from 'react';

const Context = createContext();

export const StateContext = ({children}) => {
    const [pokaziMenu, setPokaziMenu] = useState(false)
  return (
    <Context.Provider
      value={{
       pokaziMenu,
       setPokaziMenu,
      }}
    >
      {children}
    </Context.Provider>
  )
}

export const useStateContext = () => useContext(Context);