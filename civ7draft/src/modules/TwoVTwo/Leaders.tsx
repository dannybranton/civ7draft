import '../../styles/leaders.css';

import adaLogo from'../../assets/Leaders/Ada_Lovelace_(Civ7).png';
import aminaLogo from'../../assets/Leaders/Amina.png';

function Leaders({team_number = 0, banning = false}) {

  return (
    <>
      <div id='leader_pool' className={`team-${team_number} ${banning ? 'banning' : ''}`}>
        <img src={ adaLogo }></img>
        <img src={ aminaLogo }></img>
      </div>
    </>
  )
}

export default Leaders
