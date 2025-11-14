import { useState } from 'react'
import './App.css'

import { Leaders, Picks } from './modules/TwoVTwo';
//import { default as Sheets } from './Sheets';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Sheets></Sheets> */}
      <div id="the_draft">
        <Leaders />
        <Picks />
      </div>
    </>
  )
}

export default App
