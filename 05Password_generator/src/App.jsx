import { useState, useCallback } from 'react'


function App() {


  const [length, setlength] = useState(8);
  const [numbersAllowed, setNumberAllowed] = useState(false);
  const [charactersAllowed, setcharactersAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numbersAllowed) str += "0123456789";
    if (charactersAllowed) str += "!@#$%^&*()_+|";

    for (let i = 1; i <= array.length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass = str.charAt(char)
    }
    setPassword(pass)


  }, [length, numbersAllowed, charactersAllowed, setPassword])

  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen bg-gray-900">
        <div className="shadow-lg rounded-xl px-6 py-6 text-orange-400 bg-gradient-to-r from-gray-800 to-gray-900 w-full max-w-md">

          <h2 className="text-white text-center text-xl font-semibold mb-4">Password Generator</h2>


          <div className="flex items-center bg-gray-700 rounded-lg overflow-hidden shadow-md mb-4">
            <input
              type="text"
              value={password}
              className="outline-none w-full py-2 px-4 bg-transparent text-white placeholder-gray-400"
              placeholder="Generated password"
              readOnly
            />
            <button className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 transition-all duration-200">
              Copy
            </button>
          </div>
          <div className="flex items-center justify-between text-sm text-white">
            <label>Password Length: {length}</label>
            <input
              type="range"
              max={100}
              value={length}
              className="cursor-pointer w-full ml-2"
              onChange={(e) => { setlength(e.target.value) }}
            />
          </div>
        </div>
      </div>


    </>
  )
}

export default App
