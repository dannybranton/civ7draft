import '../../styles/leaders.css';

import type { DraftMeta, Bans, Picks } from '../../interfaces/draft/draft';
import { isPickable, pickBanClasses } from '../../utilities/draft/draft';

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
  proposedPickBan: string;
  draftMeta: DraftMeta;
  team_number: number,
  banning: boolean,
  onPickBan: (pickedId: string, teamNumber: number, banning: boolean) => void;
}

const Leaders = ({team_number = 0, banning = false, enablePickBans = false, onPickBan, bans, picks, proposedPickBan, draftMeta}: ILeadersProps) => {

  const handleClick = (event: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
    if (enablePickBans) {
      const element = event.target as HTMLImageElement;
      if (isPickable(element.id, team_number, picks, bans, draftMeta)) {
        onPickBan(element.id, team_number, banning);
      }
    }
  }

  const getClasses = (id: string): string => {
    return pickBanClasses(id, team_number, picks, bans, draftMeta, enablePickBans, proposedPickBan, '');
  }

  return (
    <>
      <div id='leader_pool' className={`team-${team_number} ${banning ? 'banning' : ''} ${draftMeta.draftStatus}`}>
        <img id="ada" title="Ada Lovelace" src={ adaLogo } onClick={handleClick} className={getClasses('ada')}></img>
        <img id="amina" title="Amina" src={ aminaLogo } onClick={handleClick} className={getClasses('amina')} ></img>
        <img id="ashokaConqueror" title="Ashoka, World Conqueror" src={ ashokaConqueror } onClick={handleClick} className={getClasses('ashokaConqueror')} ></img>
        <img id="ashokaRenouncer" title="Ashoka, World Renouncer" src={ ashokaRenouncer } onClick={handleClick} className={getClasses('ashokaRenouncer')} ></img>
        <img id="augustus" title="Augustus" src={ augustus } onClick={handleClick} className={getClasses('augustus')} ></img>
        <img id="benFranklin" title="Benjamin Franklin" src={ benFranklin } onClick={handleClick} className={getClasses('benFranklin')} ></img>
        <img id="catherine" title="Catherine the Great" src={ catherine } onClick={handleClick} className={getClasses('catherine')} ></img>
        <img id="charlemagne" title="Charlemagne" src={ charlemagne } onClick={handleClick} className={getClasses('charlemagne')} ></img>
        <img id="confucius" title="Confucius" src={ confucius } onClick={handleClick} className={getClasses('confucius')} ></img>
        <img id="edwardTeach" title="Edward Teach" src={ edwardTeach } onClick={handleClick} className={getClasses('edwardTeach')} ></img>
        <img id="friedrichBaroque" title="Friedrich, Baroque" src={ friedrichBaroque } onClick={handleClick} className={getClasses('friedrichBaroque')} ></img>
        <img id="friedrichOblique" title="Friedrich, Oblique" src={ friedrichOblique } onClick={handleClick} className={getClasses('friedrichOblique')} ></img>
        <img id="ghengis" title="Genghis Khan" src={ ghengis } onClick={handleClick} className={getClasses('ghengis')} ></img>
        <img id="harriet" title="Harriet Tubman" src={ harriet } onClick={handleClick} className={getClasses('harriet')} ></img>
        <img id="hatshepsut" title="Hatshepsut" src={ hatshepsut } onClick={handleClick} className={getClasses('hatshepsut')} ></img>
        <img id="himikohighshaman" title="Himiko, High Shaman" src={ himikohighshaman } onClick={handleClick} className={getClasses('himikohighshaman')} ></img>
        <img id="himikowa" title="Himiko, Queen of Wa" src={ himikowa } onClick={handleClick} className={getClasses('himikowa')} ></img>
        <img id="ibn" title="Ibn Battuta" src={ ibn } onClick={handleClick} className={getClasses('ibn')} ></img>
        <img id="isabella" title="Isabella" src={ isabella } onClick={handleClick} className={getClasses('isabella')} ></img>
        <img id="joserizal" title="José Rizal" src={ joserizal } onClick={handleClick} className={getClasses('joserizal')} ></img>
        <img id="lafayette" title="Lafayette" src={ lafayette } onClick={handleClick} className={getClasses('lafayette')} ></img>
        <img id="lakshmibai" title="Lakshmibai" src={ lakshmibai } onClick={handleClick} className={getClasses('lakshmibai')} ></img>
        <img id="machiavelli" title="Machiavelli" src={ machiavelli } onClick={handleClick} className={getClasses('machiavelli')} ></img>
        <img id="napoleonemperor" title="Napoleon, Emperor" src={ napoleonemperor } onClick={handleClick} className={getClasses('napoleonemperor')} ></img>
        <img id="napoleonrevolutionary" title="Napoleon, Revolutionary" src={ napoleonrevolutionary } onClick={handleClick} className={getClasses('napoleonrevolutionary')} ></img>
        <img id="pachacuti" title="Pachacuti" src={ pachacuti } onClick={handleClick} className={getClasses('pachacuti')} ></img>
        <img id="sayyida" title="Sayyida al Hurra" src={ sayyida } onClick={handleClick} className={getClasses('sayyida')} ></img>
        <img id="simonbolivar" title="Simón Bolívar" src={ simonbolivar } onClick={handleClick} className={getClasses('simonbolivar')} ></img>
        <img id="tecumseh" title="Tecumseh" src={ tecumseh } onClick={handleClick} className={getClasses('tecumseh')} ></img>
        <img id="trungtrac" title="Trung Trac" src={ trungtrac } onClick={handleClick} className={getClasses('trungtrac')} ></img>
        <img id="xerxes" title="Xerxes, King of Kings" src={ xerxes } onClick={handleClick} className={getClasses('xerxes')} ></img>
        <img id="xerxesAchaemenid" title="Xerxes, the Achaemenid" src={ xerxesAchaemenid } onClick={handleClick} className={getClasses('xerxesAchaemenid')} ></img>

      </div>
    </>
  )
}

export default Leaders
