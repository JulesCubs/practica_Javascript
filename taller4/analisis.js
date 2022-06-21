// General media
const salariesCol = colombia.map(function (person) {
  return person.salary;
});

const salariesColSort = salariesCol.sort(function (salaryA, salaryB) {
  return salaryA - salaryB;
});

// Util or helpers functions

function isPair(number) {
  return number % 2 === 0;
}

function calculateAritmethicAverage(list) {
  const sumList = list.reduce(function (acumulateValue = 0, newElement) {
    return acumulateValue + newElement;
  });
  const averageList = sumList / list.length;

  return averageList;
}

function mediaSalaries(list) {
  const half = parseInt(list.length / 2);
  let media;

  if (isPair(list.length)) {
    const halfPerson1 = list[half - 1];
    const halfPerson2 = list[half];
    media = calculateAritmethicAverage([halfPerson1, halfPerson2]);
    return media;
  } else {
    const halfPerson = list[half];
    return halfPerson;
  }
}

const generalMediaCol = mediaSalaries(salariesColSort);

// Top media 10%
const spliceStart = (salariesColSort.length * 90) / 100;
const spliceCount = salariesColSort.length - spliceStart;
const salariesColTop10 = salariesColSort.splice(spliceStart, spliceCount);

console.log({ salariesColTop10 });

const generalMediaTop = mediaSalaries(salariesColTop10);

console.log({ generalMediaCol, generalMediaTop });
