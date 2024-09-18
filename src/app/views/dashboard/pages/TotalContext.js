import React, { createContext, useContext, useState, useEffect } from "react";

const TotalContext = createContext();

export const TotalProvider = ({ children }) => {
  const [total10, setTotal10] = useState(0);
  const [total11, setTotal11] = useState(0);
  const [total1, setTotal1] = useState(0);
  const [total15, setTotal15] = useState(0);
  const [total22, setTotal22] = useState(0);
  const [total32, setTotal32] = useState(0);
  const [total3, setTotal3] = useState(0);
  const [total12, setTotal12] = useState(0);
  const [incomeSum, setIncomeSum] = useState(0); // Initialize incomeSum with the default value

  useEffect(() => {
    // Fetch or calculate your incomeSum and set it
    // For example, fetch it from an API or calculate it
    const calculatedIncomeSum =
      /* your logic here */
      setIncomeSum(calculatedIncomeSum);
  }, []);

  return (
    <TotalContext.Provider
      value={{
        total10,
        setTotal10,
        total11,
        setTotal11,
        total1,
        setTotal1,
        total15,
        setTotal15,
        total22,
        setTotal22,
        total32,
        setTotal32,
        total3,
        setTotal3,
        total12,
        setTotal12,
        incomeSum,
      }}
    >
      {children}
    </TotalContext.Provider>
  );
};

export const useTotal = () => {
  const context = useContext(TotalContext);
  if (!context) {
    throw new Error("useTotal must be used within a TotalProvider");
  }
  return context;
};
