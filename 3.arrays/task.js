function compareArrays(arr1, arr2) {
  let result = arr1.length === arr2.length && arr1.every((item, idx) => item === arr2[idx]);
  return result; // boolean
}

function advancedFilter(arr) {
  let resultArr = arr.filter((positiveNumbers) => positiveNumbers > 0).filter((number) => number % 3 === 0).map((muliplicationTen) => muliplicationTen * 10);
  return resultArr; // array
}
