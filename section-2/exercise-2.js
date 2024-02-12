const arr = [1, 2, 3];

function transformToObjects(numberArray) {
  // Todo: Add your logic
  // should return an array of objects
  const newArr = numberArray.map((item) => ({ val: item }));

  return newArr;
}

console.log(transformToObjects(arr));
