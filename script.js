console.log("script.js loaded");

//getting elements from html
const aboutMe = document.getElementById("about-me");
const aboutExp = document.getElementById("about-experience");
const aboutSkill = document.getElementById("about-skills");

//hiding paragraph info blocks when page loads
document.getElementById("about-me-info").style.display = "none";
document.getElementById("about-experience-info").style.display = "none";
document.getElementById("about-skills-info").style.display = "none";

//adding animation class to subheadings when clicked
aboutMe.onclick = function() {
  console.log("aboutMe clicked");
  aboutMe.classList.add("animate-up");
  aboutExp.classList.add("animate-down");
  aboutSkill.classList.add("animate-down");
  document.getElementById("about-me-info").style.display = "block";
  document.getElementById("about-experience-info").style.display = "none";
  document.getElementById("about-skills-info").style.display = "none";
}

aboutExp.onclick = function() {
  aboutMe.classList.add("animate-up");
  aboutExp.classList.add("animate-up");
  aboutSkill.classList.add("animate-down");
  document.getElementById("about-me-info").style.display = "none";
  document.getElementById("about-experience-info").style.display = "block";
  document.getElementById("about-skills-info").style.display = "none";
}

aboutSkill.onclick = function() {
  aboutMe.classList.add("animate-up");
  aboutExp.classList.add("animate-up");
  aboutSkill.classList.add("animate-up");
  document.getElementById("about-me-info").style.display = "none";
  document.getElementById("about-experience-info").style.display = "none";
  document.getElementById("about-skills-info").style.display = "block";
}