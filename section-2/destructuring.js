const array = ["Pharit", "Smitasin"];

const firstName = array[0];
const lastName = array[1];

console.log(`${firstName} ${lastName}`);

// OR WE CAN DESTRUCTURE!

const [firstname, lastname] = ["Pharit", "Smitasin"];

console.log(`${firstname} ${lastname}`);

// destructuring with objects

const user = {
  age: 24,
  name: "Pharit",
};
//OR!
const { age, name: userName } = {
  age: 24,
  name: "Pharit",
};

console.log(userName);
