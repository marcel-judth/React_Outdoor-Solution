//components and pages
import Nav from './components/Nav';
import Home from './pages/Home';
import Projects from './pages/Projects';

//styles
import GlobalStyles from './styles/GlobalStyles';

//Router
import { Switch, Route, useLocation } from 'react-router-dom';
import AboutUs from './pages/AboutUs';
import Products from './pages/Products';

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <GlobalStyles />
      <Nav />
      <Switch location={location} key={location.pathname}>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/aboutus" exact>
          <AboutUs />
        </Route>
        <Route path="/products" exact>
          <Products />
        </Route>
        <Route path="/projects" exact>
          <Projects />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
