//props are custom HTML attirbutes set on components
//props are merged into an object by React and passed to the jsx function

// function CoreConcept(props) {
//   return (
//     <li>
//       {/* <img src="..." alt="..." />
//       <h3>TITLE</h3>
//       <p>DESCRIPTION</p> */}
//       <img src={props.image} alt={props.title} />
//       <h3>{props.title}</h3>
//       <p>{props.description}</p>
//     </li>
//   );
// }

// destructured props parameter, the prop keys must match 
function CoreConcept({image, title, description}) {
  return (
    <li>
      {/* <img src="..." alt="..." />
      <h3>TITLE</h3>
      <p>DESCRIPTION</p> */}
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}

export default CoreConcept;
