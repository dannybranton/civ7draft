import '../../styles/leaders.css';

import type { DraftMeta, Bans, Picks } from '../../interfaces/draft/draft';
import { pickBanClasses } from '../../utilities/draft/draft';

import adaLogo from '../../assets/Leaders/Ada_Lovelace_(Civ7).png';
import aminaLogo from '../../assets/Leaders/Amina.png';
import ashokaConqueror from '../../assets/Leaders/AshokaConqueror.png';
import ashokaRenouncer from '../../assets/Leaders/AshokaRenouncer.png';
import augustus from '../../assets/Leaders/Augustus.png';
import benFranklin from '../../assets/Leaders/BenFranklin.png';
import catherine from '../../assets/Leaders/Catherine_the_Great.png';
import charlemagne from '../../assets/Leaders/Charlemagne.png';
import confucius from '../../assets/Leaders/Confucius.png';
import edwardTeach from '../../assets/Leaders/Edward_Teach_29.webp';
import friedrichBaroque from '../../assets/Leaders/FriedrichBaroque.webp';
import friedrichOblique from '../../assets/Leaders/FriedrichOblique.webp';
import ghengis from '../../assets/Leaders/Genghis_Khan_29.webp';
import harriet from '../../assets/Leaders/Harriet_Tubman_(Civ7).png';
import hatshepsut from '../../assets/Leaders/Hatshepsut_29.webp';
import himikohighshaman from '../../assets/Leaders/Himiko,_High_Shaman_(Civ7).png';
import himikowa from '../../assets/Leaders/himikowa.webp';
import ibn from '../../assets/Leaders/Ibn_Battuta_(Civ7).png';
import isabella from '../../assets/Leaders/Isabella_29.webp';
import joserizal from '../../assets/Leaders/joserizal.webp';
import lafayette from '../../assets/Leaders/Lafayette_29.webp';
import lakshmibai from '../../assets/Leaders/Lakshmibai_(Civ7).png';
import machiavelli from '../../assets/Leaders/Machiavelli_29.webp';
import napoleonemperor from '../../assets/Leaders/NapoleonEmperor.webp';
import napoleonrevolutionary from '../../assets/Leaders/NapoleonRev.webp';
import pachacuti from '../../assets/Leaders/Pachacuti_29.webp';
import sayyida from '../../assets/Leaders/Sayyida_al_Hurra_29.webp';
import simonbolivar from '../../assets/Leaders/Simón_Bolívar_(Civ7).png';
import tecumseh from '../../assets/Leaders/Tecumseh_29.webp';
import trungtrac from '../../assets/Leaders/Trung_Trac_29.webp';
import xerxes from '../../assets/Leaders/XerxesKoK.webp';
import xerxesAchaemenid from '../../assets/Leaders/Xerxes,_the_Achaemenid_(Civ7).png';

interface ILeadersProps {
  bans: Bans;
  enablePickBans: boolean;
  picks: Picks;
  draftMeta: DraftMeta;
  team_number: number,
  banning: boolean,
  onPickBan: (pickedId: string, teamNumber: number, banning: boolean) => void;
}

const Leaders = ({team_number = 0, banning = false, enablePickBans = false, onPickBan, bans, picks, draftMeta}: ILeadersProps) => {

  const handleClick = (event: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
    if (enablePickBans) {
      const element = event.target as HTMLImageElement;
      onPickBan(element.id, team_number, banning);
    }
  }

  const getClasses = (id: string): string => {
    return pickBanClasses(id, picks, bans, draftMeta, enablePickBans, '');
  }

  return (
    <>
      <div id='leader_pool' className={`team-${team_number} ${banning ? 'banning' : ''}`}>
        <img id="ada" src={ adaLogo } onClick={handleClick} className={getClasses('ada')}></img>
        <img id="amina" src={ aminaLogo } onClick={handleClick} className={getClasses('amina')} ></img>
        <img id="ashokaConqueror" src={ ashokaConqueror } onClick={handleClick} className={getClasses('ashokaConqueror')} ></img>
        <img id="ashokaRenouncer" src={ ashokaRenouncer } onClick={handleClick} className={getClasses('ashokaRenouncer')} ></img>
        <img id="augustus" src={ augustus } onClick={handleClick} className={getClasses('augustus')} ></img>
        <img id="benFranklin" src={ benFranklin } onClick={handleClick} className={getClasses('benFranklin')} ></img>
        <img id="catherine" src={ catherine } onClick={handleClick} className={getClasses('catherine')} ></img>
        <img id="charlemagne" src={ charlemagne } onClick={handleClick} className={getClasses('charlemagne')} ></img>
        <img id="confucius" src={ confucius } onClick={handleClick} className={getClasses('confucius')} ></img>
        <img id="edwardTeach" src={ edwardTeach } onClick={handleClick} className={getClasses('edwardTeach')} ></img>
        <img id="friedrichBaroque" src={ friedrichBaroque } onClick={handleClick} className={getClasses('friedrichBaroque')} ></img>
        <img id="friedrichOblique" src={ friedrichOblique } onClick={handleClick} className={getClasses('friedrichOblique')} ></img>
        <img id="ghengis" src={ ghengis } onClick={handleClick} className={getClasses('ghengis')} ></img>
        <img id="harriet" src={ harriet } onClick={handleClick} className={getClasses('harriet')} ></img>
        <img id="hatshepsut" src={ hatshepsut } onClick={handleClick} className={getClasses('hatshepsut')} ></img>
        <img id="himikohighshaman" src={ himikohighshaman } onClick={handleClick} className={getClasses('himikohighshaman')} ></img>
        <img id="himikowa" src={ himikowa } onClick={handleClick} className={getClasses('himikowa')} ></img>
        <img id="ibn" src={ ibn } onClick={handleClick} className={getClasses('ibn')} ></img>
        <img id="isabella" src={ isabella } onClick={handleClick} className={getClasses('isabella')} ></img>
        <img id="joserizal" src={ joserizal } onClick={handleClick} className={getClasses('joserizal')} ></img>
        <img id="lafayette" src={ lafayette } onClick={handleClick} className={getClasses('lafayette')} ></img>
        <img id="lakshmibai" src={ lakshmibai } onClick={handleClick} className={getClasses('lakshmibai')} ></img>
        <img id="machiavelli" src={ machiavelli } onClick={handleClick} className={getClasses('machiavelli')} ></img>
        <img id="napoleonemperor" src={ napoleonemperor } onClick={handleClick} className={getClasses('napoleonemperor')} ></img>
        <img id="napoleonrevolutionary" src={ napoleonrevolutionary } onClick={handleClick} className={getClasses('napoleonrevolutionary')} ></img>
        <img id="pachacuti" src={ pachacuti } onClick={handleClick} className={getClasses('pachacuti')} ></img>
        <img id="sayyida" src={ sayyida } onClick={handleClick} className={getClasses('sayyida')} ></img>
        <img id="simonbolivar" src={ simonbolivar } onClick={handleClick} className={getClasses('simonbolivar')} ></img>
        <img id="tecumseh" src={ tecumseh } onClick={handleClick} className={getClasses('tecumseh')} ></img>
        <img id="trungtrac" src={ trungtrac } onClick={handleClick} className={getClasses('trungtrac')} ></img>
        <img id="xerxes" src={ xerxes } onClick={handleClick} className={getClasses('xerxes')} ></img>
        <img id="xerxesAchaemenid" src={ xerxesAchaemenid } onClick={handleClick} className={getClasses('xerxesAchaemenid')} ></img>

      </div>
    </>
  )
}

export default Leaders
