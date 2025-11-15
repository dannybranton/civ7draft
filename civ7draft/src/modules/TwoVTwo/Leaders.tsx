import '../../styles/leaders.css';

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


function Leaders({team_number = 0, banning = false}) {

  return (
    <>
      <div id='leader_pool' className={`team-${team_number} ${banning ? 'banning' : ''}`}>
        <img src={ adaLogo }></img>
        <img src={ aminaLogo }></img>
        <img src={ ashokaConqueror }></img>
        <img src={ ashokaRenouncer }></img>
        <img src={ augustus }></img>
        <img src={ benFranklin }></img>
        <img src={ catherine }></img>
        <img src={ charlemagne }></img>
        <img src={ confucius }></img>
        <img src={ edwardTeach }></img>
        <img src={ friedrichBaroque }></img>
        <img src={ friedrichOblique }></img>
        <img src={ ghengis }></img>
        <img src={ harriet }></img>
        <img src={ hatshepsut }></img>
        <img src={ himikohighshaman }></img>
        <img src={ himikowa }></img>
        <img src={ ibn }></img>
        <img src={ isabella }></img>
        <img src={ joserizal }></img>
        <img src={ lafayette }></img>
        <img src={ lakshmibai }></img>
        <img src={ machiavelli }></img>
        <img src={ napoleonemperor }></img>
        <img src={ napoleonrevolutionary }></img>
        <img src={ pachacuti }></img>
        <img src={ sayyida }></img>
        <img src={ simonbolivar }></img>
        <img src={ tecumseh }></img>
        <img src={ trungtrac }></img>
        <img src={ xerxes }></img>
        <img src={ xerxesAchaemenid }></img>

      </div>
    </>
  )
}

export default Leaders
