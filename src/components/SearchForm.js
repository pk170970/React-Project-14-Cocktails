import React from "react";
import { useGlobaContext } from "../context";

const SearchForm = () => {
  const { searchState, setSearchState } = useGlobaContext();
  // console.log(searchState);
  return (
    <section className="section search">
      <form className="search-form" onSubmit={(e) => e.preventDefault()}>
        <div className="form-control">
          <label htmlFor="name">Search for a favourite Cocktail</label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={(e) => setSearchState(e.target.value)}
          />
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
