import {  createContext, useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


const bulbContext = createContext();

export function BulbProvider({ children }) {
  const [bulbOn, setBulbOn] = useState(true);

  return <bulbContext.Provider value={{
    bulbOn: bulbOn,
    setBulbOn: setBulbOn
  }}>
    {children}
  </bulbContext.Provider>

}

function App() {

  return (
    <div>
      <BulbProvider>


        <LightBulb />

      </BulbProvider>

    </div >
  )
}


function LightBulb() {


  return <div>
    <BulbState />
    <ToggleBulbState />
  </div>

}

function BulbState() {
  const { bulbOn } = useContext(bulbContext);
  return (
    <div>
      <p>The bulb is {bulbOn ? 'on' : 'off'}</p>
    </div>
  )
}

function ToggleBulbState() {
  const { setBulbOn } = useContext(bulbContext);
  return (
    <div>
      <button onClick={() => setBulbOn(prev => !prev)}>toggle the bulb</button>
    </div>
  )
}

export default App
