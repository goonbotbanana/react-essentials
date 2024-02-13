import reactImg from "../../assets/react-core-concepts.png";
import "./Header.css";

const reactDescriptions = ["Fundamental", "Crucial", "Core"];

function genRandomInt(max) {
  let num = Math.floor(Math.random() * (max + 1)); // if max = 3, this returns a number 0-3
  console.log(`Integer generated: ${num}`);
  return num;
}

function Header() {
  // alternatively, a const can be made outside the return statement to hold the generated int
  // this makes the jsx code leaner, best practice

  const desc = reactDescriptions[genRandomInt(2)];

  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      {/* <p>
        {reactDescriptions[genRandomInt(2)]} React concepts you will need for
        almost any app you are going to build!
      </p> */}
      <p>
        {desc} React concepts you will need for almost any app you are going to
        build!
      </p>
    </header>
  );
}

export default Header;
