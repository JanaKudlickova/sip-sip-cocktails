const NewCocktail = (props) => {
    const inputHandler = (e) => {
        const newData={...props.newCocktailData}
        newData[e.target.id]=e.target.value
        props.setNewCocktailData(newData)
        console.log(newData)
      }

    return (
        <form className="new-cocktail-form" onSubmit={(e) => props.addNewCocktail(e)}>
            <input
                type="text"
                placeholder="Name"
                id="name"
                value={props.newCocktailData.name}
                onChange={(e) => inputHandler(e)}
                required
            />
            <input
                type="text"
                placeholder="Category"
                id="category"
                value={props.newCocktailData.category}
                onChange={(e) => inputHandler(e)}
            />
            <input
                type="text"
                placeholder="Type"
                id="type"
                value={props.newCocktailData.type}
                onChange={(e) => inputHandler(e)}
            />
            <input
                type="text"
                placeholder="Glass"
                id="glass"
                value={props.newCocktailData.glass}
                onChange={(e) => inputHandler(e)}
            />
            <input
                type="text"
                placeholder="Instructions"
                id="instructions"
                value={props.newCocktailData.instructions}
                onChange={(e) => inputHandler(e)}
            />
            <input
                type="text"
                placeholder="Url"
                id="url"
                value={props.newCocktailData.url}
                onChange={(e) => inputHandler(e)}
            />
             <input
                type="text"
                placeholder="Ingredient 1"
                id="ingredient1"
                value={props.newCocktailData.ingredient1}
                onChange={(e) => inputHandler(e)}
            />
             <input
                type="text"
                placeholder="Ingredient 2"
                id="ingredient2"
                value={props.newCocktailData.ingredient2}
                onChange={(e) => inputHandler(e)}
            />
              <input
                type="text"
                placeholder="Ingredient 3"
                id="ingredient3"
                value={props.newCocktailData.ingredient3}
                onChange={(e) => inputHandler(e)}
            />
              <input
                type="text"
                placeholder="Ingredient 4"
                id="ingredient4"
                value={props.newCocktailData.ingredient4}
                onChange={(e) => inputHandler(e)}
            />
             
            <button className="add-new-btn" type="submit" >ADD COCKTAIL</button>
        </form>
    )
}

export default NewCocktail;