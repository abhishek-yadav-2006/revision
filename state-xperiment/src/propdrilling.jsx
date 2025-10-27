import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
       
        <LightBulb/>
       
       
    </div >
  )
}


function LightBulb() {
   const [bulbOn, setBulbOn] = useState(true);

    return <div>
      <BulbState bulbOn={bulbOn} />
      <ToggleBulbState setBulbOn={setBulbOn} />
    </div>

}

function BulbState({ bulbOn }) {
   return (
    <div>
      <p>The bulb is {bulbOn ? 'on' : 'off'}</p>
    </div>
   )
}

function ToggleBulbState({ setBulbOn }) {
    return ( 
    <div>
      <button onClick={() => setBulbOn(prev => !prev)}>toggle the bulb</button>
    </div> 
    )
}

export default App
