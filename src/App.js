//components and pages
import Nav from './components/Nav';
import Home from './pages/Home';
import Projects from './pages/Projects';
import CookiePopUp from './components/CookiePopUp';

//styles
import GlobalStyles from './styles/GlobalStyles';

//Router
import { Switch, Route, useLocation } from 'react-router-dom';
import AboutUs from './pages/AboutUs';
import Products from './pages/Products';
import Terms from './pages/Terms';

function App() {
  const location = useLocation();
  const displayConsent = !sessionStorage.getItem('jdc_consent');

  return (
    <div className="App">
      <GlobalStyles />
      {displayConsent && <CookiePopUp />}
      <Nav />
      <Switch location={location} key={location.pathname}>
        <Route path="/aboutus" exact>
          <AboutUs />
        </Route>
        <Route path="/products" exact>
          <Products />
        </Route>
        <Route path="/projects" exact>
          <Projects />
        </Route>
        <Route path="/terms">
          <Terms />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
