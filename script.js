const navAbout = document.getElementById("nav-about");
const navResume = document.getElementById("nav-resume");
const navProgramming = document.getElementById("nav-programming");
const navFooter = document.getElementById("nav-contact");
const sectionAbout = document.getElementById("about");
const sectionResume = document.getElementById("resume");
const sectionProgramming = document.getElementById("programming");
const sectionFooter = document.getElementById("footer");
const resumeDownload = document.getElementById("resume-dl");
const header = document.getElementById("header");
const headerBg = document.getElementById("header-bg");
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