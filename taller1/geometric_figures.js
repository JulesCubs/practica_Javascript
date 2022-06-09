//Codigo del cuadrado
console.group("Cuadrado");
// const squareSide = 5;
// console.log("Los lados del cuadrado miden: " + squareSide + " cm");

const squarePerimeter = (squareSide) => squareSide * 4;
// console.log("el perimetro del cuadrado mide: " + squarePerimeter + " cm");

const squareArea = (squareSide) => squareSide * squareSide;
// console.log("el area del cuadrado mide: " + squareArea + " cm^2");
console.groupEnd();

//Codigo del triángulo
console.group("Triangulo");
// const triangleSide1 = 6;
// const triangleSide2 = 6;
// const triangleBase = 4;
// const triangleHigh = 5.5;

// console.log(
//   "Los lados del triangulo miden: " +
//     triangleSide1 +
//     " cm, " +
//     triangleSide2 +
//     " cm, y " +
//     triangleBase +
//     " cm"
// );

// console.log("La altura del triangulo es: " + triangleHigh + " cm");

const trianglePerimeter = (triangleSide1, triangleSide2, triangleBase) =>
  triangleSide1 + triangleSide2 + triangleBase;
// console.log("el perimetro del cuadrado mide: " + trianglePerimeter + " cm");

const triangleArea = (triangleBase, triangleHigh) =>
  (triangleBase * triangleHigh) / 2;
// console.log("el area del cuadrado mide: " + triangleArea + " cm^2");

console.groupEnd();

//Codigo del circulo
console.group("Circulo");
// const circleRadio = 4;
// console.log("El radio del circulo mide: " + circleRadio + " cm");

const circleDiameter = (circleRadio) => circleRadio * 2;
// console.log("el diametro del circulo mide: " + circleDiameter + " cm");

const pi = Math.PI;
console.log("PI mide: " + pi);

const circlePerimeter = (circleRadio) => {
  const diameter = circleDiameter(circleRadio);
  return pi * diameter;
};
// console.log("el perimetro del circulo mide: " + circlePerimeter + " cm");

const circleArea = (circleRadio, pi) => pi * (circleRadio * circleRadio);
// console.log("el area del circulo mide: " + circleArea + " cm^2");
console.groupEnd();

//Interacción con HTML

function calculateSquarePerimeter() {
  const input = document.getElementById("squareInput");
  const value = input.value;

  const perimeter = squarePerimeter(value);
  alert("El perimetro del cuadrado es: " + perimeter);
}

function calculateSquareArea() {
  const input = document.getElementById("squareInput");
  const value = input.value;

  const area = squareArea(value);
  alert("El area del cuadrado es: " + area);
}

function calculateTrianglePerimeter() {
  const input1 = document.getElementById("triangleInput1");
  const value1 = input1.value;
  const input2 = document.getElementById("triangleInput2");
  const value2 = input2.value;
  const inputBase = document.getElementById("triangleInputBase");
  const valueBase = inputBase.value;

  const perimeter = trianglePerimeter(value1, value2, valueBase);
  alert("El perimetro del triangulo es: " + perimeter);
}

function calculateTriangleArea() {
  const inputBase = document.getElementById("triangleInputBase");
  const valueBase = inputBase.value;
  const inputHigh = document.getElementById("triangleInputHigh");
  const valueHigh = inputHigh.value;

  const area = triangleArea(valueBase, valueHigh);
  alert("El area del triangulo es: " + area);
}

function calculateIsoTriangleHigh() {
  const input1 = document.getElementById("triangleInput1");
  const value1 = input1.value;
  const input2 = document.getElementById("triangleInput2");
  const value2 = input2.value;
  if (value1 === value2) {
    const inputBase = document.getElementById("triangleInputBase");
    const valueBase = inputBase.value / 2;
    const highness = Math.sqrt(value1 ** 2 + valueBase ** 2);
    alert("La altura del triangulo isosceles es: " + highness);
  } else {
    alert(
      "Este no es un triangulo isosceles el lado a debe ser igual a lado b"
    );
  }
}

function calculateCircleDiameter() {
  const input = document.getElementById("circleInput");
  const value = input.value;

  const diameter = circleDiameter(value);
  alert("El diametro del circulo es: " + diameter);
}

function calculateCirclePerimeter() {
  const input = document.getElementById("circleInput");
  const value = input.value;

  const perimeter = circlePerimeter(value);
  alert("El perimetro del circulo es: " + perimeter);
}

function calculateCircleArea() {
  const input = document.getElementById("circleInput");
  const value = input.value;

  const area = circleArea(value, pi);
  alert("El area del cuadrado es: " + area);
}
