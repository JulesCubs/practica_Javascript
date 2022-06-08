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
// console.group("Circulo");
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
