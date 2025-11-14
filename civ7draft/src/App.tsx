import { useState } from 'react'
import './App.css'

import { DraftDisplay, Leaders, Picks } from './modules/TwoVTwo';
//import { default as Sheets } from './Sheets';

function App() {

  return (
    <>
      {/* <Sheets></Sheets> */}
      <div id="the_draft">
        <DraftDisplay />
        <Leaders />
        <Picks />
      </div>
    </>
  )
}

export default App
