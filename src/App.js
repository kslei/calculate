import React, { useState } from "react";
import Diagrams from "./components/Diagrams";
import Inputs from "./components/Inputs";
import "./styles/base/base.scss";

function App() {
  const [storage, setStorage] = useState(100);
  const [transfer, setTransfer] = useState(400);

  return (
    <div className="container">
      <Inputs storage={storage} setStorage={setStorage} transfer={transfer} setTransfer={setTransfer} />
      <Diagrams storage={storage} transfer={transfer} />
    </div>
  );
}

export default App;