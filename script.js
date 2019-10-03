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

navAbout.addEventListener("click", e => sectionAbout.scrollIntoView(scrollOptions));
navResume.addEventListener("click", e => sectionResume.scrollIntoView(scrollOptions));
navProgramming.addEventListener("click", e => sectionProgramming.scrollIntoView(scrollOptions));
navFooter.addEventListener("click", e => sectionFooter.scrollIntoView(scrollOptions));
mNavAbout.addEventListener("click", e => sectionAbout.scrollIntoView(scrollOptions));
mNavResume.addEventListener("click", e => sectionResume.scrollIntoView(scrollOptions));
mNavProgramming.addEventListener("click", e => sectionProgramming.scrollIntoView(scrollOptions));
mNavFooter.addEventListener("click", e => sectionFooter.scrollIntoView(scrollOptions));
mNavBtn.addEventListener("click", toggleMobileMenu);
mNavbar.style.right = -mNavbarWidth + "px";

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