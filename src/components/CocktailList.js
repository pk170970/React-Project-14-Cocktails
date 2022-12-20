import React from "react";
import { NavLink } from "react-router-dom";
import { useGlobaContext } from "../context";
import Loading from "./Loading";
import Cocktail from './Cocktail';

const CocktailList = () => {
  const { loading, cocktails } = useGlobaContext();
  // console.log(cocktails);
  if (loading) {
    return <Loading />;
  }
  if (cocktails.length < 1) {
    return (
      <h2 className="section-title">
        No Cocktails Matched Your Search Criteria
      </h2>
    );
  }

  return (
    <section className="section">
      <h2 className="section-title">CockTails</h2>
      <div className="cocktails-center">
        {cocktails.map((drink) => {
          return (
            <Cocktail drink={drink} key={drink.idDrink}/>
          );
        })}
      </div>
    </section>
  );
};

export default CocktailList;
