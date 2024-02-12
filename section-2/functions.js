// functions as values
function greeter(greetFn) {
  greetFn();
}

greeter(() => {
  console.log("Hello");
});

greeter(() => console.log("Hello again!"));

//functions defined inside functions