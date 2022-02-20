function updateCode() {
  let iframe = document.getElementById("code-result").contentWindow.document;
  iframe.open();
  iframe.write(html.getValue() + "<style>" + css.getValue() +"</style>" + "<scri" + "pt>" + js.getValue() +"</scri" + "pt>"
);
  iframe.close();
}
ace.require("ace/ext/language_tools");
let html = ace.edit("html");
html.getSession().setMode("ace/mode/html");
html.setTheme("ace/theme/monokai");
html.setOptions({
  enableBasicAutocompletion: true,
  enableLiveAutocompletion:   true
});
html.setValue(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>  
<body>

</body> 
</html>
`);
ace.require("ace/ext/language_tools");
let css = ace.edit("css");
css.getSession().setMode("ace/mode/css");
css.setTheme("ace/theme/monokai");
css.setValue(`/* CSS */`);
css.setOptions({
  enableBasicAutocompletion: true,
  enableLiveAutocompletion:   true
});
ace.require("ace/ext/language_tools");
let js = ace.edit("js");
js.getSession().setMode("ace/mode/javascript");
js.setTheme("ace/theme/monokai");
js.setValue(`/* JS */`);
js.setOptions({
  enableBasicAutocompletion: true,
  enableLiveAutocompletion:   true
});
html.getSession().on("change", function () {
  updateCode();
});
css.getSession().on("change", function () {
  updateCode();
});
js.getSession().on("change", function () {
  updateCode();
});
function changeMode() {
  let themes = document.getElementById("themes");
  let themesVal = themes.value;
  html.setTheme(`ace/theme/${themesVal}`);
  css.setTheme(`ace/theme/${themesVal}`);
  js.setTheme(`ace/theme/${themesVal}`);
}
function playSong() {
  let selectedSong = document.getElementById("music-list").value;
  let songVal = document.getElementById(selectedSong);
  songVal.play();
}
function pauseSong() {
  let selectedSong = document.getElementById("music-list").value;
  let songVal = document.getElementById(selectedSong);
  songVal.pause();
}