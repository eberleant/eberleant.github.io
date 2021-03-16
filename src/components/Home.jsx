import React from 'react';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import { BsDownload } from 'react-icons/bs';
import { BiChevronsRight } from 'react-icons/bi';
import projectsData from '../data/ProjectsData';
import Project from './Project';

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
          {projectsData.map((projectData) => (
            <Project data={projectData} />
          ))}
        </Container>
      </Jumbotron>
    </>
  );
}

export default Home;
