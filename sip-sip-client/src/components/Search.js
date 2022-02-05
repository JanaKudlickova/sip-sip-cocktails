import { useGlobalContext } from "../context";
import { useRef } from 'react';

const Search = () => {
  const { setSearchTerm } = useGlobalContext();
  const searchValue = useRef("");

  const searchCocktail = () => {
    setSearchTerm(searchValue.current.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  
  return (
    <section className="search-container">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="form">
          <label className="label" htmlFor="name">Search Your Favourite Cocktail</label>
          <input className="input" type="text" id="name" ref={searchValue} onChange={searchCocktail} />
        </div>
      </form>
    </section>
  );
};

export default Search;
