import { useState } from 'react'
import './App.css'

import { Leaders, Picks } from './modules/TwoVTwo';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Leaders />
      <Picks />
    </>
  )
}

export default App
