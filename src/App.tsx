import { useState } from "react";

// components
import NavBar from "./components/NavBar"
import Contact from "./components/Contact";
import Company from "./components/Company";
import Project from "./components/Project";

const App = () => {
  const [active, setActive] = useState<number>(1);

  return (
    <div className="container">
      <NavBar active={active} />
      {active === 1 && <Contact setActive={setActive} />}
      {active === 2 && <Company setActive={setActive} />}
      {active === 3 && <Project setActive={setActive} />}
    </div>
  )
}

export default App
