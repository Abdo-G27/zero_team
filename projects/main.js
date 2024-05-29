// sidebar control ============================================

let menu = document.getElementById("menu");
let close = document.getElementById("close");
let sidebar = document.querySelector(".sidebar");
let content = document.querySelector(".content");

menu.onclick =()=>{
   sidebar.style.display="block";
   content.style.filter="blur(5px)";
}

close.onclick =()=>{
   sidebar.style.display="none";
   content.style.filter="blur()";
}


// modes =========================================================

let mode = document.querySelector(".mode");
let dark = document.querySelector(".dark");
let light = document.querySelector(".light");
let darkSide = document.querySelector("#dark");
let lightSide = document.querySelector("#light");

localStorage.setItem("1", "dark.css");
localStorage.setItem("2", "light.css");

//كود جبن

// document.addEventListener('DOMContentLoaded', (event) => {

//     let currentTheme = localStorage.getItem('currentTheme');

//     if (currentTheme) {
//       mode.href = localStorage.getItem(currentTheme);
//     }

// });

dark.onclick = () => {
  mode.href = localStorage.getItem("1");
  localStorage.setItem('currentTheme', "1");
}

light.onclick = () => {
  mode.href = localStorage.getItem("2");
  localStorage.setItem('currentTheme', "2");
}

darkSide.onclick = () => {
  mode.href = localStorage.getItem("1");
  localStorage.setItem('currentTheme', "1");
}

lightSide.onclick = () => {
  mode.href = localStorage.getItem("2");
  localStorage.setItem('currentTheme', "2");
}

