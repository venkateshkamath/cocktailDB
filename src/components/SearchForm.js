import React from "react";
import { useGlobalContext } from "../context";

const SearchForm = () => {
  const { setSearchterm } = useGlobalContext();
  const searchCocktail = () => {
    setSearchterm(searchValue.current.value);
  };
  //useEffect for focus on element
  React.useEffect(() => {
    searchValue.current.focus();
  }, []);
  // We use uncontrolled, input managing
  const searchValue = React.useRef("");

  return (
    <section onSubmit={(e) => e.preventDefault()} className="section search">
      <form className="search-form">
        <div className="form-control">
          <label htmlFor="name">Search your favourite cocktail</label>
          <input
            autoComplete="off"
            type="text"
            id="name"
            ref={searchValue}
            // on change we invoke
            onChange={searchCocktail}
          />
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
