//components and pages
import Nav from './components/Nav';
import Home from './pages/Home';

//styles
import GlobalStyles from './styles/GlobalStyles';

//Router
import { Switch, Route, useLocation } from 'react-router-dom';
import AboutUs from './pages/AboutUs';

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
      </Switch>
    </div>
  );
}

export default App;
