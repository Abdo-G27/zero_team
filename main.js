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

// logo changer function ========================================

// let logo = document.getElementById("logo");
// let logoArr = ["./photos/logo1.png" , "./photos/logo4.png", "./photos/logo7.png" , "./photos/logo5.png", "./photos/logo6.jpg" ,"./photos/logo2.jpg", "./photos/logo8.png" , "./photos/logo3.jpg"];

// let i = 0;

// function logoChanger(){

//     logo.src=logoArr[i];

//     if(i==logoArr.length-1){
//       i=0;
//     }else{
//       i++;
//     }

// }

// setInterval(logoChanger,2000); //time


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
  
  logo.src="./photos/logo2.jpg";//
}

light.onclick = () => {
  mode.href = localStorage.getItem("2");
  localStorage.setItem('currentTheme', "2");

  logo.src="./photos/logo4.png";//
}

darkSide.onclick = () => {
  mode.href = localStorage.getItem("1");
  localStorage.setItem('currentTheme', "1");

  logo.src="./photos/logo2.jpg";//
}

lightSide.onclick = () => {
  mode.href = localStorage.getItem("2");
  localStorage.setItem('currentTheme', "2");

  logo.src="./photos/logo4.png";//
}

