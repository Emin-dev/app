import { useState } from "react";
import Home from './Home';

function App() {

  const [a, seta] = useState(1)

  return (
    <div className="app">
      <Home />
      <h1>{a}</h1>
      <button onClick={() => seta((t) => t * 10)}>+</button>
      <button onClick={() => seta((t) => t - 100)}>-</button>
    </div>
  );
}



export default App;
