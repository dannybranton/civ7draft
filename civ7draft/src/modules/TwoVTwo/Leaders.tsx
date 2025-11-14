import { useState } from 'react'

import '../../styles/leaders.css';

import adaLogo from'../../assets/Leaders/Ada_Lovelace_(Civ7).png';

function Leaders() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div id='leader_pool'>
        <img src={ adaLogo }></img>
      </div>
    </>
  )
}

export default Leaders
