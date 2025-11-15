import '../../styles/mementos.css';

import type { DraftMeta, Bans, Picks } from '../../interfaces/draft/draft';
import { isPickable, pickBanClasses } from '../../utilities/draft/draft';

import agincourt from '../../assets/Mementos/Agincourt_Arrowhead_29.webp';
import alltoqapu from '../../assets/Mementos/All-Toqapu.webp';
import altarset from '../../assets/Mementos/Altar_Set_29.webp';
import ankus from '../../assets/Mementos/Ankus_29.webp';
import antikythera from '../../assets/Mementos/Antikythera_Mechanism_29.webp';
import antimachiavel from '../../assets/Mementos/Anti-Machiavel_29.webp';
import artilleryman from '../../assets/Mementos/Artilleryman28Civ7.webp';
import baadalreins from '../../assets/Mementos/Baadal28Civ7.webp';
import ballestilla from '../../assets/Mementos/Ballestilla_29.webp';
import bicornehat from '../../assets/Mementos/Bicorne_Hat_29.webp';
import bifocals from '../../assets/Mementos/Bifocals_(Civ7).png';
import braceofpistols from '../../assets/Mementos/Brace_of_Pistols_29.webp';
import breastplate from '../../assets/Mementos/Breastplate_29.webp';
import brushscroll from '../../assets/Mementos/Brush_28Civ7.webp';

interface MementosProps {
  bans: Bans;
  enablePickBans: boolean;
  picks: Picks;
  proposedPickBan: string;
  draftMeta: DraftMeta;
  team_number: number,
  banning: boolean,
  onPickBan: (pickedId: string, teamNumber: number, banning: boolean) => void;
}

const Mementos = ({
    team_number = 0,
    banning = false,
    enablePickBans = false,
    onPickBan,
    bans,
    picks,
    proposedPickBan,
    draftMeta
  }: MementosProps) => {

  const handleClick = (event: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
    if (enablePickBans){
      const element = event.target as HTMLImageElement;
      if (isPickable(element.id, picks, bans, draftMeta)) {
        onPickBan(element.id, team_number, banning);
      }
    }
  }
  
  const getClasses = (id: string): string => {
    return pickBanClasses(id, picks, bans, draftMeta, enablePickBans, proposedPickBan, '');
  }

  return (
    <>
      <div id='memento_pool' className={`team-${team_number} ${banning ? 'banning' : ''}`}>
        <img id='agincourt' title="Agincourt Arrowhead" src={ agincourt } onClick={handleClick} className={getClasses('agincourt')}></img>
        <img id="alltoqapu" title="All-T'oqapu Tunic" src={ alltoqapu } onClick={handleClick} className={getClasses('alltoqapu')}></img>
        <img id="altarset" title="Altar Set" src={ altarset } onClick={handleClick} className={getClasses('altarset')}></img>
        <img id="ankus" title="Ankus" src={ ankus } onClick={handleClick} className={getClasses('ankus')}></img>
        <img id="antimachiavel" title="Anti-Machiavel" src={ antimachiavel } onClick={handleClick} className={getClasses('antimachiavel')}></img>
        <img id="antikythera" title="Antikythera" src={ antikythera } onClick={handleClick} className={getClasses('antikythera')}></img>
        <img id="artilleryman" title="Artilleryman's Gloves" src={ artilleryman } onClick={handleClick} className={getClasses('artilleryman')}></img>
        <img id='baadalreins' title="Baadal's Reins" src={ baadalreins } onClick={handleClick} className={getClasses('baadalreins')}></img>
        <img id="ballestilla" title="Ballestilla" src={ ballestilla } onClick={handleClick} className={getClasses('ballestilla')}></img>
        <img id="bicornehat" title="Bicorne Hat" src={ bicornehat } onClick={handleClick} className={getClasses('bicornehat')}></img>
        <img id="bifocals" title="Bifocals" src={ bifocals } onClick={handleClick} className={getClasses('bifocals')}></img>
        <img id="braceofpistols" title="Brace of Pistols" src={ braceofpistols } onClick={handleClick} className={getClasses('braceofpistols')}></img>
        <img id="breastplate" title="Breastplate" src={ breastplate } onClick={handleClick} className={getClasses('breastplate')}></img>
        <img id="brushscroll" title="Brush & Scroll" src={ brushscroll } onClick={handleClick} className={getClasses('brushscroll')}></img>
        

      </div>
    </>
  )
}

export default Mementos
