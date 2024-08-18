import { useState, useCallback } from 'react'


function App() {
  const [Length, setLength] = useState(8)
  const [Number, setNumber] = useState(false)
  const [Char, setChar] = useState(false)
  const [Password, setPassword] = useState("")

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (Number) str += "0123456789"
    if (Char) str += "!@#$%^&*()_+=-{}[]~`"

    for (let i = 1; i < array.length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)

      pass = str.charAt(char)
      
    }

    setPassword(pass)
  }, [Length, Number, Char, setPassword])

  


  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800'>TEST</div>
    </>
  )
}

export default App
