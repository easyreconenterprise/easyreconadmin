// SubcategoryContext.js

import React, { createContext, useContext, useState } from "react";

const SubcategoryContext = createContext();

export const SubcategoryProvider = ({ children }) => {
  const [subcategory, setSubcategory] = useState({
    Asset: {
      "Non-current": {
        "Property plant and equipment": [],
        "Deferred tax assets": [],
        Investment: [],
        "Other receivables": [],
        "Intangible assets and good will": [],
        "Biological assets": [],
        "Investment property": [],
      },
      Current: {
        Inventories: [],
        "Trade and other receivables": [],
        "prepayment and advances": [],
        "Cash and cash equivalent": [],
      },
    },
    "Equity and Liability": {
      "Non-current-Liability": {
        "Deferred Income": [],
        Provision: [],
        "Deferred tax liability": [],
        "Trade and other payables": [],
        "Loans and borrowings": [],
      },
      "Current-liability": {
        "Bank Overdraft": [],
        "Current tax liabilities": [],
        "Deferred Incomes": [],
        "Loans and borrowing": [],
        "Trade and other payable": [],
      },
      Equity: {
        "Capital and reserves": [],
        "Share capital": [],
        "Retained earnings": [],
        Reserves: [],
        "Share Premium": [],
      },
    },
    Income: {
      Revenue: [],
      "Cost of sales": [],
      "Other income": [],
      "Administrative and selling expenses": [],
      "Impairment loss on trade receivables": [],
      "Finance income": [],
      "Finance cost": [],
      "Minimum tax expense": [],
      Taxation: [],
      "Loss from discontinued operations": [],
    },
  });

  return (
    <SubcategoryContext.Provider value={{ subcategory, setSubcategory }}>
      {children}
    </SubcategoryContext.Provider>
  );
};

export const useSubcategory = () => {
  const context = useContext(SubcategoryContext);
  if (!context) {
    throw new Error("useSubcategory must be used within a SubcategoryProvider");
  }
  return context;
};
