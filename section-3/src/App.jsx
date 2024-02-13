import CoreConcept from "./components/CoreConcept.jsx";
import Header from "./components/Header.jsx";
import { CORE_CONCEPTS } from "./data.js";

function App() {
  return (
    <div>
      {/* <Header />
      or write like this: */}
      <Header></Header>
      <main>
        <section id="core-concepts">
          <h2>Time to get started!</h2>
          <ul>
            {/* <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            /> */}

            <CoreConcept {...CORE_CONCEPTS[0]} />
            {/* spread operator pulls out all key value pairs from the object at index 0*/}
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
