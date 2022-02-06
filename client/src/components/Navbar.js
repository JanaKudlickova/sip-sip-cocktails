import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
  <nav className="navbar">
      <div className="nav-container">
          <Link to="/">
              <h2 className="logo">SIP SIP</h2>
          </Link>
          <ul className="nav-links">
              <li>
                  <Link to="/">
                      Home
                  </Link>
              </li>
              <li>
                  <Link to="/favourites">
                      Favourites
                  </Link>
              </li>
          </ul>
      </div>

  </nav>
  )
};

export default Navbar;
