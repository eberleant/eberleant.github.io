import React from 'react';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import { BiChevronsRight } from 'react-icons/bi';
import InfoBox from './InfoBox';
import projectsData from '../data/ProjectsData';
import aboutData from '../data/AboutData';

function Home() {
  return (
    <>
      <Jumbotron className="mb-0" style={{ backgroundColor: '#282c34', color: 'lightgrey', borderRadius: 0 }}>
        <Container>
          <InfoBox data={aboutData} mode="list left" />
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
            <InfoBox data={projectData} />
          ))}
        </Container>
      </Jumbotron>
    </>
  );
}

export default Home;
