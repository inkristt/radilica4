import React, { createContext, useContext, useState } from 'react';

const Context = createContext();

export const StateContext = ({children}) => {
    const [proba, setproba] = useState('')
  return (
    <Context.Provider
      value={{
        proba,
        setproba
      }}
    >
      {children}
    </Context.Provider>
  )
}

export const useStateContext = () => useContext(Context);