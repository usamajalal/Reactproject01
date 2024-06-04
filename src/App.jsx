
import Youtube from "./youtube"
import { useState } from "react"
import './App.css';

function App() {
  // let counter = 15;
  const [counter, setCounter] = useState(15)

  const addValue = () => {
    setCounter((counter) =>
      counter + 1
    )
    console.log(counter);
  }

  const removeValue = () => {
    if (counter > 0) {
      setCounter((counter) =>
        counter - 1
      )
      console.log(counter);
    }
  }
  const resetValue = () => {
    setCounter((counter) =>
      counter = 15
    )
  }

  return (
    <>
      <h1>React App</h1>
      <h2>Counter value : {counter} </h2>
      <div className="button-container">
        <button onClick={addValue}
        >Add value</button>{" "}
        <button onClick={removeValue}
        >remove value </button>
        <button onClick={resetValue}
        >Reset value</button>
      </div>
      <p>Footer : {counter} </p>
    </>

  )
}

export default App
