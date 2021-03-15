import React from 'react';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Jumbotron from 'react-bootstrap/Jumbotron';

function Home() {
  return (
    <>
      <Jumbotron style={{ backgroundColor: '#282c34', color: 'lightgrey', borderRadius: 0 }}>
        <Container>
          <Row>
            <Col>
              <div className="float-left col-6 col-md-3 pl-0 pr-3">
                <Image className="w-100" src="profile-pic.jpg" rounded />
              </div>
              <Card.Body className="p-0">
                <Card.Title>About Me</Card.Title>
                {/* eslint-disable-next-line max-len */}
                <Card.Text>Hello! My name is Evalyn Berleant. I am a recent graduate from Brandeis University with a B.S. in Computer Science and minor in Mathematics. I have experience in Ruby on Rails, Java, JavaScript, React.js, Vue.js, Python, SQL, and Bash. In Summer 2020, I interned at Galatea Associates, where I used the Java Spring Boot framework, React.js, and Lombok to write several API endpoints for various applications. In Fall 2020, I was a member of a robotics-centered independent study, where I developed a live-updating web interface using Vue.js and Python. I have also worked as a TA for Advanced Programming Techniques and Operating Systems, and I interned for CQ Consulting as a contractor for the Arkansas Department of Health in Summers 2018 and 2019. Above all, I&apos;m always excited to learn something new!</Card.Text>
              </Card.Body>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    </>
  );
}

export default Home;
