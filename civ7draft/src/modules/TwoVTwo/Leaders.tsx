import '../../styles/leaders.css';

import adaLogo from'../../assets/Leaders/Ada_Lovelace_(Civ7).png';
import aminaLogo from'../../assets/Leaders/Amina.png';

function Leaders({team_number = 0}) {

  return (
    <>
      <div>{team_number}</div>
      <div id='leader_pool' className={`team-${team_number}`}>
        <img src={ adaLogo }></img>
        <img src={ aminaLogo }></img>
      </div>
    </>
  )
}

export default Leaders
