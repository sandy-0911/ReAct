import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: "hitesh",
    age: 21
  }

  let newArr = [1,2,3]

  return (
    <>
      <h1 className="text-black bg-green-400 p-4 rounded-xl mb-4">
      TailWind Test
    </h1>
    <Card username="Chai aur Code" btnText="Click Me"/>
    <Card username="Sandy" btnText="Visit Me"/>
    </>
  )
}

export default App
