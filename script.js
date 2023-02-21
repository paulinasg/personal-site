// adding animation class to subheadings when clicked

const aboutMe = document.getElementById("about-me");
const aboutExp = document.getElementById("about-experience");
const aboutSkill = document.getElementById("about-skills");

aboutMe.onclick = function() {
  aboutMe.classList.add("animate-up");
  aboutExp.classList.add("animate-down");
  aboutSkill.classList.add("animate-down");
}