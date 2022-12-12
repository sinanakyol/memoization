import { useState } from "react";
import "./App.css";
import Header from "./components/Header";

function App() {
  const [number, setNumber] = useState(0);

  return (
    <div className="App">
      <Header number={number < 5 ? 0 : number} />
      <hr />

      <h1>{number}</h1>
      <button onClick={() => setNumber(number + 1)}>Click</button>
    </div>
  );
}

export default App;

// "number" her değiştiğinde "State" değiştiği için <div> içerisindeki elemanlar render edilir. Dolayısıyla <Header> da gereksiz yere render edilir. Bunu engellemek için React.memo kullanılır.
