/*
Author: Zuleyma Cruz Duarte
Date: 09/11/24
File Name: script.js
*/

Hamburger menu function
function hamburger() {
var menu = document.getElementById("menu-links");
if (menu.style.display === "block") {
menu.style.display = "none";
} else {
menu.style.display = "block";
}
}