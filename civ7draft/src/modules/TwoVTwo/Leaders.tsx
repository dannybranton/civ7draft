import { useState } from 'react'

import adaLogo from'../../assets/Leaders/Ada_Lovelace_(Civ7).png';

function Leaders() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>Leaders</div>
      <img loading="lazy" title="ADA LOVELACE" src="https://assets.2k.com/1a6ngf98576c/7HBQeH6cuEmu6bxYShwuAK/515872ebe8564f3ca1c5a4fdf899a227/Leaders_400x240Ada-Lovelace.jpg" height="240" width="400" alt="ADA LOVELACE"></img>

      <img src={ adaLogo }></img>
    </>
  )
}

export default Leaders
