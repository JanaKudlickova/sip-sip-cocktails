import { Link } from 'react-router-dom';
const Cocktail = ({id, name, image, info, category}) => {
  return(
      <article className="cocktail">
          <div>
              <img src={image} alt={name} />
          </div>
          <div className="cocktail-info">
              <h3>{name}</h3>
              <h4>{category}</h4>
              <p>{info}</p>
              <Link to={`/cocktail/${id}`} className="btn-details"> SEE DETAILS</Link>
          </div>
      </article>
  );
};

export default Cocktail;
