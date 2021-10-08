import React, { Component } from 'react';
import {Navbar,Container,Nav} from 'react-bootstrap'

import {
BrowserRouter,
Switch,
Link,
Route
} from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Footer from "./Footer";
export default class NavBarComp extends Component {
    render() {
        return (
            <BrowserRouter>
            <div>

            {/**this is the NavBar */}

            <Navbar collapseOnSelect expand="lg" bg="black" variant="dark">
      <Container>
      <Navbar.Brand><h2>RM</h2></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link as={Link} to={"/home"}>Home</Nav.Link>
          <Nav.Link as={Link} to={"/about"}>About</Nav.Link>
          <Nav.Link as={Link} to={"/contact"}>Contact</Nav.Link>
          
        </Nav>
        <Nav>
        <Nav.Link></Nav.Link>
          <Nav.Link >
            
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>
              </div>


      {/**this is the Router */}

              <div>
              <Switch>
            
            
                  <Route path="/about">
                <About />
                  </Route>

                  <Route path="/contact">
                  <Contact />
                  </Route>

                  <Route path="/">
                  <Home />
                  </Route>
              </Switch>
              <Footer />
              </div>
              
              </BrowserRouter>
            
          );
        }
    }


