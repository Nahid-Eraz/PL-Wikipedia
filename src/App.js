import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Nav, Navbar, Card, Container } from 'react-bootstrap';
import Home from './Component/Home/Home';
import ClubDetails from './ClubDetails/ClubDetails';


function App() {
  return (
    <Router>
      <div>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Navbar>
        <h1 className="front-img">Hyper Sports</h1>

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
        </Switch>
      </div>
    </Router>
  );
}

export default App;
