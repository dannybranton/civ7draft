import { useState } from 'react'

import adaLogo from'../../assets/Leaders/Ada_Lovelace_(Civ7).png';

function Leaders() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>Leaders</div>
      <img src={ adaLogo }></img>
    </>
  )
}

export default Leaders
