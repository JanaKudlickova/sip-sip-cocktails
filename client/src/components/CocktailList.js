import axios from 'axios';
import { useState, useEffect } from 'react';
import Cocktail from './Cocktail';
import NewCocktail from './NewCocktail';


const CocktailList = () => {
    const [allDrinks, setAllDrinks] = useState([]);
    const [refetchFlag, setRefetchFlag] = useState(false);
    const [newCocktailData, setNewCocktailData] = useState({
        name: "",
        category: "",
        type: "",
        glass: "",
        instructions: "",
        url: "",
        ingredient1: "",
        ingredient2: "",
        ingredient3: "",
        ingredient4: "",
        ingredient5: "",
        ingredient6: "",
        ingredient7: "",
      });
    
      useEffect(() => {
          axios
              //.get("http://localhost:8000/drinks")
              .get("/drinks")
              .then(response => setAllDrinks(response.data))
              .catch(error => console.log(error))
      }, [refetchFlag])

      //const base_url = "http://localhost:8000/drinks";
      const base_url = "/drinks";


      const addNewCocktail = async (e) => {
        e.preventDefault();
        await axios.post(base_url, {
          name: newCocktailData.name,
          category: newCocktailData.category,
          type: newCocktailData.type,
          glass: newCocktailData.glass,
          instructions: newCocktailData.instructions,
          url: newCocktailData.url,
          ingredient1: newCocktailData.ingredient1,
          ingredient2: newCocktailData.ingredient2,
          ingredient3: newCocktailData.ingredient3,
          ingredient4: newCocktailData.ingredient4,
          ingredient5: newCocktailData.ingredient5,
          ingredient6: newCocktailData.ingredient6,
          ingredient7: newCocktailData.ingredient7,
        })
        setNewCocktailData({});
        setRefetchFlag(!refetchFlag);
      }
    
    return (
        <section className= "section" >
            <h2 className="section-title">My Cocktails</h2>
            <div className = "cocktails-container">
                {
                allDrinks.map((item) => {
                    return <Cocktail key={ item.id } {...item} />
                })}
            </div>
            <div>
                <h2 className="form-title">ADD NEW COCKTAIL</h2>
                <NewCocktail
                    newCocktailData={newCocktailData}
                    setNewCocktailData={setNewCocktailData}
                    addNewCocktail={addNewCocktail}
                />
            </div>
        </section>
        
  )
};

export default CocktailList;
