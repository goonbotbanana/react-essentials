// function TabButton(props) {
//   return (
//     <li>
//         //.children refers to the text wrapped by the TabButton components
//       <button>{props.children}</button>
//     </li>
//   );
// }

// same thing using destructuring
function TabButton({ children, onSelect }) {
  console.log("tabButton component executed");
  return (
    <li>
      {/* // children refers to the text wrapped by the TabButton components */}
      <button onClick={onSelect}>{children}</button>
    </li>
  );
}

export default TabButton;
