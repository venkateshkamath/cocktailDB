import React from "react";
import Cocktail from "./Cocktail";
import Loading from "./Loading";
import { useGlobalContext } from "../context";

const CocktailList = () => {
  const { cocktails, loading } = useGlobalContext();

  if (loading) {
    return <Loading />;
  }
  if (cocktails.length === 0) {
    return <h2 className="section-title">Your Search does not match our  db!!</h2>;
  }
  return (
    <section className="section">
      <h2 className="section-title">cocktails</h2>
      <div className="cocktails-center">
        {/* No of times map through ctail with id and spread the drink */}
        {cocktails.map((drink) => (
          <Cocktail key={drink.id} drink={drink} />
        ))}
      </div>
    </section>
  );
};

export default CocktailList;
