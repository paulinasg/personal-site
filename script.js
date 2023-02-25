console.log("script.js loaded");

const MAX_HEIGHT_VISIBLE = "300px";

//getting elements from html
const aboutMe = document.getElementById("about-me");
const aboutExp = document.getElementById("about-experience");
const aboutSkill = document.getElementById("about-skills");
const aboutMeInfo = document.getElementById("about-me-info");
const aboutExpInfo = document.getElementById("about-experience-info");
const aboutSkillInfo = document.getElementById("about-skills-info");

//changing height of subheadings when clicked - transitions in css
aboutMe.onclick = function() {
    const isTargetVisible = aboutMeInfo.style.maxHeight === MAX_HEIGHT_VISIBLE;
    const targetMaxHeight = isTargetVisible ? "0px" : MAX_HEIGHT_VISIBLE;
    aboutMeInfo.style.maxHeight = targetMaxHeight;
    aboutExpInfo.style.maxHeight = "0px";
    aboutSkillInfo.style.maxHeight = "0px";
}

aboutExp.onclick = function() {
    const isTargetVisible = aboutExpInfo.style.maxHeight === MAX_HEIGHT_VISIBLE;
    const targetMaxHeight = isTargetVisible ? "0px" : MAX_HEIGHT_VISIBLE;
    aboutExpInfo.style.maxHeight = targetMaxHeight;
    aboutMeInfo.style.maxHeight = "0px";
    aboutSkillInfo.style.maxHeight = "0px";
}

aboutSkill.onclick = function() {
    const isTargetVisible = aboutSkillInfo.style.maxHeight === MAX_HEIGHT_VISIBLE;
    const targetMaxHeight = isTargetVisible ? "0px" : MAX_HEIGHT_VISIBLE;
    aboutSkillInfo.style.maxHeight = targetMaxHeight;
    aboutExpInfo.style.maxHeight = "0px";
    aboutMeInfo.style.maxHeight = "0px";
}