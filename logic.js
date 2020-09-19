// var buttonLink = document.getElementById("linkToLinkedin");
var planner = $("#planner");

var weather = $("#weather");
var proj = $("#proj1");

planner.on("click", function (event) {
  event.preventDefault();
  window.open("https://siegelal7.github.io/Work-Day-Scheduler/", "_blank");
});
weather.on("click", function (event) {
  event.preventDefault();
  window.open("https://siegelal7.github.io/Weather-or-not/", "_blank");
});
proj.on("click", function (event) {
  event.preventDefault();
  window.open("https://siegelal7.github.io/Find-Your-Adventure/", "_blank");
});
