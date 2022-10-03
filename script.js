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
// p2.innerHTML = "";

const input1 = document.querySelector("#presione1");
const input2 = document.querySelector("#presione2");
const btn = document.querySelector("#btnPresione");
const pResult = document.querySelector("#result");

function btnOnClick(event) {
  console.log("ejecutando la función");
  // console.log(event);
  // event.preventDefault();
  console.log(input1.value + input2.value);
  const value1 = parseInt(input1.value);
  const value2 = parseInt(input2.value);
  const result = value1 + value2;
  console.log(result);

  pResult.innerText =
    "Resultado: " + result + ", concatenado: " + input1.value + input2.value;
}

const btn2 = document.querySelector("#btnPresione2");
const form1 = document.querySelector("#form1");

btn2.addEventListener("click", btnOnClick);
// form1.addEventListener("submit", btnOnClick);
