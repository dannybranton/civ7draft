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
  bans: string[];
  team1Picks: string[];
  team2Picks: string[];
  team_number: number,
  banning: boolean,
  onPickBan: (pickedId: string, teamNumber: number, banning: boolean) => void;
}

const Civilizations = ({team_number = 0, banning = false, onPickBan, bans, team1Picks, team2Picks}: CivilizationsProps) => {

  const handleClick = (event: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
    const element = event.target as HTMLImageElement;
    onPickBan(element.id, team_number, banning);
  }
  
  const getClasses = (id: string): string => {
    let classes = bans.includes(id) ? 'banned' : '';
    classes = team1Picks.includes(id) ? classes + 'team1pick' : classes;
    classes = team2Picks.includes(id) ? classes + 'team2pick' : classes;
    return classes;
  }

  return (
    <>
      <div id='civ_pool' className={`team-${team_number} ${banning ? 'banning' : ''}`}>
        <img id='achaemenidPersia' src={ achaemenidPersia } onClick={handleClick} className={getClasses('achaemenidPersia')}></img>
        <img id="aksumite" src={ aksumite } onClick={handleClick} className={getClasses('aksumite')}></img>
        <img id="assyrian" src={ assyrian } onClick={handleClick} className={getClasses('assyrian')}></img>
        <img id="carthaginian" src={ carthaginian } onClick={handleClick} className={getClasses('carthaginian')}></img>
        <img id="egyptian" src={ egyptian } onClick={handleClick} className={getClasses('egyptian')}></img>
        <img id="greek" src={ greek } onClick={handleClick} className={getClasses('greek')}></img>
        <img id="han" src={ han } onClick={handleClick} className={getClasses('han')}></img>
        <img id="khmer" src={ khmer } onClick={handleClick} className={getClasses('khmer')}></img>
        <img id="mauryan" src={ mauryan } onClick={handleClick} className={getClasses('mauryan')}></img>
        <img id="maya" src={ maya } onClick={handleClick} className={getClasses('maya')}></img>
        <img id="miss" src={ miss } onClick={handleClick} className={getClasses('miss')}></img>
        <img id="roman" src={ roman } onClick={handleClick} className={getClasses('roman')}></img>
        <img id="silla" src={ silla } onClick={handleClick} className={getClasses('silla')}></img>
        <img id="tongan" src={ tongan } onClick={handleClick} className={getClasses('tongan')}></img>

      </div>
    </>
  )
}

export default Civilizations
