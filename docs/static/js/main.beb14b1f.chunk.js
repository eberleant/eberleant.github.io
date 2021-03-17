(this["webpackJsonpeberleant.github.io"]=this["webpackJsonpeberleant.github.io"]||[]).push([[0],{49:function(e,t,a){},54:function(e,t,a){},61:function(e,t,a){"use strict";a.r(t);var s=a(1),i=a.n(s),o=a(20),r=a.n(o),n=(a(49),a(43)),l=a(7),c=a(21),h=a(12),m=a(22),d=a(9),b=a(36),p=a(32),g=a(33),u=a(28),j=a(2);var f=function(e){var t=e.data,a=t.title,s=t.image;return Object(j.jsx)("a",{href:a.href,children:Object(j.jsxs)(u.a,{className:"d-inline-block mx-2",style:{width:"130px"},children:[Object(j.jsx)(u.a.Img,{className:"p-3 w-100 h-auto",width:"1",height:"1",variant:"top",src:s}),Object(j.jsx)(u.a.Header,{className:"text-center text-truncate p-1",children:Object(j.jsx)("strong",{children:a.text})})]})})},x=a(38),w=a(39),y=a(40),v=a(41);function O(e){var t=e.data,a=e.mode,s=t.title,o=t.badges,r=t.image,n=t.description,l=t.buttons;return Object(j.jsx)(x.a,{className:"mb-5",children:Object(j.jsxs)(w.a,{children:[a.startsWith("list")&&Object(j.jsx)("div",{className:"col-6 col-md-3 ".concat(a.endsWith("left")?"float-left pl-0 pr-3":"float-right pr-0 pl-3"),children:Object(j.jsx)(y.a,{className:"w-100 h-auto",width:"1",height:"1",src:r,rounded:!0})}),Object(j.jsxs)("h5",{children:[s.href&&Object(j.jsx)("a",{className:"mr-2",href:s.href,children:s.text})||Object(j.jsx)("span",{className:"mr-2",children:s.text}),o.map((function(e){return Object(j.jsx)("img",{className:"mr-2 mt-n1",src:e.src,alt:e.alt},e.alt)}))]}),n,l.map((function(e){return Object(j.jsxs)(v.a,{className:"mr-2",href:e.href,variant:e.variant,children:[e.text,i.a.cloneElement(e.icon,{className:"ml-2 mt-n1"})]})}))]})})}O.defaultProps={mode:"list right"};var k=O,S=a(42),I={title:{text:"About Me"},badges:[{src:"https://img.shields.io/badge/graduated-dec%202020-blueviolet",alt:"Graduated Dec 2020"},{src:"https://img.shields.io/badge/gpa-3.92-red",alt:"GPA 3.92"},{src:"https://img.shields.io/badge/honors-magna%20cum%20laude-orange",alt:"Honors: magna cum laude"},{src:"https://img.shields.io/badge/loves%20to%20learn-%E2%99%A5-ff69b4",alt:"Loves to learn"}],image:"profile-pic.jpg",description:Object(j.jsx)("p",{children:"Hello! My name is Evalyn Berleant. I am a recent graduate from Brandeis University with a B.S. in Computer Science and minor in Mathematics. I have experience in Ruby on Rails, Java, JavaScript, React.js, Vue.js, Python, SQL, and Bash. In Summer 2020, I interned at Galatea Associates, where I used the Java Spring Boot framework, React.js, and Lombok to write several API endpoints for various applications. In Fall 2020, I was a member of a robotics-centered independent study, where I developed a live-updating web interface using Vue.js and Python. I have also worked as a TA for Advanced Programming Techniques and Operating Systems, and I interned for CQ Consulting as a contractor for the Arkansas Department of Health in Summers 2018 and 2019. Above all, I'm always excited to learn something new!"}),buttons:[{text:"Resume",icon:Object(j.jsx)(S.a,{}),href:"https://docs.google.com/uc?id=14vIpSHMwW7P7VY_oF7SbdWgbxLmJZ1SI&export=download",variant:"outline-light"}]},L=[{title:{text:"Ruby",href:"https://www.ruby-lang.org/en"},image:"logos/ruby.png"},{title:{text:"Ruby on Rails",href:"https://rubyonrails.org"},image:"logos/rails.png"},{title:{text:"Java",href:"https://www.java.com"},image:"logos/java.png"},{title:{text:"Java Spring",href:"https://spring.io"},image:"logos/spring.png"},{title:{text:"JavaScript",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript"},image:"logos/js.png"},{title:{text:"React",href:"https://reactjs.org"},image:"logos/react.png"},{title:{text:"Vue.js",href:"https://vuejs.org"},image:"logos/vue.png"},{title:{text:"D3.js",href:"https://d3js.org"},image:"logos/d3.png"},{title:{text:"HTML 5",href:"https://developer.mozilla.org/en-US/docs/Web/HTML"},image:"logos/html.png"},{title:{text:"CSS",href:"https://developer.mozilla.org/en-US/docs/Web/CSS"},image:"logos/css.png"},{title:{text:"PostgreSQL",href:"https://www.postgresql.org"},image:"logos/postgresql.png"},{title:{text:"Python",href:"https://www.python.org"},image:"logos/python.png"},{title:{text:"ROS",href:"https://www.ros.org"},image:"logos/ros.png"}],P=a(27),N=[{title:{text:"Youtaite Network",href:"https://youtaite-network.netlify.app"},badges:[{src:"https://img.shields.io/badge/react-%5E17.0.1-informational",alt:"React ^17.0.1"},{src:"https://img.shields.io/badge/d3.js-6.6.0-informational",alt:"D3.js 6.6.0"},{src:"https://img.shields.io/badge/ruby-2.7.1-informational",alt:"Ruby 2.7.1"},{src:"https://img.shields.io/badge/rails-~%3E%206.0.3-blue",alt:"Rails ~> 6.0.3"},{src:"https://img.shields.io/github/last-commit/eberleant/youtaite-network-client",alt:"Last commit"}],image:"youtaite-network.gif",description:Object(j.jsxs)("p",{children:['This is a personal project focused on a community of Youtube content creators who often collaborate with each other. I wanted to show how different collaborations are connected to each other through people - for example, if I am in two different collabs, those two collabs are connected through me. I hope to show the existence of different corners within the community, where groups of people collaborate with each other more often than with someone outside of their corner. I have a other ideas for creatively displaying the data (once I have enough of it), such as identifying closely-related clusters and "representative" collaborations of those clusters. The frontend website is written in React. The data visualization is created using d3. The backend API is written in Ruby on Rails. If you feel like checking out the backend API, the main routes are ',Object(j.jsx)("a",{href:"https://youtaite-network-api.herokuapp.com/people",children:"/people"}),", ",Object(j.jsx)("a",{href:"https://youtaite-network-api.herokuapp.com/collabs",children:"/collabs"}),", and ",Object(j.jsx)("a",{href:"https://youtaite-network-api.herokuapp.com/roles",children:"/roles"}),"."]}),buttons:[{text:"Check it out",icon:Object(j.jsx)(P.a,{}),href:"https://youtaite-network.netlify.app",variant:"outline-primary"},{text:"GitHub repo",icon:Object(j.jsx)(d.b,{}),href:"https://github.com/eberleant/youtaite-network-client",variant:"outline-secondary"}]},{title:{text:"CERBARIS: real-time web interface",href:"https://campusrover.github.io/PupperPy/web_interface.html"},badges:[{src:"https://img.shields.io/badge/vue-%5E2.6.11-informational",alt:"Vue ^2.6.11"},{src:"https://img.shields.io/badge/python-3.9.0-informational",alt:"Python 3.9.0"},{src:"https://img.shields.io/github/last-commit/campusrover/PupperPy",alt:"Last commit"}],image:"cerbaris.gif",description:Object(j.jsxs)("p",{children:["Under Prof. Pito Salas's mentorship, I worked with Roshan Nanu, Ben Ballintyn, and Chris Tam in a robotics-centered independent study. The project involved building and customizing a Stanford Pupper robot. As part of this, I developed a web interface that displays data in real-time about the robot\u2019s state, including sensor data, computer vision data, and current behavior. I used Vue.js, combined with paper.js, JointJS, and BootstrapVue, for the frontend of the web interface. When the robot is running, its control script (written in Python) pushes data to the web interface, which then updates its display. The website can be found at ",Object(j.jsx)("a",{href:"https://cerbaris.netlify.app",children:"cerbaris.netlify.app"}),", but without the robot running, no data is being received or updated. A detailed technical description of the site can also be found on the ",Object(j.jsx)("a",{href:"https://campusrover.github.io/PupperPy/web_interface.html",children:"web interface section of our final project report"}),"."]}),buttons:[{text:"Learn more",icon:Object(j.jsx)(d.d,{}),variant:"outline-primary",href:"https://campusrover.github.io/PupperPy/web_interface.html"},{text:"GitHub repo",icon:Object(j.jsx)(d.b,{}),variant:"outline-secondary",href:"https://github.com/campusrover/PupperPy"}]},{title:{text:"SWARMBOTS",href:"https://campusrover.github.io/swarmbots"},badges:[{src:"https://img.shields.io/badge/ros-melodic-informational",alt:"ROS melodic"},{src:"https://img.shields.io/badge/gazebo-9.0.0-informational",alt:"Gazebo 9.0.0"},{src:"https://img.shields.io/badge/python-2.7.11-informational",alt:"Python 2.7.11"},{src:"https://img.shields.io/github/last-commit/campusrover/swarmbots",alt:"Last commit"}],image:"swarmbots.gif",description:Object(j.jsxs)("p",{children:["I worked with Kelly Duan to create SWARMBOTS, a ROS and Gazebo program which allows multiple robots in a swarm to collaboratively map their environment. At any time, there is a single leader (the ",Object(j.jsx)("em",{children:"swarmboss"}),") whose movement dictates the behavior of the other robots in the swarm, who may follow or disperse from the leader. If the swarmboss becomes unavailable or stuck for any reason, a different robot will automatically be assigned as the new swarmboss. Through the command-line, you can specify the mode (follow or disperse), as well as the number of robots to spawn. \ud83e\udd16\ud83e\udda0"]}),buttons:[{text:"Learn more",icon:Object(j.jsx)(d.d,{}),variant:"outline-primary",href:"https://campusrover.github.io/swarmbots"},{text:"GitHub repo",icon:Object(j.jsx)(d.b,{}),variant:"outline-secondary",href:"https://github.com/campusrover/swarmbots"}]},{title:{text:"Mad Libs Generator",href:"http://madlibsgenerator.pythonanywhere.com/"},badges:[{src:"https://img.shields.io/badge/python-3.9.0-informational",alt:"Python 3.9.0"},{src:"https://img.shields.io/badge/nltk-3.5-informational",alt:"NLTK 3.5"},{src:"https://img.shields.io/badge/flask-1.1.2-informational",alt:"Flask 1.1.2"},{src:"https://img.shields.io/github/last-commit/ztbartolome/Mad_Libs_Generator",alt:"Last commit"}],image:"logos/nltk.png",description:Object(j.jsx)("p",{children:"I worked with Zeline Tricia Bartolome to create Mad Libs Generator, which uses natural language processing to create a Mad Libs-like game for the user. The generator randomly chooses words from a passage for the user to replace. While there is a selection of passages to choose from, the generator is also capable of taking user-provided passages."}),buttons:[{text:"Check it out",icon:Object(j.jsx)(P.a,{}),variant:"outline-primary",href:"http://madlibsgenerator.pythonanywhere.com/"},{text:"GitHub repo",icon:Object(j.jsx)(d.b,{}),variant:"outline-secondary",href:"https://github.com/ztbartolome/Mad_Libs_Generator"}]},{title:{text:"Multiple Stopwatches",href:"https://eberleant.github.io/multiple-stopwatches"},badges:[{src:"https://img.shields.io/badge/javascript-es6-informational",alt:"JavaScript ES6"},{src:"https://img.shields.io/badge/html-5-informational",alt:"HTML 5"},{src:"https://img.shields.io/github/last-commit/eberleant/multiple-stopwatches",alt:"Last commit"}],image:"multiple-stopwatches.gif",description:Object(j.jsx)("p",{children:"This tool allows you to create multiple stopwatches and assign a keyboard shortcut to each one to quickly trigger them. You can also create macro keybinds, or keyboard shortcuts which change the state of more than one stopwatch at once. It has many potential uses, but I use it to help myself and others with scripting songs (deciding who sings which lines) because I place a high priority on each singer getting approximately the same amount of time as every other singer. With this, I can quickly figure out how much time each singer has with only one playthrough of the song."}),buttons:[{text:"Check it out",icon:Object(j.jsx)(P.a,{}),variant:"outline-primary",href:"https://eberleant.github.io/multiple-stopwatches"},{text:"GitHub repo",icon:Object(j.jsx)(d.b,{}),variant:"outline-secondary",href:"https://github.com/eberleant/multiple-stopwatches"}]},{title:{text:"Script to help with grading",href:"https://github.com/eberleant/extract-rename-submissions"},badges:[{src:"https://img.shields.io/badge/gnu%20bash-3.2.57-informational",alt:"GNU Bash 3.2.57"},{src:"https://img.shields.io/github/last-commit/eberleant/extract-rename-submissions",alt:"Last commit"}],image:"logos/bash.png",description:Object(j.jsx)("p",{children:"I wrote this small script to help me grade assignments as a teaching assistant. The school website allows me to download all student submissions at once, but the format involves lots of clicks and searches to find the students and submission files that I am supposed to grade. Running this script reorganizes the files so that they are much more efficient for me to find and grade."}),buttons:[{text:"GitHub repo",icon:Object(j.jsx)(d.b,{}),variant:"outline-secondary",href:"https://github.com/eberleant/extract-rename-submissions"}]}];var R=function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(p.a,{className:"mb-0",style:{backgroundColor:"#282c34",color:"lightgrey",borderRadius:0},children:Object(j.jsx)(m.a,{children:Object(j.jsx)(k,{data:I,mode:"list left"})})}),Object(j.jsx)(p.a,{className:"mb-0",children:Object(j.jsxs)(m.a,{children:[Object(j.jsxs)("h4",{children:[Object(j.jsx)(g.a,{className:"mt-n1"}),"Skills"]}),Object(j.jsx)("hr",{}),Object(j.jsx)("div",{style:{position:"relative"},children:Object(j.jsx)("div",{className:"mb-5 fade-x",children:Object(j.jsx)("div",{className:"scroll-x",children:L.map((function(e){return Object(j.jsx)(f,{data:e})}))})})}),Object(j.jsxs)("h4",{children:[Object(j.jsx)(g.a,{className:"mt-n1"}),"Projects"]}),Object(j.jsx)("hr",{}),N.map((function(e){return Object(j.jsx)(k,{data:e})}))]})})]})};a(53),a(54);function T(){return Object(j.jsx)(n.a,{children:Object(j.jsxs)("div",{children:[Object(j.jsx)(c.a,{bg:"dark",variant:"dark",expand:"sm",children:Object(j.jsxs)(m.a,{children:[Object(j.jsx)(c.a.Brand,{href:"/",children:"Evalyn Berleant"}),Object(j.jsx)(c.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(j.jsx)(c.a.Collapse,{className:"justify-content-end",children:Object(j.jsx)(h.a,{children:Object(j.jsxs)("div",{className:"d-flex flex-row",children:[Object(j.jsx)(h.a.Link,{className:"pr-2",href:"mailto:eberleant@gmail.com","aria-label":"Email link",children:Object(j.jsx)(b.a,{size:"1.5rem"})}),Object(j.jsx)(h.a.Link,{className:"pr-2",href:"https://github.com/eberleant","aria-label":"Github link",children:Object(j.jsx)(d.b,{size:"1.5rem"})}),Object(j.jsx)(h.a.Link,{className:"pr-2",href:"https://www.linkedin.com/in/eberleant","aria-label":"Linkedin link",children:Object(j.jsx)(d.c,{size:"1.5rem"})}),Object(j.jsx)(h.a.Link,{className:"pr-2",href:"https://www.facebook.com/evalyn.berleant","aria-label":"Facebook link",children:Object(j.jsx)(d.a,{size:"1.5rem"})})]})})})]})}),Object(j.jsx)(l.c,{children:Object(j.jsx)(l.a,{path:"/",children:Object(j.jsx)(R,{})})}),Object(j.jsxs)(c.a,{bg:"dark",variant:"dark",className:"flex-column",children:[Object(j.jsx)(h.a,{className:"mr-auto ml-auto",children:Object(j.jsx)(h.a.Link,{href:"mailto:eberleant@gmail.com",children:"Like what you see? Let's work together."})}),Object(j.jsxs)(h.a,{className:"mr-auto ml-auto",children:[Object(j.jsx)(h.a.Link,{href:"mailto:eberleant@gmail.com","aria-label":"Email link",children:Object(j.jsx)(b.a,{size:"1.5rem"})}),Object(j.jsx)(h.a.Link,{href:"https://github.com/eberleant","aria-label":"Github link",children:Object(j.jsx)(d.b,{size:"1.5rem"})}),Object(j.jsx)(h.a.Link,{href:"https://www.linkedin.com/in/eberleant","aria-label":"Linkedin link",children:Object(j.jsx)(d.c,{size:"1.5rem"})}),Object(j.jsx)(h.a.Link,{href:"https://www.facebook.com/evalyn.berleant","aria-label":"Facebook link",children:Object(j.jsx)(d.a,{size:"1.5rem"})})]})]})]})})}var z=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,63)).then((function(t){var a=t.getCLS,s=t.getFID,i=t.getFCP,o=t.getLCP,r=t.getTTFB;a(e),s(e),i(e),o(e),r(e)}))};r.a.render(Object(j.jsx)(i.a.StrictMode,{children:Object(j.jsx)(T,{})}),document.getElementById("root")),z()}},[[61,1,2]]]);
//# sourceMappingURL=main.beb14b1f.chunk.js.map