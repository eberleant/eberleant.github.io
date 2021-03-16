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
import { AiFillGithub, AiOutlineInfoCircle } from 'react-icons/ai';

function Home() {
  return (
    <>
      <Jumbotron className="mb-0" style={{ backgroundColor: '#282c34', color: 'lightgrey', borderRadius: 0 }}>
        <Container>
          <Row>
            <Col>
              <div className="float-left col-6 col-md-3 pr-3">
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
      <Jumbotron>
        <Container>
          <h4>
            <BiChevronsRight className="mt-n1" />
            Projects
          </h4>
          <hr />
          <Row className="mb-5">
            <Col>
              <div className="float-right col-6 col-md-3 pl-3">
                <Image className="w-100" src="youtaite-network.gif" rounded />
              </div>
              <h5>
                <a className="mr-2" href="https://youtaite-network.netlify.app">Youtaite Network</a>
                <img className="mr-2 mt-n1" src="https://img.shields.io/badge/react-%5E17.0.1-informational" alt="React ^17.0.1" />
                <img className="mr-2 mt-n1" src="https://img.shields.io/badge/ruby-2.7.1-informational" alt="Ruby 2.7.1" />
                <img className="mr-2 mt-n1" src="https://img.shields.io/badge/rails-~%3E%206.0.3-blue" alt="Rails ~> 6.0.3" />
                <img className="mr-2 mt-n1" src="https://img.shields.io/github/last-commit/eberleant/youtaite-network-client" alt="Last commit" />
              </h5>
              {/* eslint-disable-next-line max-len, react/jsx-one-expression-per-line */}
              <p>This is a personal project focused on a community of Youtube content creators who often collaborate with each other. I wanted to show how different collaborations are connected to each other through people - for example, if I am in two different collabs, those two collabs are connected through me. I hope to show the existence of different corners within the community, where groups of people collaborate with each other more often than with someone outside of their corner. I have a other ideas for creatively displaying the data (once I have enough of it), such as identifying closely-related clusters and &quot;representative&quot; collaborations of those clusters. The frontend website is written in React. The data visualization is created using d3. The backend API is written in Ruby on Rails. If you feel like checking out the backend API, the main routes are <a href="https://youtaite-network-api.herokuapp.com/people">/people</a>, <a href="https://youtaite-network-api.herokuapp.com/collabs">/collabs</a>, and <a href="https://youtaite-network-api.herokuapp.com/roles">/roles</a>.</p>
              <Button className="mr-2" href="https://youtaite-network.netlify.app" variant="outline-primary">
                Check it out
                <FiExternalLink className="ml-2 mt-n1" />
              </Button>
              <Button href="https://github.com/eberleant/youtaite-network-client" variant="outline-secondary">
                GitHub repo
                <AiFillGithub className="ml-2 mt-n1" />
              </Button>
            </Col>
          </Row>
          <Row className="mb-5">
            <Col>
              <div className="float-right col-6 col-md-3 pl-3">
                <Image className="w-100" src="cerbaris.gif" rounded />
              </div>
              <h5>
                <a className="mr-2" href="https://campusrover.github.io/PupperPy/web_interface.html">CERBARIS: real-time web interface</a>
                <img className="mr-2 mt-n1" src="https://img.shields.io/badge/vue-%5E2.6.11-informational" alt="Vue ^2.6.11" />
                <img className="mr-2 mt-n1" src="https://img.shields.io/badge/python-3.9.0-informational" alt="Python 3.9.0" />
                <img className="mr-2 mt-n1" src="https://img.shields.io/github/last-commit/campusrover/PupperPy" alt="Last commit" />
              </h5>
              {/* eslint-disable-next-line max-len, react/jsx-one-expression-per-line */}
              <p>Under Prof. Pito Salas&apos;s mentorship, I worked with Roshan Nanu, Ben Ballintyn, and Chris Tam in a robotics-centered independent study. The project involved building and customizing a Stanford Pupper robot. As part of this, I developed a web interface that displays data in real-time about the robot’s state, including sensor data, computer vision data, and current behavior. I used Vue.js, combined with paper.js, JointJS, and BootstrapVue, for the frontend of the web interface. When the robot is running, its control script (written in Python) pushes data to the web interface, which then updates its display. The website can be found at <a href="https://cerbaris.netlify.app">cerbaris.netlify.app</a>, but without the robot running, no data is being received or updated. A detailed technical description of the site can also be found on the <a href="https://campusrover.github.io/PupperPy/web_interface.html">web interface section of our final project report</a>.</p>
              <Button className="mr-2" href="https://campusrover.github.io/PupperPy/web_interface.html" variant="outline-primary">
                Learn more
                <AiOutlineInfoCircle className="ml-2 mt-n1" />
              </Button>
              <Button href="https://github.com/campusrover/PupperPy" variant="outline-secondary">
                GitHub repo
                <AiFillGithub className="ml-2 mt-n1" />
              </Button>
            </Col>
          </Row>
          <Row className="mb-5">
            <Col>
              <div className="float-right col-6 col-md-3 pl-3">
                <Image className="w-100" src="swarmbots.gif" rounded />
              </div>
              <h5>
                <a className="mr-2" href="https://campusrover.github.io/swarmbots">SWARMBOTS</a>
                <img className="mr-2 mt-n1" src="https://img.shields.io/badge/ros-melodic-informational" alt="ROS melodic" />
                <img className="mr-2 mt-n1" src="https://img.shields.io/badge/gazebo-9.0.0-informational" alt="Gazebo 9.0.0" />
                <img className="mr-2 mt-n1" src="https://img.shields.io/badge/python-2.7.11-informational" alt="Python 2.7.11" />
                <img className="mr-2 mt-n1" src="https://img.shields.io/github/last-commit/campusrover/swarmbots" alt="Last commit" />
              </h5>
              {/* eslint-disable-next-line max-len, react/jsx-one-expression-per-line */}
              <p>I worked with Kelly Duan to create SWARMBOTS, a ROS and Gazebo program which allows multiple robots in a swarm to collaboratively map their environment. At any time, there is a single leader (the <em>swarmboss</em>) whose movement dictates the behavior of the other robots in the swarm, who may follow or disperse from the leader. If the swarmboss becomes unavailable or stuck for any reason, a different robot will automatically be assigned as the new swarmboss. Through the command-line, you can specify the mode (follow or disperse), as well as the number of robots to spawn. 🤖🦠</p>
              <Button className="mr-2" href="https://campusrover.github.io/swarmbots" variant="outline-primary">
                Learn more
                <AiOutlineInfoCircle className="ml-2 mt-n1" />
              </Button>
              <Button href="https://github.com/campusrover/swarmbots" variant="outline-secondary">
                GitHub repo
                <AiFillGithub className="ml-2 mt-n1" />
              </Button>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    </>
  );
}

export default Home;
