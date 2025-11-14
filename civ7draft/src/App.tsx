import { useState } from 'react'
import './App.css'

import { Leaders, Picks } from './modules/TwoVTwo';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div id="the_draft">
        <Leaders />
        <Picks />
      </div>
    </>
  )
}

export default App
