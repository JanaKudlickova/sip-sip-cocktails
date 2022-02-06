import axios from 'axios';
import Loading from '../components/Loading';
import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const CocktailInfo = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [cocktail, setCocktail] = useState(null);

  //const baseUrl = `http://localhost:8000/drinks/${id}`
  const baseUrl = `/drinks/${id}`

  const deleteDrink = (props, id) => {
    axios.delete(baseUrl)
    .then(() => props.setAllDrinks(props.allDrinks.filter(drink => drink.id !== id)))
    .catch((err) => console.log(err))
  }

  useEffect(() => {
    setLoading(true);
    async function getCocktail(){
      try {
        const response = await fetch(baseUrl);
        const data = await response.json();
        if (data) {
          const {name, url, type, category, glass, instructions, ingredient1, ingredient2, ingredient3, ingredient4, ingredient5, ingredient6, ingredient7} = data;
          const ingredients = [
            ingredient1, ingredient2, ingredient3, ingredient4, ingredient5, ingredient6, ingredient7];
          const newCocktail = {
            name, url, type, category, glass, instructions, ingredients
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
  }, [id, baseUrl]);
  if (loading) {
    return <Loading />
  }
  if (!cocktail) {
    return <h2 className="section-title">No cocktail to display.</h2>
  }
  const {name, url, category, type, glass, instructions, ingredients} = cocktail;
  return (
    <section className="cocktail-section">
      <h2 className="section-title">{name}</h2>
      <div className="drink-wrapper">
        <img className="drink-image" src={url} alt={name} />
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
            <span className="drink-label">Type:</span>
            {type}
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
          <div className="btn-wrapper">
            <Link to="/" className="btn-back-home">
              GO BACK
            </Link>
            <button type="submit" className="delete-btn btn-back-home" onClick={deleteDrink}>DELETE</button>
          </div>
        </div>
      </div>
    </section>
    );
};

export default CocktailInfo;

