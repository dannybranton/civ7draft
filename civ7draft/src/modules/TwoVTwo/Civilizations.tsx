import '../../styles/civilizations.css';

import achaemenidPersia from '../../assets/Civilizations/Achaemenid_Persian_29.webp';
import aksumite from '../../assets/Civilizations/Aksumite_29.webp';
import assyrian from '../../assets/Civilizations/Assyrian_29.webp';
import carthaginian from '../../assets/Civilizations/Carthaginian_29.webp';
import egyptian from '../../assets/Civilizations/Egyptian_29.webp';
import greek from '../../assets/Civilizations/Greek_29.webp';
import han from '../../assets/Civilizations/Han_(Civ7).png';
import khmer from '../../assets/Civilizations/Khmer_29.webp';
import mauryan from '../../assets/Civilizations/Mauryan_29.webp';
import maya from '../../assets/Civilizations/Maya_29.webp';
import miss from '../../assets/Civilizations/Mississippian_29.webp';
import roman from '../../assets/Civilizations/Roman_29.webp';
import silla from '../../assets/Civilizations/Silla_29.webp';
import tongan from '../../assets/Civilizations/Tongan_29.webp';

function Civilizations({team_number = 0, banning = false}) {

  return (
    <>
      <div id='leader_pool' className={`team-${team_number} ${banning ? 'banning' : ''}`}>
        <img src={ achaemenidPersia }></img>
        <img src={ aksumite }></img>
        <img src={ assyrian }></img>
        <img src={ carthaginian }></img>
        <img src={ egyptian }></img>
        <img src={ greek }></img>
        <img src={ han }></img>
        <img src={ khmer }></img>
        <img src={ mauryan }></img>
        <img src={ maya }></img>
        <img src={ miss }></img>
        <img src={ roman }></img>
        <img src={ silla }></img>
        <img src={ tongan }></img>

      </div>
    </>
  )
}

export default Civilizations
