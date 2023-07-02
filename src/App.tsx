import { useState } from "react";

// components
import NavBar from "./components/NavBar"
import Contact from "./components/Contact";

const App = () => {
  const [active, setActive] = useState<number>(1);

  return (
    <div className="container">
      <NavBar active={active} />
      {active === 1 && <Contact setActive={setActive} />}
    </div>
  )
}

export default App
