import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { AiFillGithub, AiFillLinkedin, AiFillFacebook } from 'react-icons/ai';
import { IoMdMail } from 'react-icons/io';
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
    <Router>
      <div>
        <Navbar bg="dark" variant="dark" expand="sm">
          <Container>
            <Navbar.Brand href="/">Evalyn Berleant</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className="justify-content-end">
              <Nav>
                <div className="d-flex flex-row">
                  <Nav.Link className="pr-2" href="mailto:eberleant@gmail.com" aria-label="Email link">
                    <IoMdMail size="1.5rem" />
                  </Nav.Link>
                  <Nav.Link className="pr-2" href="https://github.com/eberleant" aria-label="Github link">
                    <AiFillGithub size="1.5rem" />
                  </Nav.Link>
                  <Nav.Link className="pr-2" href="https://www.linkedin.com/in/eberleant" aria-label="Linkedin link">
                    <AiFillLinkedin size="1.5rem" />
                  </Nav.Link>
                  <Nav.Link className="pr-2" href="https://www.facebook.com/evalyn.berleant" aria-label="Facebook link">
                    <AiFillFacebook size="1.5rem" />
                  </Nav.Link>
                </div>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>

        {/* footer */}
        <Navbar bg="dark" variant="dark" className="flex-column">
          <Nav className="mr-auto ml-auto">
            <Nav.Link href="mailto:eberleant@gmail.com">Like what you see? Let&apos;s work together.</Nav.Link>
          </Nav>
          <Nav className="mr-auto ml-auto">
            <Nav.Link href="mailto:eberleant@gmail.com" aria-label="Email link">
              <IoMdMail size="1.5rem" />
            </Nav.Link>
            <Nav.Link href="https://github.com/eberleant" aria-label="Github link">
              <AiFillGithub size="1.5rem" />
            </Nav.Link>
            <Nav.Link href="https://www.linkedin.com/in/eberleant" aria-label="Linkedin link">
              <AiFillLinkedin size="1.5rem" />
            </Nav.Link>
            <Nav.Link href="https://www.facebook.com/evalyn.berleant" aria-label="Facebook link">
              <AiFillFacebook size="1.5rem" />
            </Nav.Link>
          </Nav>
        </Navbar>
      </div>
    </Router>
  );
}
