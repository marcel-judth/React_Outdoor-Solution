//components and pages
import Nav from './components/Nav';
import Home from './pages/Home';

//styles
import GlobalStyles from './styles/GlobalStyles';

//Router
import { Switch, Route, useLocation } from 'react-router-dom';

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
      </Switch>
    </div>
  );
}

export default App;
