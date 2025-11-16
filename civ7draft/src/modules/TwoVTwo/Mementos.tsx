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
import chakra from '../../assets/Mementos/Chakra_29.webp';
import chalcedony from '../../assets/Mementos/Chalcedony_Seal_29.webp';
import chanda from '../../assets/Mementos/Chanda-mahasena_29.webp';
import clipeus from '../../assets/Mementos/Clipeus_Virtutis_29.webp';
import colada from '../../assets/Mementos/Colada_28Civ7.webp';
import complaint from '../../assets/Mementos/Complaint_to_Ea-n28Civ7.webp';
import corona from '../../assets/Mementos/Corona_Civica_29.webp';
import corpus from '../../assets/Mementos/Corpus_Juris_Civilis_(Civ7).png';
import crown from '../../assets/Mementos/Crown_of_Napoleon_29.webp';
import davalos from '../../assets/Mementos/Davalos_Medal_29.webp';
import dellarte from '../../assets/Mementos/Dell28Civ7.webp';
import dhal from '../../assets/Mementos/Dhal_29.webp';
import diamond from '../../assets/Mementos/Diamond_Throne_29.webp';
import discorsi from '../../assets/Mementos/Discorsi_sopra_Livio_29.webp';
import dongson from '../../assets/Mementos/Dong_Son_Drum_(Civ7).png';
import dotaku from '../../assets/Mementos/Dotaku28Civ7.webp';
import eagle from '../../assets/Mementos/Eagle_Banner_(Civ7).png';
import equestrian from '../../assets/Mementos/Equestrian_Figure_(Civ7).png';
import falsebeard from '../../assets/Mementos/False_Beard_29.webp';
import figurehead from '../../assets/Mementos/Figurehead_of_the_Queen_Anne28Civ7.webp';
import flag from '../../assets/Mementos/Flag_of_Jhansi_29.webp';
import flute from '../../assets/Mementos/Flute_29.webp';
import forget from '../../assets/Mementos/Forget-me-not_29.webp';
import garuda from '../../assets/Mementos/Garuda_Statue_29.webp';
import glass from '../../assets/Mementos/Glass_Armonica_29.webp';
import globus from '../../assets/Mementos/Globus_Cruciger_29.webp';
import goldsapphire from '../../assets/Mementos/Gold_28Civ7.webp';
import goldfluted from '../../assets/Mementos/Gold_Fluted_Phiale_29.webp';
import goldsnuff from '../../assets/Mementos/Gold_Snuff_Box_29.webp';
import goldensceptre from '../../assets/Mementos/Golden_Sceptre_29.webp';
import goldenseal from '../../assets/Mementos/Golden_Seal_Stone_29.webp';
import greatimperial from '../../assets/Mementos/Great_Imperial_Crown_29.webp';
import greencolonel from '../../assets/Mementos/Green_Colonels_Jacket_(Civ7).png';
import groma from '../../assets/Mementos/Groma_29.webp';
import hermione from '../../assets/Mementos/Hermione_Model_29.webp';
import iiprincipe from '../../assets/Mementos/Il_Principe_29.webp';
import imago from '../../assets/Mementos/Imago_Mundi_29.webp';
import incense from '../../assets/Mementos/Incense_Censer_29.webp';
import inscribed from '../../assets/Mementos/Inscribed_Sling_Bullet_29.webp';
import joyeuse from '../../assets/Mementos/Joyeuse_29.webp';
import kiem from '../../assets/Mementos/Kiem_29.webp';
import kite from '../../assets/Mementos/Kite_28Civ7.webp';
import krone from '../../assets/Mementos/Krone_von_Friedrich_I_29.webp';
import kusanagi from '../../assets/Mementos/Kusanagi_no_Tsurugi_29.webp';
import kwalkwali from '../../assets/Mementos/Kwalkwali_29.webp';
import lantern from '../../assets/Mementos/Lantern_29.webp';
import legion from '../../assets/Mementos/Legion_d28Civ7.webp';
import letter from '../../assets/Mementos/Letter_to_Adrienne_29.webp';
import letterjamaica from '../../assets/Mementos/Letter_to_Jamaica_29.webp';
import lion from '../../assets/Mementos/Lion_Capital_29.webp';
import lotus from '../../assets/Mementos/Lotus_Blossom_29.webp';
import lydian from '../../assets/Mementos/Merchant28Civ7.webp';
import mascapaycha from '../../assets/Mementos/Mascapaycha_29.webp';
import medicine from '../../assets/Mementos/Medicine_Chest_29.webp';
import merchant from '../../assets/Mementos/Merchant28Civ7.webp';
import noli from '../../assets/Mementos/Noli_Me_T28Civ7.webp';
import noteg from '../../assets/Mementos/Note_G_(Civ7).png';
import ophthalmoscope from '../../assets/Mementos/Ophthalmoscope_29.webp';
import order from '../../assets/Mementos/Order_of_the_Black_Eagle_Badge_29.webp';
import padron from '../../assets/Mementos/Padr28Civ7.webp';
import paiza from '../../assets/Mementos/Paiza_29.webp';
import piano from '../../assets/Mementos/Piano_29.webp';
import pochteca from '../../assets/Mementos/Pochteca_Backpack_29.webp';
import portrait from '../../assets/Mementos/Portrait_of_Josephine_29.webp';
import potemkin from '../../assets/Mementos/Potemkins_Sword-Knot_(Civ7).png';
import poteskwate from '../../assets/Mementos/Poteskwate_29.webp';
import punch from '../../assets/Mementos/Punch_Cards_29.webp';
import queen from '../../assets/Mementos/Queen28Civ7.webp';
import rawani from '../../assets/Mementos/Rawani_29.webp';
import royalur from '../../assets/Mementos/Royal_Game_of_Ur_29.webp';
import royalmace from '../../assets/Mementos/Royal_Mace_29.webp';
import saddle from '../../assets/Mementos/Saddle_29.webp';
import sakaki from '../../assets/Mementos/Sakaki_Branch_29.webp';
import satchel from '../../assets/Mementos/Satchel_29.webp';
import scythianbattle from '../../assets/Mementos/Scythian_Battle-Axe_(Civ7).png';
import shak from '../../assets/Mementos/Shak3F_29.webp';
import shisa from '../../assets/Mementos/Shisa_Necklace_29.webp';
import sidearm from '../../assets/Mementos/Sidearm_29.webp';
import silk from '../../assets/Mementos/Silk_Uttariya_29.webp';
import sulde from '../../assets/Mementos/Sulde_29.webp';
import sword from '../../assets/Mementos/Sword_of_Brennus_29.webp';
import takoba from '../../assets/Mementos/Takoba_29.webp';
import tencendur from '../../assets/Mementos/Tencendur_29.webp';
import analects from '../../assets/Mementos/The_Analects_29.webp';
import artofwar from '../../assets/Mementos/The_Art_of_War_29.webp';
import rihla from '../../assets/Mementos/The_Rihla_29.webp';
import travels from '../../assets/Mementos/The_Travels_of_Marco_Polo_29.webp';
import topayauri from '../../assets/Mementos/Topayauri_(Civ7).png';
import traveller from '../../assets/Mementos/Traveller28Civ7.webp';
import treaty from '../../assets/Mementos/Treaty_of_Kadesh_29.webp';
import tricolor from '../../assets/Mementos/Tricolor_Cockade_29.webp';
import uraeus from '../../assets/Mementos/Uraeus_29.webp';
import voltaire from '../../assets/Mementos/Voltaire28Civ7.webp';
import walking from '../../assets/Mementos/Walking_Stick_29.webp';
import wampum from '../../assets/Mementos/Wampum_Belt_29.webp';
import warclub from '../../assets/Mementos/Warclub_29.webp';
import yasakani from '../../assets/Mementos/Yasakani_no_Magatama_29.webp';
import yata from '../../assets/Mementos/Yata_no_Kagami_29.webp';

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
      if (isPickable(element.id, team_number, picks, bans, draftMeta, proposedPickBan)) {
        onPickBan(element.id, team_number, banning);
      }
    }
  }
  
  const getClasses = (id: string): string => {
    return pickBanClasses(id, team_number, picks, bans, draftMeta, enablePickBans, proposedPickBan, '');
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
        <img id='chakra' title="Chakra" src={ chakra } onClick={handleClick} className={getClasses('chakra')}></img>
        <img id="chalcedony" title="Chalcedony" src={ chalcedony } onClick={handleClick} className={getClasses('chalcedony')}></img>
        <img id="chanda" title="Chanda-mahasena" src={ chanda } onClick={handleClick} className={getClasses('chanda')}></img>
        <img id="clipeus" title="Clipeus Virtutis" src={ clipeus } onClick={handleClick} className={getClasses('clipeus')}></img>
        <img id="colada" title="Colada & Tizona" src={ colada } onClick={handleClick} className={getClasses('colada')}></img>
        <img id="complaint" title="Complaint to Ea-nāsir" src={ complaint } onClick={handleClick} className={getClasses('complaint')}></img>
        <img id="corona" title="Corona Civica" src={ corona } onClick={handleClick} className={getClasses('corona')}></img>
        <img id='corpus' title="Corpus Juris Civilis" src={ corpus } onClick={handleClick} className={getClasses('corpus')}></img>
        <img id="crown" title="Crown of Napoleon" src={ crown } onClick={handleClick} className={getClasses('crown')}></img>
        <img id="davalos" title="Davalos Medal" src={ davalos } onClick={handleClick} className={getClasses('davalos')}></img>
        <img id="dellarte" title="Dell'Arte della Guerra" src={ dellarte } onClick={handleClick} className={getClasses('dellarte')}></img>
        <img id="dhal" title="Dhal" src={ dhal } onClick={handleClick} className={getClasses('dhal')}></img>
        <img id="diamond" title="Diamond Throne" src={ diamond } onClick={handleClick} className={getClasses('diamond')}></img>
        <img id="discorsi" title="Discorsi sopra Livio" src={ discorsi } onClick={handleClick} className={getClasses('discorsi')}></img>
        <img id='dongson' title="Dong Son Drum" src={ dongson } onClick={handleClick} className={getClasses('dongson')}></img>
        <img id="dotaku" title="Dōtaku" src={ dotaku } onClick={handleClick} className={getClasses('dotaku')}></img>
        <img id="eagle" title="Eagle Banner" src={ eagle } onClick={handleClick} className={getClasses('eagle')}></img>
        <img id="equestrian" title="Equestrian Figure" src={ equestrian } onClick={handleClick} className={getClasses('equestrian')}></img>
        <img id="falsebeard" title="False Beard" src={ falsebeard } onClick={handleClick} className={getClasses('falsebeard')}></img>
        <img id="figurehead" title="Figurehead of the Queen Anne's Revenge" src={ figurehead } onClick={handleClick} className={getClasses('figurehead')}></img>
        <img id="flag" title="Flag of Jhansi" src={ flag } onClick={handleClick} className={getClasses('flag')}></img>
        <img id='flute' title="Flute" src={ flute } onClick={handleClick} className={getClasses('flute')}></img>
        <img id="forget" title="Forget-me-not" src={ forget } onClick={handleClick} className={getClasses('forget')}></img>
        <img id="garuda" title="Garuda Statue" src={ garuda } onClick={handleClick} className={getClasses('garuda')}></img>
        <img id="glass" title="Glass Armonica" src={ glass } onClick={handleClick} className={getClasses('glass')}></img>
        <img id="globus" title="Globus Cruciger" src={ globus } onClick={handleClick} className={getClasses('globus')}></img>
        <img id="goldsapphire" title="Gold & Sapphire Flowers" src={ goldsapphire } onClick={handleClick} className={getClasses('goldsapphire')}></img>
        <img id="goldfluted" title="Gold Fluted Phiale" src={ goldfluted } onClick={handleClick} className={getClasses('goldfluted')}></img>
        <img id='goldsnuff' title="Gold Snuff Box" src={ goldsnuff } onClick={handleClick} className={getClasses('goldsnuff')}></img>
        <img id="goldensceptre" title="Golden Sceptre" src={ goldensceptre } onClick={handleClick} className={getClasses('goldensceptre')}></img>
        <img id="goldenseal" title="Golden Seal Stone" src={ goldenseal } onClick={handleClick} className={getClasses('goldenseal')}></img>
        <img id="greatimperial" title="Great Imperial Crown" src={ greatimperial } onClick={handleClick} className={getClasses('greatimperial')}></img>
        <img id="greencolonel" title="Green Colonel's Jacket" src={ greencolonel } onClick={handleClick} className={getClasses('greencolonel')}></img>
        <img id="groma" title="Groma" src={ groma } onClick={handleClick} className={getClasses('groma')}></img>
        <img id="hermione" title="Hermione Model" src={ hermione } onClick={handleClick} className={getClasses('hermione')}></img>
        <img id="iiprincipe" title="Il Principe" src={ iiprincipe } onClick={handleClick} className={getClasses('iiprincipe')}></img>
        <img id="imago" title="Imago Mundi" src={ imago } onClick={handleClick} className={getClasses('imago')}></img>
        <img id="incense" title="Incense Censer" src={ incense } onClick={handleClick} className={getClasses('incense')}></img>
        <img id="inscribed" title="Inscribed Sling Bullet" src={ inscribed } onClick={handleClick} className={getClasses('inscribed')}></img>
        <img id="joyeuse" title="Joyeuse" src={ joyeuse } onClick={handleClick} className={getClasses('joyeuse')}></img>
        <img id="kiem" title="Kiem" src={ kiem } onClick={handleClick} className={getClasses('kiem')}></img>
        <img id="kite" title="Kite & Key" src={ kite } onClick={handleClick} className={getClasses('kite')}></img>
        <img id="krone" title="Krone von Friedrich I" src={ krone } onClick={handleClick} className={getClasses('krone')}></img>
        <img id="kusanagi" title="Kusanagi no Tsurugi" src={ kusanagi } onClick={handleClick} className={getClasses('kusanagi')}></img>
        <img id="kwalkwali" title="Kwalkwali" src={ kwalkwali } onClick={handleClick} className={getClasses('kwalkwali')}></img>
        <img id="lantern" title="Lantern" src={ lantern } onClick={handleClick} className={getClasses('lantern')}></img>
        <img id="legion" title="Legion d'honneur Grand Eagle and Cross" src={ legion } onClick={handleClick} className={getClasses('legion')}></img>
        <img id="letter" title="Letter to Adrienne" src={ letter } onClick={handleClick} className={getClasses('letter')}></img>
        <img id="letterjamaica" title="Letter to Jamaica" src={ letterjamaica } onClick={handleClick} className={getClasses('letterjamaica')}></img>
        <img id="lion" title="Lion Capital" src={ lion } onClick={handleClick} className={getClasses('lion')}></img>
        <img id="lotus" title="Lotus Blossom" src={ lotus } onClick={handleClick} className={getClasses('lotus')}></img>
        <img id="lydian" title="v" src={ lydian } onClick={handleClick} className={getClasses('lydian')}></img>
        <img id="mascapaycha" title="Mascapaycha" src={ mascapaycha } onClick={handleClick} className={getClasses('mascapaycha')}></img>
        <img id="medicine" title="Medicine Chest" src={ medicine } onClick={handleClick} className={getClasses('medicine')}></img>
        <img id="merchant" title="Merchant's Saddle" src={ merchant } onClick={handleClick} className={getClasses('merchant')}></img>
        <img id="noli" title="AnNoli Me Tángerekus" src={ noli } onClick={handleClick} className={getClasses('noli')}></img>
        <img id="noteg" title="Note G" src={ noteg } onClick={handleClick} className={getClasses('noteg')}></img>
        <img id="ophthalmoscope" title="Ophthalmoscope" src={ ophthalmoscope } onClick={handleClick} className={getClasses('ophthalmoscope')}></img>
        <img id="order" title="Order of the Black Eagle Badge" src={ order } onClick={handleClick} className={getClasses('order')}></img>
        <img id="padron" title="Padrón Real" src={ padron } onClick={handleClick} className={getClasses('padron')}></img>
        <img id="piano" title="Piano" src={ piano } onClick={handleClick} className={getClasses('piano')}></img>
        <img id="pochteca" title="Pochteca Backpack" src={ pochteca } onClick={handleClick} className={getClasses('pochteca')}></img>
        <img id="portrait" title="Portrait of Josephine" src={ portrait } onClick={handleClick} className={getClasses('portrait')}></img>
        <img id="potemkin" title="Potemkin's Sword-Knot" src={ potemkin } onClick={handleClick} className={getClasses('potemkin')}></img>
        <img id="poteskwate" title="Poteskwate" src={ poteskwate } onClick={handleClick} className={getClasses('poteskwate')}></img>
        <img id="punch" title="Punch Cards" src={ punch } onClick={handleClick} className={getClasses('punch')}></img>
        <img id="queen" title="Queen's Jewelry" src={ queen } onClick={handleClick} className={getClasses('queen')}></img>
        <img id="paiza" title="Paiza" src={ paiza } onClick={handleClick} className={getClasses('paiza')}></img>
        <img id="rawani" title="Rawani" src={ rawani } onClick={handleClick} className={getClasses('rawani')}></img>
        <img id="royalur" title="Royal Game of Ur" src={ royalur } onClick={handleClick} className={getClasses('royalur')}></img>
        <img id="royalmace" title="Royal Mace" src={ royalmace } onClick={handleClick} className={getClasses('royalmace')}></img>
        <img id="saddle" title="Saddle" src={ saddle } onClick={handleClick} className={getClasses('saddle')}></img>
        <img id="sakaki" title="Sakaki Branch" src={ sakaki } onClick={handleClick} className={getClasses('sakaki')}></img>
        <img id="satchel" title="Satchel" src={ satchel } onClick={handleClick} className={getClasses('satchel')}></img>
        <img id="scythianbattle" title="Scythian Battle-Axe" src={ scythianbattle } onClick={handleClick} className={getClasses('scythianbattle')}></img>
        <img id="shak" title="Shakōkidogū" src={ shak } onClick={handleClick} className={getClasses('shak')}></img>
        <img id="shisa" title="Shisa Necklace" src={ shisa } onClick={handleClick} className={getClasses('shisa')}></img>
        <img id="sidearm" title="Sidearm" src={ sidearm } onClick={handleClick} className={getClasses('sidearm')}></img>
        <img id="silk" title="Silk Uttariya" src={ silk } onClick={handleClick} className={getClasses('silk')}></img>
        <img id="sulde" title="Sulde" src={ sulde } onClick={handleClick} className={getClasses('sulde')}></img>
        <img id="sword" title="Sword of Brennus" src={ sword } onClick={handleClick} className={getClasses('sword')}></img>
        <img id="takoba" title="Takoba" src={ takoba } onClick={handleClick} className={getClasses('takoba')}></img>
        <img id="tencendur" title="Tencendur" src={ tencendur } onClick={handleClick} className={getClasses('tencendur')}></img>
        <img id="analects" title="The Analects" src={ analects } onClick={handleClick} className={getClasses('analects')}></img>
        <img id="artofwar" title="The Art of War" src={ artofwar } onClick={handleClick} className={getClasses('artofwar')}></img>
        <img id="rihla" title="The Rihla" src={ rihla } onClick={handleClick} className={getClasses('rihla')}></img>
        <img id="travels" title="The Travels of Marco Polo" src={ travels } onClick={handleClick} className={getClasses('travels')}></img>
        <img id="topayauri" title="Topayauri" src={ topayauri } onClick={handleClick} className={getClasses('topayauri')}></img>
        <img id="traveller" title="Traveller's Sandals" src={ traveller } onClick={handleClick} className={getClasses('traveller')}></img>
        <img id="treaty" title="Treaty of Kadesh" src={ treaty } onClick={handleClick} className={getClasses('treaty')}></img>
        <img id="tricolor" title="Tricolor Cockade" src={ tricolor } onClick={handleClick} className={getClasses('tricolor')}></img>
        <img id="uraeus" title="Uraeus" src={ uraeus } onClick={handleClick} className={getClasses('uraeus')}></img>
        <img id="voltaire" title="Voltaire's Edicts" src={ voltaire } onClick={handleClick} className={getClasses('voltaire')}></img>
        <img id="walking" title="Walking Stick" src={ walking } onClick={handleClick} className={getClasses('walking')}></img>
        <img id="wampum" title="Wampum Belt" src={ wampum } onClick={handleClick} className={getClasses('wampum')}></img>
        <img id="warclub" title="Warclub" src={ warclub } onClick={handleClick} className={getClasses('warclub')}></img>
        <img id="yasakani" title="Yasakani no Magatama" src={ yasakani } onClick={handleClick} className={getClasses('yasakani')}></img>
        <img id="yata" title="Yata no Kagami" src={ yata } onClick={handleClick} className={getClasses('yata')}></img>
      </div>
    </>
  )
}

export default Mementos
