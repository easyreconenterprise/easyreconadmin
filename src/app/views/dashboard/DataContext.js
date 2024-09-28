import React, { createContext, useState, useContext } from "react";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [ledgerData, setLedgerData] = useState([]);
  const [statementData, setStatementData] = useState([]);

  return (
    <DataContext.Provider
      value={{ ledgerData, setLedgerData, statementData, setStatementData }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
