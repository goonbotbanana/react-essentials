const hobbies = ["cooking", "reading", "coding", "gaming", "travelling"];

hobbies.forEach((element) => {
  console.log(element);
});

hobbies.push("swimming");
console.log(hobbies);

const index = hobbies.findIndex((item) => {
  return item === "cooking";
});
const index2 = hobbies.findIndex((item) => item === "reading");

console.log(index);
console.log(index2);
