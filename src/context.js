import React, { useState, useContext, useEffect } from "react";
import { useCallback } from "react";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  // const loading = true;-> possible
  const [loading, setLoading] = useState(true);
  const [searchterm, setSearchterm] = useState("a");
  const [cocktails, setCocktails] = useState([]);
  const fetchDrinks = useCallback(async () => {
    setLoading(true);
    try {
      // Fetching of url
      const resp = await fetch(`${url}${searchterm}`);
      const data = await resp.json();
      // console.log(data);
      //destructure data
      const { drinks } = data;
      if (drinks) {
        const newDrink = drinks.map((drink) => {
          const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } =
            drink; //destructure
          return {
            id: idDrink,
            name: strDrink,
            image: strDrinkThumb,
            info: strAlcoholic,
            glass: strGlass,
          };
        });
        setCocktails(newDrink);
      } else {
        setLoading(false);
        setCocktails([]); //if drinks is null
      }
      setLoading(false); //safety
    } catch (e) {
      console.log(e);
    }
  },[searchterm]);
  useEffect(() => {
    /* Search for each Letter */
    fetchDrinks();
  }, [searchterm,fetchDrinks]);
  return (
    <AppContext.Provider value={{ loading, cocktails, setSearchterm }}>
      {children}
    </AppContext.Provider>
  );
};
// make sure use
const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
