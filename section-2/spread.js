const hobbies1 = ["cooking", "cleaning"];
const hobbies2 = ["eating", "partying"];

const mergedHobbies1 = [hobbies1, hobbies2]; //incorrect merging, just makes an array with 2 nested arrays
console.log(mergedHobbies1);
const mergedHobbies2 = [...hobbies1, ...hobbies2]; //using ... spread operator to merge
console.log(mergedHobbies2);

const user = {
  name: "pharit",
  age: 20,
};

console.log(user);

const extendedUser = {
  height: 6,
  ...user,
};

console.log(extendedUser);
