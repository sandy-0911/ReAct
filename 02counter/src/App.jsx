import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, chaiCounter] = useState(10)
  //chaicounter ka aur kuch bhi rakh sakte hai name
  //let counter = 10;

  const addValue = () => {
    console.log("clicked",counter)
    // counter+=1
    chaiCounter(counter +1)
  }

  return (
   <>
   <h1>This is slow</h1>
   <h2>Counter Value : {counter}</h2>


   <button
   onClick={addValue}>Add Value {counter}</button>
   <br/><br></br>
   <button>Remove Value {counter}</button>
   <p> footer: {counter}</p>
   </>
  )
}

export default App
