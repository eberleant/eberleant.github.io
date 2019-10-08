const navMusic = document.getElementById("nav-music");
const navVideo = document.getElementById("nav-video");
const navFooter = document.getElementById("nav-contact");
const mNavMusic = document.getElementById("m-nav-music");
const mNavVideo = document.getElementById("m-nav-video");
const mNavFooter = document.getElementById("m-nav-contact");
const sectionMusic = document.getElementById("music");
const sectionVideo = document.getElementById("video");
const sectionFooter = document.getElementById("footer");

let scrollOffset = 35;
let mScrollOffset = 0;
const scrollOptions = {
    behavior: "smooth",
    block: "start",
    inline: "nearest",
}

navMusic.addEventListener("click", e => scrollToSection(sectionMusic, scrollOffset));
navVideo.addEventListener("click", e => scrollToSection(sectionVideo, scrollOffset));
navFooter.addEventListener("click", e => scrollToSection(sectionFooter, scrollOffset));
mNavMusic.addEventListener("click", e => scrollToSection(sectionMusic, mScrollOffset));
mNavVideo.addEventListener("click", e => scrollToSection(sectionVideo, mScrollOffset));
mNavFooter.addEventListener("click", e => scrollToSection(sectionFooter, mScrollOffset));

function scrollToSection(section, offset) {
    window.scrollTo({top: section.getBoundingClientRect().top + window.pageYOffset - offset, 
        behavior: "smooth",
    });
}