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

let scrollOffset = 35;
let mScrollOffset = 0;
const scrollOptions = {
    behavior: "smooth",
    block: "start",
    inline: "nearest",
}

navAbout.addEventListener("click", e => scrollToSection(sectionAbout, scrollOffset));
navResume.addEventListener("click", e => scrollToSection(sectionResume, scrollOffset));
navProgramming.addEventListener("click", e => scrollToSection(sectionProgramming, scrollOffset));
navFooter.addEventListener("click", e => scrollToSection(sectionFooter, scrollOffset));
mNavAbout.addEventListener("click", e => scrollToSection(sectionAbout, mScrollOffset));
mNavResume.addEventListener("click", e => scrollToSection(sectionResume, mScrollOffset));
mNavProgramming.addEventListener("click", e => scrollToSection(sectionProgramming, mScrollOffset));
mNavFooter.addEventListener("click", e => scrollToSection(sectionFooter, mScrollOffset));

function scrollToSection(section, offset) {
    window.scrollTo({top: section.getBoundingClientRect().top + window.pageYOffset - offset, 
        behavior: "smooth",
    });
}