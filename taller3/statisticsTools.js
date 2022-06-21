// const list1 = [100, 200, 300, 400, 500, 800000000, 500, 200, 500];

// function inputList() {
const inputList = () => {
  const averageArray = [];
  for (i = 0; i < 5; i++) {
    j = i + 1;
    let averageInput = document.getElementById("listInput" + j);
    averageArray[i] = parseInt(averageInput.value);
  }
  console.log(averageArray.sort());
  return averageArray;
};

// --------------------------------------------- Average ----------------------------
// let sumList1 = 0;

// for (let i = 0; i < list1.length; i++) {
//   sumList1 += list1[i];
// }

// console.log("sumList1", sumList1);

// const averageList1 = sumList1 / list1.length;

// console.log("averageList1", averageList1);

function calculateAritmethicAverage(list) {
  //   let sumList = 0;

  //   for (let i = 0; i < list.length; i++) {
  //     sumList += list[i];
  //   }
  const sumList = list.reduce(function (acumulateValue = 0, newElement) {
    return acumulateValue + newElement;
  });
  const averageList = sumList / list.length;

  return averageList;
}

// console.log("averageList", averageList);

function onClickAverage() {
  const resultAverage = calculateAritmethicAverage(inputList());
  const htmlText = document.getElementById("resultAverage");
  htmlText.innerText = "El promedio de los valores dados es: " + resultAverage;
}

// --------------------------------------- Media ------------------------------------------
// const selfList1 = parseInt(list1.length / 2);

function isPair(value) {
  if (value % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

function calculateMedia(list) {
  const halfList = parseInt(list.length / 2);
  let media;

  if (isPair(list.length)) {
    const element1 = list[halfList1];
    const element2 = list[halfList1 - 1];
    media = calculateAritmethicAverage([element1, element2]);
  } else {
    media = list[halfList];
  }

  return media;
}

function onClickMedia() {
  const resultMedia = calculateMedia(inputList());
  const htmlText = document.getElementById("resultMedia");
  htmlText.innerText = "La media de los valores dados es: " + resultMedia;
}

// --------------------------------------- Moda ------------------------------------------

function calculateModa(list) {
  const countList = {};

  list.map(function (item) {
    if (countList[item]) {
      countList[item] += 1;
    } else {
      countList[item] = 1;
    }
  });

  const arrayList = Object.entries(countList).sort(function (
    elementA,
    elementB
  ) {
    return elementA[1] - elementB[1];
  });

  const moda = arrayList[arrayList.length - 1];
  return moda;
}

function onClickModa() {
  const resultModa = calculateModa(inputList());
  const htmlText = document.getElementById("resultModa");
  htmlText.innerText = "La moda de los valores dados es: " + resultModa[0];
}
