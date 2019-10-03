const navAbout = document.getElementById("nav-about");
const navResume = document.getElementById("nav-resume");
const navProgramming = document.getElementById("nav-programming");
const navFooter = document.getElementById("nav-contact");
const mNavAbout = document.getElementById("m-nav-about");
const mNavResume = document.getElementById("m-nav-resume");
const mNavProgramming = document.getElementById("m-nav-programming");
const mNavFooter = document.getElementById("m-nav-contact");
const sectionAbout = document.getElementById("about");
const sectionResume = document.getElementById("resume");
const sectionProgramming = document.getElementById("programming");
const sectionFooter = document.getElementById("footer");
const resumeDownload = document.getElementById("resume-dl");
const header = document.getElementById("header");
const headerBg = document.getElementById("header-bg");
const mNavBtn = document.getElementById("m-navbar-btn");
const mNavbar = document.getElementById("m-navbar");
let mNavbarWidth = mNavbar.clientWidth;
const scrollOptions = {
	behavior: "smooth",
	block: "start",
	inline: "nearest",
}

headerBg.style.height = header.clientHeight + "px";

//click events to scroll to the appropriate section
navAbout.addEventListener("click", e => sectionAbout.scrollIntoView(scrollOptions));
navResume.addEventListener("click", e => sectionResume.scrollIntoView(scrollOptions));
navProgramming.addEventListener("click", e => sectionProgramming.scrollIntoView(scrollOptions));
navFooter.addEventListener("click", e => sectionFooter.scrollIntoView(scrollOptions));
mNavAbout.addEventListener("click", e => sectionAbout.scrollIntoView(scrollOptions));
mNavResume.addEventListener("click", e => sectionResume.scrollIntoView(scrollOptions));
mNavProgramming.addEventListener("click", e => sectionProgramming.scrollIntoView(scrollOptions));
mNavFooter.addEventListener("click", e => sectionFooter.scrollIntoView(scrollOptions));
mNavBtn.addEventListener("click", toggleMobileMenu);
//set hamburger menu to initially be closed (offscreen)
mNavbar.style.right = -mNavbarWidth + "px";

//open and close the hamburger menu on mobile
function toggleMobileMenu() {
	if (mNavbar.style.right == "0px" || mNavbar.style.right == "" || mNavbar.style.right == "0") {
		window.requestAnimationFrame(function(){
			mNavbar.setAttribute("style", "right: 0");
 			window.requestAnimationFrame(function(){
    			mNavbar.setAttribute("style", "right: -" + mNavbarWidth + "px");
  			});
		});
	} else {
		window.requestAnimationFrame(function(){
			mNavbar.setAttribute("style", "right: -" + mNavbarWidth + "px");
 			window.requestAnimationFrame(function(){
    			mNavbar.setAttribute("style", "right: 0");
  			});
		});
	}
}


// from https://stackoverflow.com/questions/2264072/detect-a-finger-swipe-through-javascript-on-the-iphone-and-android
// allow swiping to open and close hamburger menu
document.addEventListener('touchstart', handleTouchStart, false);        
document.addEventListener('touchmove', handleTouchMove, false);

var xDown = null;                                                        
var yDown = null;

function getTouches(evt) {
  return evt.touches ||             // browser API
         evt.originalEvent.touches; // jQuery
}

function handleTouchStart(evt) {
    const firstTouch = getTouches(evt)[0];                                      
    xDown = firstTouch.clientX;                                      
    yDown = firstTouch.clientY;                                      
};                                                

function handleTouchMove(evt) {
    if ( ! xDown || ! yDown ) {
        return;
    }

    var xUp = evt.touches[0].clientX;                                    
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;

    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
        if (xDiff > 0 && mNavbar.style.right == "-" + mNavbarWidth + "px") {
            toggleMobileMenu();
        } else if (mNavbar.style.right == "0px" || mNavbar.style.right == "" || mNavbar.style.right == "0") {
            toggleMobileMenu();
        }
    }
    /* reset values */
    xDown = null;
    yDown = null;                                             
};