import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import { BiChevronsRight } from 'react-icons/bi';
import { AiOutlineUnorderedList } from 'react-icons/ai';
import { BsGrid } from 'react-icons/bs';
import SkillBox from './SkillBox';
import InfoBox from './InfoBox';
import aboutData from '../data/AboutData';
import skillsData from '../data/SkillsData';
import projectsData from '../data/ProjectsData';

function Home() {
  const [mode, setMode] = useState('list right');

  const handleListMode = () => {
    setMode('list right');
  };

  const handleIconMode = () => {
    setMode('icon');
  };

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
              <div className="px-3 scroll-x">
                {skillsData.map((skillData) => (
                  <SkillBox key={skillData.title.text} data={skillData} />
                ))}
              </div>
            </div>
          </div>
          <h4>
            <BiChevronsRight className="mt-n1" />
            Projects
            <ToggleButtonGroup className="mt-n2 ml-3" type="radio" name="options" defaultValue="list">
              <ToggleButton variant="secondary" value="list" onClick={handleListMode}><AiOutlineUnorderedList /></ToggleButton>
              <ToggleButton variant="secondary" value="icon" onClick={handleIconMode}><BsGrid /></ToggleButton>
            </ToggleButtonGroup>
          </h4>
          <hr />
          <div className="d-flex flex-wrap">
            {projectsData.map((projectData) => (
              <InfoBox key={projectData.title.text} data={projectData} mode={mode} />
            ))}
          </div>
        </Container>
      </Jumbotron>
    </>
  );
}

export default Home;
