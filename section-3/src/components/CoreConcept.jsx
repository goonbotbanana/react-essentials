//props are custom HTML attirbutes set on components
//props are merged into an object by React and passed to the jsx function

function CoreConcept(props) {
  return (
    <li>
      {/* <img src="..." alt="..." />
      <h3>TITLE</h3>
      <p>DESCRIPTION</p> */}
      <img src={props.img} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
}

export default CoreConcept;
