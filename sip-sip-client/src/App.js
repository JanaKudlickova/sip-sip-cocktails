import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import CocktailInfo from './pages/CocktailInfo';
import Favourites from './pages/Favourites';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/favourites">
          <Favourites />
        </Route>
        <Route path="/cocktail/:id">
          <CocktailInfo />
        </Route>
      </Switch>
    </>
  );
}

export default App;
