import React, { useState, useContext, useEffect } from "react";
import { useCallback } from "react";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const AppContext = React.createContext();

const AppProvider = ({ children }) =>{
  const [loading, setLoading] = useState(false);
  const [searchState, setSearchState] = useState("a");
  const [cocktails, setCocktails] = useState([]);

  const fetchCockTails = useCallback(async () => {
    try {
      setLoading(true);
      const response = await fetch(`${url}${searchState}`);
      const { drinks } = await response.json();
      if (drinks) {
        setCocktails(drinks);
        setLoading(false);
      } else {
        setCocktails([]);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  });

  useEffect(() => {
    fetchCockTails();
  }, [searchState]);

  return (
    <AppContext.Provider
      value={{
        loading,
        searchState,
        setSearchState,
        cocktails,
        setCocktails,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobaContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext };
