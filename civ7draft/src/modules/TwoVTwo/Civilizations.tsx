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

interface CivilizationsProps {
  team_number: number,
  banning: boolean,
  onPickBan: (pickedId: string, teamNumber: number, banning: boolean) => void;
}

const Civilizations = ({team_number = 0, banning = false, onPickBan}: CivilizationsProps) => {

  const handleClick = (event: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
    const element = event.target as HTMLImageElement;
    onPickBan(element.id, team_number, banning);
  }

  return (
    <>
      <div id='civ_pool' className={`team-${team_number} ${banning ? 'banning' : ''}`}>
        <img id='achaemenidPersia' src={ achaemenidPersia } onClick={handleClick}></img>
        <img id="aksumite" src={ aksumite } onClick={handleClick}></img>
        <img id="assyrian"  src={ assyrian } onClick={handleClick}></img>
        <img id="carthaginian"  src={ carthaginian } onClick={handleClick}></img>
        <img id="egyptian"  src={ egyptian } onClick={handleClick}></img>
        <img id="greek"  src={ greek } onClick={handleClick}></img>
        <img id="han"  src={ han } onClick={handleClick}></img>
        <img id="khmer"  src={ khmer } onClick={handleClick}></img>
        <img id="mauryan"  src={ mauryan } onClick={handleClick}></img>
        <img id="maya"  src={ maya } onClick={handleClick}></img>
        <img id="miss"  src={ miss } onClick={handleClick}></img>
        <img id="roman"  src={ roman } onClick={handleClick}></img>
        <img id="silla"  src={ silla } onClick={handleClick}></img>
        <img id="tongan"  src={ tongan } onClick={handleClick}></img>

      </div>
    </>
  )
}

export default Civilizations
