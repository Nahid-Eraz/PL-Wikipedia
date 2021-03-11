import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Nav, Navbar} from 'react-bootstrap';
import Home from './Component/Home/Home';
import ClubDetails from './ClubDetails/ClubDetails';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFutbol } from '@fortawesome/free-solid-svg-icons';
import NotFound from './NotFound/NotFound';


function App() {
  return (
    <Router>
      <div>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="/"><FontAwesomeIcon icon={faFutbol} /> Hyper Sports</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="#about">AboutUs</Nav.Link>
            <Nav.Link href="#news">News</Nav.Link>
          </Nav>
        </Navbar>

        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/club/:clubId">
            <ClubDetails />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
