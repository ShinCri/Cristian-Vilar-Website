//Header

const header = document.querySelector("header");
const div_logo = document.createElement("div");
const div_a = document.createElement("div");
div_logo.id = "headerLogo";
div_a.id = "headerOptions";
const a_logo = document.createElement("a");
const img = document.createElement("img");
a_logo.setAttribute("href", "/");
a_logo.setAttribute("target", "_top");
a_logo.classList.add("headerOptions")
img.setAttribute("src","/images/logo_the_bridge_short_white.png");
img.id="whitelogo";
img.setAttribute("alt","logothebridge");
img.classList.add("headerLogo");
a_logo.appendChild(img);
div_a.appendChild(a_logo);
header.appendChild(div_a);


const a_experiments = document.createElement("a");
a_experiments.setAttribute("href","./the_bridge.html");
a_experiments.setAttribute("target","_top");
a_experiments.innerText="The Bridge";
a_experiments.classList.add("headerOptions")
div_a.appendChild(a_experiments);

const a_webs = document.createElement("a");
a_webs.setAttribute("href","./webs.html");
a_webs.setAttribute("target","_top");
a_webs.innerText="Webs";
a_webs.classList.add("headerOptions")
div_a.appendChild(a_webs);

const a_programs = document.createElement("a");
a_programs.setAttribute("href","./programas.html");
a_programs.setAttribute("target","_top");
a_programs.innerText="Programas";
a_programs.classList.add("headerOptions")
div_a.appendChild(a_programs);

const a_games = document.createElement("a");
a_games.setAttribute("href","./juegos.html");
a_games.setAttribute("target","_top");
a_games.innerText="Juegos";
a_games.classList.add("headerOptions")
div_a.appendChild(a_games);






