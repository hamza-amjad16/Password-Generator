import { useEffect, useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { FaCheck , FaClipboard } from 'react-icons/fa'
import './App.css'

function App() {
  const [pass , setpass] = useState("")
  const [length , setlength] = useState(6)
  const [Upper , setUpper] = useState(false)
  const [Lower , setLower] = useState(false)
  const [Num , setNum] = useState(false)
  const [Symbol , setSymbol] = useState(false)
  const [copied , setcopied] = useState(false)




const getpassword = () => {
  let str = ""
  let pass = ""
if(Upper){
str += "ABCDEFGHIJKLMNOPQTRSWXYZ"
}
if(Lower){
  str += "abcdefghijklmnopqtrswxyz"
}if(Num){
  str += 1234567890
}if(Symbol){
  str += "~!@#$%^&*}{[]|?+"
}

for(var i = 0 ; i < length ; i++){
  let getPass = Math.floor(Math.random() * str.length)
  let getChar = str.charAt(getPass)
  pass += getChar
}
  setpass(pass)
}

  useEffect(()=>{
    getpassword()
  },[length,Upper,Lower,Num,Symbol])
  return (
    <>
     
     <div className="password-generator">
  <div className="header">
    <h2>Password Generator</h2>
    
  </div>

  <div className="password-display">
    <h3>{pass}</h3>
    <CopyToClipboard text={pass} onCopy={() => setcopied(true)}>
      <button className="clipboard-btn">
        {copied ? <FaCheck /> : <FaClipboard />}
      </button>
    </CopyToClipboard>
  </div>

  <div className="controls">
    <div className="length-slider">
      <label htmlFor="length">Length: {length}</label>
      <input
        min={6}
        max={20}
        value={length}
        onChange={(e) => setlength(e.target.value)}
        type="range"
        id="length"
      />
    </div>

    <div className="checkboxes">
      <div>
        <input
          onChange={(e) => setUpper(e.target.checked)}
          type="checkbox"
        />
        <label htmlFor="">Upper Cases</label>
      </div>
      <div>
        <input
          onChange={(e) => setLower(e.target.checked)}
          type="checkbox"
        />
        <label htmlFor="">Lower Cases</label>
      </div>
      <div>
        <input
          onChange={(e) => setNum(e.target.checked)}
          type="checkbox"
        />
        <label htmlFor="">Numbers</label>
      </div>
      <div>
        <input
          onChange={(e) => setSymbol(e.target.checked)}
          type="checkbox"
        />
        <label htmlFor="">Symbols</label>
      </div>
    </div>
  </div>
</div>


         
     
    </>
  )
}

export default App
