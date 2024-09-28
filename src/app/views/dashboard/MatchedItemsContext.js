import { createContext, useState, useContext } from "react";

// Create the context
const MatchedItemsContext = createContext();

// Provide context to your app
export const MatchedItemsProvider = ({ children }) => {
  const [matchedItems, setMatchedItems] = useState([]);

  return (
    <MatchedItemsContext.Provider value={{ matchedItems, setMatchedItems }}>
      {children}
    </MatchedItemsContext.Provider>
  );
};

// Custom hook for easy access to the context
export const useMatchedItems = () => useContext(MatchedItemsContext);
