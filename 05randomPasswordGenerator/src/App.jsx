import { useState } from 'react'


function App() {
  const [Length, setLength] = useState(8)
  const [Number, setNumber] = useState(false)
  const [Char, setChar] = useState(false)
  cosnt [Password, setPassword] = useState("")
  return (
    <>
      <h1 className='text-4xl text-center text-white'>Password Generator</h1>
    </>
  )
}

export default App
