const header = document.getElementById("header");
const headerBg = document.getElementById("header-bg");
const mNavBtn = document.getElementById("m-navbar-btn");
const mNavbar = document.getElementById("m-navbar");

let mNavbarWidth = mNavbar.clientWidth || 500;

headerBg.style.height = header.clientHeight + "px";
setInterval(() => headerBg.style.height = header.clientHeight + "px", 100);

// click hamburger icon to toggle mobile navbar
mNavBtn.addEventListener("click", toggleMobileMenu);

// set hamburger menu to initially be closed (offscreen)
mNavbar.style.right = -500 + "px";
alert(mNavbar.style.right);

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
        alert("close");
	} else {
		window.requestAnimationFrame(function(){
			mNavbar.setAttribute("style", "right: -" + mNavbarWidth + "px");
 			window.requestAnimationFrame(function(){
    			mNavbar.setAttribute("style", "right: 0");
  			});
		});
        alert("open")
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
        if (xDiff > 0 && !mobileNavbarOpen()) {
            toggleMobileMenu();
        } else if (xDiff < 0 && mobileNavbarOpen()) {
            toggleMobileMenu();
        }
    }
    /* reset values */
    xDown = null;
    yDown = null;                                             
};