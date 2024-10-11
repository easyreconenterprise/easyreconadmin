import { createContext, useContext, useState } from "react";

const RuleContext = createContext();

export const RuleProvider = ({ children }) => {
  const [rules, setRules] = useState({
    exactMatch: false,
    probableMatch: false,
    similarDetails: false,
    manyToMany: false,
    userDefined: false,
  });

  const isRuleSet = () => {
    return (
      rules.exactMatch ||
      rules.probableMatch ||
      rules.similarDetails ||
      rules.manyToMany ||
      rules.userDefined
    );
  };

  return (
    <RuleContext.Provider value={{ rules, setRules, isRuleSet }}>
      {children}
    </RuleContext.Provider>
  );
};

export const useRule = () => useContext(RuleContext);
