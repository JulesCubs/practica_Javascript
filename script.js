console.log("hola mundo");

const h1 = document.querySelector("h1");
const p = document.querySelectorAll("p");
const p1 = document.querySelector(".parrafo");
const p2 = document.querySelector("#pid");
const p3 = document.getElementById("parrafo");
const p4 = document.getElementsByClassName("pid");
const input = document.querySelector("input");

console.log({ h1, p, p1, p2 });
console.log(h1, p, p1, p2);
console.log(input);

h1.innerHTML = "Titulo <br> principal";
h1.innerText = "Titulo <br> principal";
console.log(h1.getAttribute("pantalla")); //Esto es para acceder el atributo
// h1.setAttribute("class", "rojo");

h1.classList.add("rojo");
h1.classList.remove("verde");

input.value = "otro valor";

console.log(document.createElement("img"));

const el = document.createElement("img");
el.setAttribute(
  "src",
  "https://www.gamarod.com.ar/wp-content/uploads/2022/05/Conoce-todo-sobre-JavaScript-1-1024x512.jpg"
);
console.log(el);

p2.append(el);
p2.innerHTML = "";
