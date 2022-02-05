import { useGlobalContext } from "../context";
import Loading from './Loading';
import Cocktail from './Cocktail';

const CocktailList = () => {
  const { cocktails, loading } = useGlobalContext();
  if (loading) {
    return <Loading />
  }
  if (cocktails.length < 1) {
    return (
      <h2>No cocktails found.</h2>
    )
  }
  return (
    <section className="section">
      <h2 className="section-title">Cocktails</h2>
      <div className="cocktails-container">
        {cocktails.map((item) => {
          return <Cocktail key={item.id} {...item} />
        })}
      </div>
    </section>
  );
};

export default CocktailList;
