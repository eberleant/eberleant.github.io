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
// const mixItUp = document.getElementById("mix-it-up");
let mNavbarWidth = mNavbar.clientWidth || 500;

headerBg.style.height = header.clientHeight + "px";
setInterval(() => headerBg.style.height = header.clientHeight + "px", 100);

let scrollOffset = 35;
let mScrollOffset = 0;
const scrollOptions = {
	behavior: "smooth",
	block: "start",
	inline: "nearest",
}
//click events to scroll to the appropriate section
navAbout.addEventListener("click", e => scrollToSection(sectionAbout, scrollOffset));
navResume.addEventListener("click", e => scrollToSection(sectionResume, scrollOffset));
navProgramming.addEventListener("click", e => scrollToSection(sectionProgramming, scrollOffset));
navFooter.addEventListener("click", e => scrollToSection(sectionFooter, scrollOffset));
mNavAbout.addEventListener("click", e => scrollToSection(sectionAbout, mScrollOffset));
mNavResume.addEventListener("click", e => scrollToSection(sectionResume, mScrollOffset));
mNavProgramming.addEventListener("click", e => scrollToSection(sectionProgramming, mScrollOffset));
mNavFooter.addEventListener("click", e => scrollToSection(sectionFooter, mScrollOffset));
// click hamburger icon to toggle mobile navbar
mNavBtn.addEventListener("click", toggleMobileMenu);
// mixItUp.addEventListener("click", changeColorPalette);
// set hamburger menu to initially be closed (offscreen)
mNavbar.style.right = -mNavbarWidth + "px";

// function generateColorPalette() {
//     palette = {};
//     let red = Math.random() * 50 + 200;
//     let green = Math.random() * 50 + 200;
//     let blue = Math.random() * 50 + 200;

//     for (let i = 0; i < 5; i++) {
//         palette[i] = "rgb(" + red + ", " + green + ", " + blue + ")";
//         red -= 50;
//         green -= 50;
//         blue -= 50;
//     }

//     return palette;
// }

function scrollToSection(section, offset) {
    window.scrollTo({top: section.getBoundingClientRect().top + window.pageYOffset - offset, 
        behavior: "smooth",
    });
}

// open and close the hamburger menu (aka mobile navbar)
function toggleMobileMenu() {
	mNavbarWidth = mNavbar.clientWidth;
	if (mobileNavbarOpen()) {
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

// returns true of mobile navbar is currently open, false if closed
function mobileNavbarOpen() {
    if (parseFloat(mNavbar.style.right) >= 0) {
        return true;
    }
    return false;
}

// close mobile navbar if click outside of navbar when it's open
// (only if both mousedown and mouseup are outside of mobile navbar)
let mousedownTarget = null;

document.addEventListener('mousedown', e => mousedownTarget = e.target);

document.addEventListener('mouseup', e => {
    if (mobileNavbarOpen()) {
        if (!(hasParent(e.target, mNavbar) || hasParent(mousedownTarget, mNavbar))) {
            toggleMobileMenu();
        }
    }
});

function hasParent(child, node) {
    let parent = child;
    while (parent !== null) {
        if (parent === node) {
            return true;
        }
        parent = parent.parentNode;
    }
    return false;
}

// from https://stackoverflow.com/questions/2264072/detect-a-finger-swipe-through-javascript-on-the-iphone-and-android
// allow swiping to open and close hamburger menu on mobile
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