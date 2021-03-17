import React from 'react';
import { FiExternalLink } from 'react-icons/fi';
import { AiFillGithub, AiOutlineInfoCircle } from 'react-icons/ai';

const projectsData = [
  {
    title: {
      text: 'Youtaite Network',
      href: 'https://youtaite-network.netlify.app',
    },
    badges: [
      {
        src: 'https://img.shields.io/badge/react-%5E17.0.1-informational',
        alt: 'React ^17.0.1',
      },
      {
        src: 'https://img.shields.io/badge/d3.js-6.6.0-informational',
        alt: 'D3.js 6.6.0',
      },
      {
        src: 'https://img.shields.io/badge/ruby-2.7.1-informational',
        alt: 'Ruby 2.7.1',
      },
      {
        src: 'https://img.shields.io/badge/rails-~%3E%206.0.3-blue',
        alt: 'Rails ~> 6.0.3',
      },
      {
        src: 'https://img.shields.io/github/last-commit/eberleant/youtaite-network-client',
        alt: 'Last commit',
      },
    ],
    image: 'youtaite-network.gif',
    // eslint-disable-next-line max-len, react/jsx-one-expression-per-line
    description: <p>This is a personal project focused on a community of Youtube content creators who often collaborate with each other. I wanted to show how different collaborations are connected to each other through people - for example, if I am in two different collabs, those two collabs are connected through me. I hope to show the existence of different corners within the community, where groups of people collaborate with each other more often than with someone outside of their corner. I have a other ideas for creatively displaying the data (once I have enough of it), such as identifying closely-related clusters and &quot;representative&quot; collaborations of those clusters. The frontend website is written in React. The data visualization is created using d3. The backend API is written in Ruby on Rails. If you feel like checking out the backend API, the main routes are <a href="https://youtaite-network-api.herokuapp.com/people">/people</a>, <a href="https://youtaite-network-api.herokuapp.com/collabs">/collabs</a>, and <a href="https://youtaite-network-api.herokuapp.com/roles">/roles</a>.</p>,
    buttons: [
      {
        text: 'Check it out',
        icon: <FiExternalLink />,
        href: 'https://youtaite-network.netlify.app',
        variant: 'outline-primary',
      },
      {
        text: 'GitHub repo',
        icon: <AiFillGithub />,
        href: 'https://github.com/eberleant/youtaite-network-client',
        variant: 'outline-secondary',
      },
    ],
  },
  {
    title: {
      text: 'CERBARIS: real-time web interface',
      href: 'https://campusrover.github.io/PupperPy/web_interface.html',
    },
    badges: [
      {
        src: 'https://img.shields.io/badge/vue-%5E2.6.11-informational',
        alt: 'Vue ^2.6.11',
      },
      {
        src: 'https://img.shields.io/badge/python-3.9.0-informational',
        alt: 'Python 3.9.0',
      },
      {
        src: 'https://img.shields.io/github/last-commit/campusrover/PupperPy',
        alt: 'Last commit',
      },
    ],
    image: 'cerbaris.gif',
    // eslint-disable-next-line max-len, react/jsx-one-expression-per-line
    description: <p>Under Prof. Pito Salas&apos;s mentorship, I worked with Roshan Nanu, Ben Ballintyn, and Chris Tam in a robotics-centered independent study. The project involved building and customizing a Stanford Pupper robot. As part of this, I developed a web interface that displays data in real-time about the robot’s state, including sensor data, computer vision data, and current behavior. I used Vue.js, combined with paper.js, JointJS, and BootstrapVue, for the frontend of the web interface. When the robot is running, its control script (written in Python) pushes data to the web interface, which then updates its display. The website can be found at <a href="https://cerbaris.netlify.app">cerbaris.netlify.app</a>, but without the robot running, no data is being received or updated. A detailed technical description of the site can also be found on the <a href="https://campusrover.github.io/PupperPy/web_interface.html">web interface section of our final project report</a>.</p>,
    buttons: [
      {
        text: 'Learn more',
        icon: <AiOutlineInfoCircle />,
        variant: 'outline-primary',
        href: 'https://campusrover.github.io/PupperPy/web_interface.html',
      },
      {
        text: 'GitHub repo',
        icon: <AiFillGithub />,
        variant: 'outline-secondary',
        href: 'https://github.com/campusrover/PupperPy',
      },
    ],
  },
  {
    title: {
      text: 'SWARMBOTS',
      href: 'https://campusrover.github.io/swarmbots',
    },
    badges: [
      {
        src: 'https://img.shields.io/badge/ros-melodic-informational',
        alt: 'ROS melodic',
      },
      {
        src: 'https://img.shields.io/badge/gazebo-9.0.0-informational',
        alt: 'Gazebo 9.0.0',
      },
      {
        src: 'https://img.shields.io/badge/python-2.7.11-informational',
        alt: 'Python 2.7.11',
      },
      {
        src: 'https://img.shields.io/github/last-commit/campusrover/swarmbots',
        alt: 'Last commit',
      },
    ],
    image: 'swarmbots.gif',
    // eslint-disable-next-line max-len, react/jsx-one-expression-per-line
    description: <p>I worked with Kelly Duan to create SWARMBOTS, a ROS and Gazebo program which allows multiple robots in a swarm to collaboratively map their environment. At any time, there is a single leader (the <em>swarmboss</em>) whose movement dictates the behavior of the other robots in the swarm, who may follow or disperse from the leader. If the swarmboss becomes unavailable or stuck for any reason, a different robot will automatically be assigned as the new swarmboss. Through the command-line, you can specify the mode (follow or disperse), as well as the number of robots to spawn. 🤖🦠</p>,
    buttons: [
      {
        text: 'Learn more',
        icon: <AiOutlineInfoCircle />,
        variant: 'outline-primary',
        href: 'https://campusrover.github.io/swarmbots',
      },
      {
        text: 'GitHub repo',
        icon: <AiFillGithub />,
        variant: 'outline-secondary',
        href: 'https://github.com/campusrover/swarmbots',
      },
    ],
  },
  {
    title: {
      text: 'Mad Libs Generator',
      href: 'http://madlibsgenerator.pythonanywhere.com/',
    },
    badges: [
      {
        src: 'https://img.shields.io/badge/python-3.9.0-informational',
        alt: 'Python 3.9.0',
      },
      {
        src: 'https://img.shields.io/badge/nltk-3.5-informational',
        alt: 'NLTK 3.5',
      },
      {
        src: 'https://img.shields.io/badge/flask-1.1.2-informational',
        alt: 'Flask 1.1.2',
      },
      {
        src: 'https://img.shields.io/github/last-commit/ztbartolome/Mad_Libs_Generator',
        alt: 'Last commit',
      },
    ],
    image: 'nltk-logo.png',
    // eslint-disable-next-line max-len, react/jsx-one-expression-per-line
    description: <p>I worked with Zeline Tricia Bartolome to create Mad Libs Generator, which uses natural language processing to create a Mad Libs-like game for the user. The generator randomly chooses words from a passage for the user to replace. While there is a selection of passages to choose from, the generator is also capable of taking user-provided passages.</p>,
    buttons: [
      {
        text: 'Check it out',
        icon: <FiExternalLink />,
        variant: 'outline-primary',
        href: 'http://madlibsgenerator.pythonanywhere.com/',
      },
      {
        text: 'GitHub repo',
        icon: <AiFillGithub />,
        variant: 'outline-secondary',
        href: 'https://github.com/ztbartolome/Mad_Libs_Generator',
      },
    ],
  },
  {
    title: {
      text: 'Multiple Stopwatches',
      href: 'https://eberleant.github.io/multiple-stopwatches',
    },
    badges: [
      {
        src: 'https://img.shields.io/badge/javascript-es6-informational',
        alt: 'JavaScript ES6',
      },
      {
        src: 'https://img.shields.io/badge/html-5-informational',
        alt: 'HTML 5',
      },
      {
        src: 'https://img.shields.io/github/last-commit/eberleant/multiple-stopwatches',
        alt: 'Last commit',
      },
    ],
    image: 'multiple-stopwatches.gif',
    // eslint-disable-next-line max-len, react/jsx-one-expression-per-line
    description: <p>This tool allows you to create multiple stopwatches and assign a keyboard shortcut to each one to quickly trigger them. You can also create macro keybinds, or keyboard shortcuts which change the state of more than one stopwatch at once. It has many potential uses, but I use it to help myself and others with scripting songs (deciding who sings which lines) because I place a high priority on each singer getting approximately the same amount of time as every other singer. With this, I can quickly figure out how much time each singer has with only one playthrough of the song.</p>,
    buttons: [
      {
        text: 'Check it out',
        icon: <FiExternalLink />,
        variant: 'outline-primary',
        href: 'https://eberleant.github.io/multiple-stopwatches',
      },
      {
        text: 'GitHub repo',
        icon: <AiFillGithub />,
        variant: 'outline-secondary',
        href: 'https://github.com/eberleant/multiple-stopwatches',
      },
    ],
  },
  {
    title: {
      text: 'Script to help with grading',
      href: 'https://github.com/eberleant/extract-rename-submissions',
    },
    badges: [
      {
        src: 'https://img.shields.io/badge/gnu%20bash-3.2.57-informational',
        alt: 'GNU Bash 3.2.57',
      },
      {
        src: 'https://img.shields.io/github/last-commit/eberleant/extract-rename-submissions',
        alt: 'Last commit',
      },
    ],
    image: 'bash-logo.png',
    // eslint-disable-next-line max-len, react/jsx-one-expression-per-line
    description: <p>I wrote this small script to help me grade assignments as a teaching assistant. The school website allows me to download all student submissions at once, but the format involves lots of clicks and searches to find the students and submission files that I am supposed to grade. Running this script reorganizes the files so that they are much more efficient for me to find and grade.</p>,
    buttons: [
      {
        text: 'GitHub repo',
        icon: <AiFillGithub />,
        variant: 'outline-secondary',
        href: 'https://github.com/eberleant/extract-rename-submissions',
      },
    ],
  },
];

export default projectsData;
