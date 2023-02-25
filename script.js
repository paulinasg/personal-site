console.log("script.js loaded");

const MAX_HEIGHT_VISIBLE = "300px";

//getting elements from html
const aboutMe = document.getElementById("about-me");
const aboutExp = document.getElementById("about-experience");
const aboutSkill = document.getElementById("about-skills");

//changing height of subheadings when clicked - transitions in css
aboutMe.onclick = function() {
  document.getElementById("about-me-info").style.maxHeight = MAX_HEIGHT_VISIBLE;
  document.getElementById("about-experience-info").style.maxHeight = "0px";
  document.getElementById("about-skills-info").style.maxHeight = "0px";
}

aboutExp.onclick = function() {
    document.getElementById("about-me-info").style.maxHeight = "0px";
    document.getElementById("about-experience-info").style.maxHeight = MAX_HEIGHT_VISIBLE;
    document.getElementById("about-skills-info").style.maxHeight = "0px";
}

aboutSkill.onclick = function() {
    document.getElementById("about-me-info").style.maxHeight = "0px";
    document.getElementById("about-experience-info").style.maxHeight = "0px";
    document.getElementById("about-skills-info").style.maxHeight = MAX_HEIGHT_VISIBLE;
}