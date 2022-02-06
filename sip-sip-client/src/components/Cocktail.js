import { Link } from 'react-router-dom';
const Cocktail = ({id, name, url, type, category}) => {    
  return(
      <article className="cocktail">
          <div>
              <img src={url} alt={name} />
          </div>
          <div className="cocktail-info">
              <h3>{name}</h3>
              <h4>{category}</h4>
              <p>{type}</p>
              <Link to={`/cocktail/${id}`} className="btn-details"> SEE DETAILS</Link>
          </div>
      </article>
  );
};

export default Cocktail;

