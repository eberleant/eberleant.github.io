import React from 'react';
import { ImFilePdf } from 'react-icons/im';

const aboutData = {
  title: {
    text: 'About Me',
  },
  badges: [
    {
      src: 'https://img.shields.io/badge/graduated-dec%202020-blueviolet',
      alt: 'Graduated Dec 2020',
    },
    {
      src: 'https://img.shields.io/badge/gpa-3.92-red',
      alt: 'GPA 3.92',
    },
    {
      src: 'https://img.shields.io/badge/magna%20cum%20laude-orange',
      alt: 'magna cum laude',
    },
    {
      src: 'https://img.shields.io/badge/loves%20to%20learn-ff69b4',
      alt: 'Loves to learn',
    },
  ],
  image: 'profile-pic.jpg',
  // eslint-disable-next-line max-len, react/jsx-one-expression-per-line
  description: <p>Hello! My name is Evalyn Berleant. I am a recent graduate from Brandeis University with a B.S. in Computer Science and minor in Mathematics. I have experience in Ruby on Rails, Java, JavaScript, React.js, Vue.js, Python, SQL, and Bash. In Summer 2020, I interned at Galatea Associates, where I used the Java Spring Boot framework, React.js, and Lombok to write several API endpoints for various applications. In Fall 2020, I was a member of a robotics-centered independent study, where I developed a live-updating web interface using Vue.js and Python. I have also worked as a TA for Advanced Programming Techniques and Operating Systems, and I interned for CQ Consulting as a contractor for the Arkansas Department of Health in Summers 2018 and 2019. Above all, I&apos;m always excited to learn something new!</p>,
  buttons: [
    {
      text: 'Resume',
      icon: <ImFilePdf />,
      href: 'https://drive.google.com/file/d/14vIpSHMwW7P7VY_oF7SbdWgbxLmJZ1SI',
      variant: 'outline-light',
    },
  ],
};

export default aboutData;
