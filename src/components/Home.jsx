import React from 'react';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import { BsDownload } from 'react-icons/bs';
import { BiChevronsRight } from 'react-icons/bi';
import { FiExternalLink } from 'react-icons/fi';

function Home() {
  return (
    <>
      <Jumbotron className="mb-0" style={{ backgroundColor: '#282c34', color: 'lightgrey', borderRadius: 0 }}>
        <Container>
          <Row>
            <Col>
              <div className="float-left col-6 col-md-3 pl-0 pr-3">
                <Image className="w-100" src="profile-pic.jpg" rounded />
              </div>
              <h5>About Me</h5>
              {/* eslint-disable-next-line max-len */}
              <p>Hello! My name is Evalyn Berleant. I am a recent graduate from Brandeis University with a B.S. in Computer Science and minor in Mathematics. I have experience in Ruby on Rails, Java, JavaScript, React.js, Vue.js, Python, SQL, and Bash. In Summer 2020, I interned at Galatea Associates, where I used the Java Spring Boot framework, React.js, and Lombok to write several API endpoints for various applications. In Fall 2020, I was a member of a robotics-centered independent study, where I developed a live-updating web interface using Vue.js and Python. I have also worked as a TA for Advanced Programming Techniques and Operating Systems, and I interned for CQ Consulting as a contractor for the Arkansas Department of Health in Summers 2018 and 2019. Above all, I&apos;m always excited to learn something new!</p>
              <Button href="https://docs.google.com/uc?id=14vIpSHMwW7P7VY_oF7SbdWgbxLmJZ1SI&export=download" variant="outline-light">
                <BsDownload className="mr-2" />
                Resume
              </Button>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
      <Jumbotron className="py-3">
        <Container>
          <h4>
            <BiChevronsRight className="mt-n1" />
            Projects
          </h4>
          <hr />
          <Row>
            <Col>
              <div className="float-right col-6 col-md-3 pl-0 pr-3">
                <Image className="w-100" src="youtaite-network.gif" rounded />
              </div>
              <h5>
                <a className="mr-2" href="https://youtaite-network.netlify.app">Youtaite Network</a>
                <img className="mr-2 mt-n1" src="https://img.shields.io/badge/react-%5E17.0.1-informational" alt="React ^17.0.1" />
                <img className="mr-2 mt-n1" src="https://img.shields.io/badge/ruby-2.7.1-informational" alt="React ^17.0.1" />
                <img className="mr-2 mt-n1" src="https://img.shields.io/badge/rails-~%3E%206.0.3-blue" alt="React ^17.0.1" />
                <img className="mr-2 mt-n1" src="https://img.shields.io/github/last-commit/eberleant/youtaite-network-client" alt="React ^17.0.1" />
              </h5>
              {/* eslint-disable-next-line max-len, react/jsx-one-expression-per-line */}
              <p>This is a personal project focused on a community of Youtube content creators who often collaborate with each other. I wanted to show how different collaborations are connected to each other through people - for example, if I am in two different collabs, those two collabs are connected through me. I hope to show the existence of different corners within the community, where groups of people collaborate with each other more often than with someone outside of their corner. I have a other ideas for creatively displaying the data (once I have enough of it), such as identifying closely-related clusters and &quot;representative&quot; collaborations of those clusters. The frontend website is written in React. The data visualization is created using d3. The backend API is written in Ruby on Rails. If you feel like checking out the backend API, the main routes are <a href="https://youtaite-network-api.herokuapp.com/people">/people</a>, <a href="https://youtaite-network-api.herokuapp.com/collabs">/collabs</a>, and <a href="https://youtaite-network-api.herokuapp.com/roles">/roles</a>.</p>
              <Button href="https://youtaite-network.netlify.app" variant="outline-primary">
                Check it out
                <FiExternalLink className="ml-2 mt-n1" />
              </Button>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    </>
  );
}

export default Home;
