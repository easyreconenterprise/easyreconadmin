import React, { createContext, useContext, useState } from 'react';

const ProfitContext = createContext();

export const ProfitProvider = ({ children }) => {
  const [profitForTheYearValue, setProfitForTheYearValue] = useState(0);

  // ...

  // Update the context value using the setter
  const updateProfitForTheYearValue = (newValue) => {
    setProfitForTheYearValue(newValue);
  };

  return (
    <ProfitContext.Provider value={{ profitForTheYearValue, updateProfitForTheYearValue }}>
      {children}
    </ProfitContext.Provider>
  );
};

export const useProfitContext = () => {
  return useContext(ProfitContext);
};
