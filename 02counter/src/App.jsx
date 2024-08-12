import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, chaiCounter] = useState(6)
  //chaicounter ka aur kuch bhi rakh sakte hai name
  //let counter = 10;

  const addValue = () => {
    console.log("clicked", counter)
    // counter+=1
    if (counter < 20) 
      { 
        chaiCounter(prevCounter => prevCounter + 1)
        chaiCounter(prevCounter => prevCounter + 1)
        chaiCounter(prevCounter => prevCounter + 1)
        chaiCounter(prevCounter => prevCounter + 1)
        chaiCounter(prevCounter => prevCounter + 1)

       }

  }



  const decreaseValue = () => {
    if (counter > 0) { chaiCounter(counter - 1) }

  }

  return (
    <>
      <h1>This is slow</h1>
      <h2>Counter Value : {counter}</h2>


      <button
        onClick={addValue}>Add Value </button>
      <br /><br></br>
      <button onClick={decreaseValue}>Remove Value </button>
      <p>Very Very Slow</p>
    </>
  )
}

export default App
