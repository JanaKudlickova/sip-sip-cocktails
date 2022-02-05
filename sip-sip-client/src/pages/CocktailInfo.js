import Loading from '../components/Loading';
import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i="

const CocktailInfo = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [cocktail, setCocktail] = useState(null);

  useEffect(() => {
    setLoading(true);
    async function getCocktail(){
      try {
        const response = await fetch(`${url}${id}`);
        const data = await response.json();
        if (data.drinks) {
          const {strDrink: name, strDrinkThumb: image, strAlcoholic: info, strCategory: category, strGlass: glass, strInstructions: instructions, strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5, strIngredient6, strIngredient7} = data.drinks[0];
          const ingredients = [
            strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5, strIngredient6, strIngredient7
          ];
          const newCocktail = {
            name, image, info, category, glass, instructions, ingredients
          };
          setCocktail(newCocktail);
        } else {
          setCocktail(null);
        }
        setLoading(false);
      }
      catch (error) {
        console.log(error);
        setLoading(false);
      }
      
    }
    getCocktail();
  }, [id]);
  if (loading) {
    return <Loading />
  }
  if (!cocktail) {
    return <h2 className="section-title">No cocktail to display.</h2>
  }
  const {name, image, category, info, glass, instructions, ingredients} = cocktail;
  return (
    <section className="cocktail-section">
      <h2 className="section-title">{name}</h2>
      <div className="drink-wrapper">
        <img className="drink-image" src={image} alt={name} />
        <div className="drink-info">
          <p>
            <span className="drink-label">Name:</span>
            {name}
          </p>
          <p>
            <span className="drink-label">Category:</span>
            {category}
          </p>
          <p>
            <span className="drink-label">Info:</span>
            {info}
          </p>
          <p>
            <span className="drink-label">Glass:</span>
            {glass}
          </p>
          <p>
            <span className="drink-label">Instructions:</span>
            {instructions}
          </p>
          <p>
            <span className="drink-label">Ingredients:</span>
            {ingredients.map((item, index) => {
              return item ? <span key={index}>{item}</span> : null 
            })}
          </p>
          <Link to="/" className="btn-back-home">
            GO BACK
          </Link>
        </div>
      </div>
    </section>
    );
};

export default CocktailInfo;
