import { useState } from "react";

import NavBar from "./components/NavBar"

const App = () => {
  const [active, setActive] = useState<number>(1);
  return (
    <div className="container">
      <NavBar active={active} />
    </div>
  )
}

export default App
