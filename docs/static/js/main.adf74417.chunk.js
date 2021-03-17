(this["webpackJsonpeberleant.github.io"]=this["webpackJsonpeberleant.github.io"]||[]).push([[0],{46:function(e,t,a){},57:function(e,t,a){"use strict";a.r(t);var i=a(1),s=a.n(i),o=a(19),r=a.n(o),n=(a(46),a(40)),c=a(7),l=a(20),h=a(12),b=a(21),d=a(9),m=a(32),p=a(29),u=a(39),g=a(34),j=a(35),f=a(36),w=a(37),x=a(2);function y(e){var t=e.data,a=e.mode,i=t.title,o=t.badges,r=t.image,n=t.description,c=t.buttons;return Object(x.jsx)(g.a,{className:"mb-5",children:Object(x.jsxs)(j.a,{children:[a.startsWith("list")&&Object(x.jsx)("div",{className:"col-6 col-md-3 ".concat(a.endsWith("left")?"float-left pl-0 pr-3":"float-right pr-0 pl-3"),children:Object(x.jsx)(f.a,{className:"w-100 h-auto",width:"1",height:"1",src:r,rounded:!0})}),Object(x.jsxs)("h5",{children:[i.href&&Object(x.jsx)("a",{className:"mr-2",href:i.href,children:i.text})||Object(x.jsx)("span",{className:"mr-2",children:i.text}),o.map((function(e){return Object(x.jsx)("img",{className:"mr-2 mt-n1",src:e.src,alt:e.alt},e.alt)}))]}),n,c.map((function(e){return Object(x.jsxs)(w.a,{className:"mr-2",href:e.href,variant:e.variant,children:[e.text,s.a.cloneElement(e.icon,{className:"ml-2 mt-n1"})]})}))]})})}y.defaultProps={mode:"list right"};var O=y,v=a(25),k=[{title:{text:"Youtaite Network",href:"https://youtaite-network.netlify.app"},badges:[{src:"https://img.shields.io/badge/react-%5E17.0.1-informational",alt:"React ^17.0.1"},{src:"https://img.shields.io/badge/d3.js-6.6.0-informational",alt:"D3.js 6.6.0"},{src:"https://img.shields.io/badge/ruby-2.7.1-informational",alt:"Ruby 2.7.1"},{src:"https://img.shields.io/badge/rails-~%3E%206.0.3-blue",alt:"Rails ~> 6.0.3"},{src:"https://img.shields.io/github/last-commit/eberleant/youtaite-network-client",alt:"Last commit"}],image:"youtaite-network.gif",description:Object(x.jsxs)("p",{children:['This is a personal project focused on a community of Youtube content creators who often collaborate with each other. I wanted to show how different collaborations are connected to each other through people - for example, if I am in two different collabs, those two collabs are connected through me. I hope to show the existence of different corners within the community, where groups of people collaborate with each other more often than with someone outside of their corner. I have a other ideas for creatively displaying the data (once I have enough of it), such as identifying closely-related clusters and "representative" collaborations of those clusters. The frontend website is written in React. The data visualization is created using d3. The backend API is written in Ruby on Rails. If you feel like checking out the backend API, the main routes are ',Object(x.jsx)("a",{href:"https://youtaite-network-api.herokuapp.com/people",children:"/people"}),", ",Object(x.jsx)("a",{href:"https://youtaite-network-api.herokuapp.com/collabs",children:"/collabs"}),", and ",Object(x.jsx)("a",{href:"https://youtaite-network-api.herokuapp.com/roles",children:"/roles"}),"."]}),buttons:[{text:"Check it out",icon:Object(x.jsx)(v.a,{}),href:"https://youtaite-network.netlify.app",variant:"outline-primary"},{text:"GitHub repo",icon:Object(x.jsx)(d.b,{}),href:"https://github.com/eberleant/youtaite-network-client",variant:"outline-secondary"}]},{title:{text:"CERBARIS: real-time web interface",href:"https://campusrover.github.io/PupperPy/web_interface.html"},badges:[{src:"https://img.shields.io/badge/vue-%5E2.6.11-informational",alt:"Vue ^2.6.11"},{src:"https://img.shields.io/badge/python-3.9.0-informational",alt:"Python 3.9.0"},{src:"https://img.shields.io/github/last-commit/campusrover/PupperPy",alt:"Last commit"}],image:"cerbaris.gif",description:Object(x.jsxs)("p",{children:["Under Prof. Pito Salas's mentorship, I worked with Roshan Nanu, Ben Ballintyn, and Chris Tam in a robotics-centered independent study. The project involved building and customizing a Stanford Pupper robot. As part of this, I developed a web interface that displays data in real-time about the robot\u2019s state, including sensor data, computer vision data, and current behavior. I used Vue.js, combined with paper.js, JointJS, and BootstrapVue, for the frontend of the web interface. When the robot is running, its control script (written in Python) pushes data to the web interface, which then updates its display. The website can be found at ",Object(x.jsx)("a",{href:"https://cerbaris.netlify.app",children:"cerbaris.netlify.app"}),", but without the robot running, no data is being received or updated. A detailed technical description of the site can also be found on the ",Object(x.jsx)("a",{href:"https://campusrover.github.io/PupperPy/web_interface.html",children:"web interface section of our final project report"}),"."]}),buttons:[{text:"Learn more",icon:Object(x.jsx)(d.d,{}),variant:"outline-primary",href:"https://campusrover.github.io/PupperPy/web_interface.html"},{text:"GitHub repo",icon:Object(x.jsx)(d.b,{}),variant:"outline-secondary",href:"https://github.com/campusrover/PupperPy"}]},{title:{text:"SWARMBOTS",href:"https://campusrover.github.io/swarmbots"},badges:[{src:"https://img.shields.io/badge/ros-melodic-informational",alt:"ROS melodic"},{src:"https://img.shields.io/badge/gazebo-9.0.0-informational",alt:"Gazebo 9.0.0"},{src:"https://img.shields.io/badge/python-2.7.11-informational",alt:"Python 2.7.11"},{src:"https://img.shields.io/github/last-commit/campusrover/swarmbots",alt:"Last commit"}],image:"swarmbots.gif",description:Object(x.jsxs)("p",{children:["I worked with Kelly Duan to create SWARMBOTS, a ROS and Gazebo program which allows multiple robots in a swarm to collaboratively map their environment. At any time, there is a single leader (the ",Object(x.jsx)("em",{children:"swarmboss"}),") whose movement dictates the behavior of the other robots in the swarm, who may follow or disperse from the leader. If the swarmboss becomes unavailable or stuck for any reason, a different robot will automatically be assigned as the new swarmboss. Through the command-line, you can specify the mode (follow or disperse), as well as the number of robots to spawn. \ud83e\udd16\ud83e\udda0"]}),buttons:[{text:"Learn more",icon:Object(x.jsx)(d.d,{}),variant:"outline-primary",href:"https://campusrover.github.io/swarmbots"},{text:"GitHub repo",icon:Object(x.jsx)(d.b,{}),variant:"outline-secondary",href:"https://github.com/campusrover/swarmbots"}]},{title:{text:"Mad Libs Generator",href:"http://madlibsgenerator.pythonanywhere.com/"},badges:[{src:"https://img.shields.io/badge/python-3.9.0-informational",alt:"Python 3.9.0"},{src:"https://img.shields.io/badge/nltk-3.5-informational",alt:"NLTK 3.5"},{src:"https://img.shields.io/badge/flask-1.1.2-informational",alt:"Flask 1.1.2"},{src:"https://img.shields.io/github/last-commit/ztbartolome/Mad_Libs_Generator",alt:"Last commit"}],image:"nltk-logo.png",description:Object(x.jsx)("p",{children:"I worked with Zeline Tricia Bartolome to create Mad Libs Generator, which uses natural language processing to create a Mad Libs-like game for the user. The generator randomly chooses words from a passage for the user to replace. While there is a selection of passages to choose from, the generator is also capable of taking user-provided passages."}),buttons:[{text:"Check it out",icon:Object(x.jsx)(v.a,{}),variant:"outline-primary",href:"http://madlibsgenerator.pythonanywhere.com/"},{text:"GitHub repo",icon:Object(x.jsx)(d.b,{}),variant:"outline-secondary",href:"https://github.com/ztbartolome/Mad_Libs_Generator"}]},{title:{text:"Multiple Stopwatches",href:"https://eberleant.github.io/multiple-stopwatches"},badges:[{src:"https://img.shields.io/badge/javascript-es6-informational",alt:"JavaScript ES6"},{src:"https://img.shields.io/badge/html-5-informational",alt:"HTML 5"},{src:"https://img.shields.io/github/last-commit/eberleant/multiple-stopwatches",alt:"Last commit"}],image:"multiple-stopwatches.gif",description:Object(x.jsx)("p",{children:"This tool allows you to create multiple stopwatches and assign a keyboard shortcut to each one to quickly trigger them. You can also create macro keybinds, or keyboard shortcuts which change the state of more than one stopwatch at once. It has many potential uses, but I use it to help myself and others with scripting songs (deciding who sings which lines) because I place a high priority on each singer getting approximately the same amount of time as every other singer. With this, I can quickly figure out how much time each singer has with only one playthrough of the song."}),buttons:[{text:"Check it out",icon:Object(x.jsx)(v.a,{}),variant:"outline-primary",href:"https://eberleant.github.io/multiple-stopwatches"},{text:"GitHub repo",icon:Object(x.jsx)(d.b,{}),variant:"outline-secondary",href:"https://github.com/eberleant/multiple-stopwatches"}]},{title:{text:"Script to help with grading",href:"https://github.com/eberleant/extract-rename-submissions"},badges:[{src:"https://img.shields.io/badge/gnu%20bash-3.2.57-informational",alt:"GNU Bash 3.2.57"},{src:"https://img.shields.io/github/last-commit/eberleant/extract-rename-submissions",alt:"Last commit"}],image:"bash-logo.png",description:Object(x.jsx)("p",{children:"I wrote this small script to help me grade assignments as a teaching assistant. The school website allows me to download all student submissions at once, but the format involves lots of clicks and searches to find the students and submission files that I am supposed to grade. Running this script reorganizes the files so that they are much more efficient for me to find and grade."}),buttons:[{text:"GitHub repo",icon:Object(x.jsx)(d.b,{}),variant:"outline-secondary",href:"https://github.com/eberleant/extract-rename-submissions"}]}],I=a(38),L={title:{text:"About Me"},badges:[{src:"https://img.shields.io/badge/graduated-dec%202020-blueviolet",alt:"Graduated Dec 2020"},{src:"https://img.shields.io/badge/gpa-3.92-red",alt:"GPA 3.92"},{src:"https://img.shields.io/badge/honors-magna%20cum%20laude-orange",alt:"Honors: magna cum laude"},{src:"https://img.shields.io/badge/loves%20to%20learn-%E2%99%A5-ff69b4",alt:"Loves to learn"}],image:"profile-pic.jpg",description:Object(x.jsx)("p",{children:"Hello! My name is Evalyn Berleant. I am a recent graduate from Brandeis University with a B.S. in Computer Science and minor in Mathematics. I have experience in Ruby on Rails, Java, JavaScript, React.js, Vue.js, Python, SQL, and Bash. In Summer 2020, I interned at Galatea Associates, where I used the Java Spring Boot framework, React.js, and Lombok to write several API endpoints for various applications. In Fall 2020, I was a member of a robotics-centered independent study, where I developed a live-updating web interface using Vue.js and Python. I have also worked as a TA for Advanced Programming Techniques and Operating Systems, and I interned for CQ Consulting as a contractor for the Arkansas Department of Health in Summers 2018 and 2019. Above all, I'm always excited to learn something new!"}),buttons:[{text:"Resume",icon:Object(x.jsx)(I.a,{}),href:"https://docs.google.com/uc?id=14vIpSHMwW7P7VY_oF7SbdWgbxLmJZ1SI&export=download",variant:"outline-light"}]};var P=function(){return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(p.a,{className:"mb-0",style:{backgroundColor:"#282c34",color:"lightgrey",borderRadius:0},children:Object(x.jsx)(b.a,{children:Object(x.jsx)(O,{data:L,mode:"list left"})})}),Object(x.jsx)(p.a,{className:"mb-0",children:Object(x.jsxs)(b.a,{children:[Object(x.jsxs)("h4",{children:[Object(x.jsx)(u.a,{className:"mt-n1"}),"Projects"]}),Object(x.jsx)("hr",{}),k.map((function(e){return Object(x.jsx)(O,{data:e})}))]})})]})};a(50);function S(){return Object(x.jsx)(n.a,{children:Object(x.jsxs)("div",{children:[Object(x.jsx)(l.a,{bg:"dark",variant:"dark",expand:"sm",children:Object(x.jsxs)(b.a,{children:[Object(x.jsx)(l.a.Brand,{href:"/",children:"Evalyn Berleant"}),Object(x.jsx)(l.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(x.jsx)(l.a.Collapse,{className:"justify-content-end",children:Object(x.jsx)(h.a,{children:Object(x.jsxs)("div",{className:"d-flex flex-row",children:[Object(x.jsx)(h.a.Link,{className:"pr-2",href:"mailto:eberleant@gmail.com","aria-label":"Email link",children:Object(x.jsx)(m.a,{size:"1.5rem"})}),Object(x.jsx)(h.a.Link,{className:"pr-2",href:"https://github.com/eberleant","aria-label":"Github link",children:Object(x.jsx)(d.b,{size:"1.5rem"})}),Object(x.jsx)(h.a.Link,{className:"pr-2",href:"https://www.linkedin.com/in/eberleant","aria-label":"Linkedin link",children:Object(x.jsx)(d.c,{size:"1.5rem"})}),Object(x.jsx)(h.a.Link,{className:"pr-2",href:"https://www.facebook.com/evalyn.berleant","aria-label":"Facebook link",children:Object(x.jsx)(d.a,{size:"1.5rem"})})]})})})]})}),Object(x.jsx)(c.c,{children:Object(x.jsx)(c.a,{path:"/",children:Object(x.jsx)(P,{})})}),Object(x.jsxs)(l.a,{bg:"dark",variant:"dark",className:"flex-column",children:[Object(x.jsx)(h.a,{className:"mr-auto ml-auto",children:Object(x.jsx)(h.a.Link,{href:"mailto:eberleant@gmail.com",children:"Like what you see? Let's work together."})}),Object(x.jsxs)(h.a,{className:"mr-auto ml-auto",children:[Object(x.jsx)(h.a.Link,{href:"mailto:eberleant@gmail.com","aria-label":"Email link",children:Object(x.jsx)(m.a,{size:"1.5rem"})}),Object(x.jsx)(h.a.Link,{href:"https://github.com/eberleant","aria-label":"Github link",children:Object(x.jsx)(d.b,{size:"1.5rem"})}),Object(x.jsx)(h.a.Link,{href:"https://www.linkedin.com/in/eberleant","aria-label":"Linkedin link",children:Object(x.jsx)(d.c,{size:"1.5rem"})}),Object(x.jsx)(h.a.Link,{href:"https://www.facebook.com/evalyn.berleant","aria-label":"Facebook link",children:Object(x.jsx)(d.a,{size:"1.5rem"})})]})]})]})})}var N=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,59)).then((function(t){var a=t.getCLS,i=t.getFID,s=t.getFCP,o=t.getLCP,r=t.getTTFB;a(e),i(e),s(e),o(e),r(e)}))};r.a.render(Object(x.jsx)(s.a.StrictMode,{children:Object(x.jsx)(S,{})}),document.getElementById("root")),N()}},[[57,1,2]]]);
//# sourceMappingURL=main.adf74417.chunk.js.map