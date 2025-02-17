import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  //let defaultvalue = 5;
  //UI mai useless hai, update hi nahi hoga

  let [counter, setCounter] = useState(15);

  const addValue = () => {
    //defaultvalue++;
    if (counter < 20){
      setCounter(counter + 1)
    }
    console.log("value added", counter);
  }

  const decValue = () => {
    if (counter >0){
      setCounter(counter - 1);
    }
    console.log("value decreased", counter);  }

  return (
    <>
      <h2>I'm doing this Myself</h2>
      <button>Counter Value : {counter} </button>
      <br />
      <br />
      <button
      onClick={addValue}>Add Value </button>
      <br />
      <br />
      <button
      onClick={decValue}>Decrease Value</button>
    </>
  )
}

export default App
