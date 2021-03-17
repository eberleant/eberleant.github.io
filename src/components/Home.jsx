import React from 'react';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import { BiChevronsRight } from 'react-icons/bi';
import SkillBox from './SkillBox';
import InfoBox from './InfoBox';
import aboutData from '../data/AboutData';
import skillsData from '../data/SkillsData';
import projectsData from '../data/ProjectsData';

function Home() {
  return (
    <>
      <Jumbotron className="mb-0" style={{ backgroundColor: '#282c34', color: 'lightgrey', borderRadius: 0 }}>
        <Container>
          <InfoBox data={aboutData} mode="list left" />
        </Container>
      </Jumbotron>
      <Jumbotron className="mb-0">
        <Container>
          <h4>
            <BiChevronsRight className="mt-n1" />
            Skills
          </h4>
          <hr />
          <div style={{ position: 'relative' }}>
            <div className="mb-5 fade-x">
              <div className="scroll-x">
                {skillsData.map((skillData) => (
                  <SkillBox data={skillData} />
                ))}
              </div>
            </div>
          </div>
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
