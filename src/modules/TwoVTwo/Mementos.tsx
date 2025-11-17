import { useState } from 'react';

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

  const [mementoFilter, updateMementoFilter] = useState('');

  const handleClick = (event: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
    if (enablePickBans){
      const element = event.target as HTMLImageElement;
      if (isPickable(element.id, team_number, picks, bans, draftMeta)) {
        onPickBan(element.id, team_number, banning);
      }
    }
  }
  
  const getClasses = (id: string): string => {
    return pickBanClasses(id, team_number, picks, bans, draftMeta, enablePickBans, proposedPickBan, '');
  }

  const mementoImages = [
    <img key='agincourt' id='agincourt' title="Agincourt Arrowhead" src={ agincourt } onClick={handleClick} className={getClasses('agincourt')}></img>,
    <img key='alltoqapu' id="alltoqapu" title="All-T'oqapu Tunic" src={ alltoqapu } onClick={handleClick} className={getClasses('alltoqapu')}></img>,
    <img key="altarset" id="altarset" title="Altar Set" src={ altarset } onClick={handleClick} className={getClasses('altarset')}></img>,
    <img key="ankus" id="ankus" title="Ankus" src={ ankus } onClick={handleClick} className={getClasses('ankus')}></img>,
    <img key="antimachiavel" id="antimachiavel" title="Anti-Machiavel" src={ antimachiavel } onClick={handleClick} className={getClasses('antimachiavel')}></img>,
    <img key="antikythera" id="antikythera" title="Antikythera" src={ antikythera } onClick={handleClick} className={getClasses('antikythera')}></img>,
    <img key="artilleryman" id="artilleryman" title="Artilleryman's Gloves" src={ artilleryman } onClick={handleClick} className={getClasses('artilleryman')}></img>,
    <img key="baadalreins" id='baadalreins' title="Baadal's Reins" src={ baadalreins } onClick={handleClick} className={getClasses('baadalreins')}></img>,
    <img key="ballestilla" id="ballestilla" title="Ballestilla" src={ ballestilla } onClick={handleClick} className={getClasses('ballestilla')}></img>,
    <img key="bicornehat" id="bicornehat" title="Bicorne Hat" src={ bicornehat } onClick={handleClick} className={getClasses('bicornehat')}></img>,
    <img key="bifocals" id="bifocals" title="Bifocals" src={ bifocals } onClick={handleClick} className={getClasses('bifocals')}></img>,
    <img key="braceofpistols" id="braceofpistols" title="Brace of Pistols" src={ braceofpistols } onClick={handleClick} className={getClasses('braceofpistols')}></img>,
    <img key="breastplate" id="breastplate" title="Breastplate" src={ breastplate } onClick={handleClick} className={getClasses('breastplate')}></img>,
    <img key="brushscroll" id="brushscroll" title="Brush & Scroll" src={ brushscroll } onClick={handleClick} className={getClasses('brushscroll')}></img>,
    <img key="chakra" id='chakra' title="Chakra" src={ chakra } onClick={handleClick} className={getClasses('chakra')}></img>,
    <img key="chalcedony" id="chalcedony" title="Chalcedony" src={ chalcedony } onClick={handleClick} className={getClasses('chalcedony')}></img>,
    <img key="chanda" id="chanda" title="Chanda-mahasena" src={ chanda } onClick={handleClick} className={getClasses('chanda')}></img>,
    <img key="clipeus" id="clipeus" title="Clipeus Virtutis" src={ clipeus } onClick={handleClick} className={getClasses('clipeus')}></img>,
    <img key="colada" id="colada" title="Colada & Tizona" src={ colada } onClick={handleClick} className={getClasses('colada')}></img>,
    <img key="complaint" id="complaint" title="Complaint to Ea-nāsir" src={ complaint } onClick={handleClick} className={getClasses('complaint')}></img>,
    <img key="corona" id="corona" title="Corona Civica" src={ corona } onClick={handleClick} className={getClasses('corona')}></img>,
    <img key="corpus" id='corpus' title="Corpus Juris Civilis" src={ corpus } onClick={handleClick} className={getClasses('corpus')}></img>,
    <img key="crown" id="crown" title="Crown of Napoleon" src={ crown } onClick={handleClick} className={getClasses('crown')}></img>,
    <img key="davalos" id="davalos" title="Davalos Medal" src={ davalos } onClick={handleClick} className={getClasses('davalos')}></img>,
    <img key="dellarte" id="dellarte" title="Dell'Arte della Guerra" src={ dellarte } onClick={handleClick} className={getClasses('dellarte')}></img>,
    <img key="dhal" id="dhal" title="Dhal" src={ dhal } onClick={handleClick} className={getClasses('dhal')}></img>,
    <img key="diamond" id="diamond" title="Diamond Throne" src={ diamond } onClick={handleClick} className={getClasses('diamond')}></img>,
    <img key="discorsi" id="discorsi" title="Discorsi sopra Livio" src={ discorsi } onClick={handleClick} className={getClasses('discorsi')}></img>,
    <img key="dongson" id='dongson' title="Dong Son Drum" src={ dongson } onClick={handleClick} className={getClasses('dongson')}></img>,
    <img key="dotaku" id="dotaku" title="Dōtaku" src={ dotaku } onClick={handleClick} className={getClasses('dotaku')}></img>,
    <img key="eagle" id="eagle" title="Eagle Banner" src={ eagle } onClick={handleClick} className={getClasses('eagle')}></img>,
    <img key="equestrian" id="equestrian" title="Equestrian Figure" src={ equestrian } onClick={handleClick} className={getClasses('equestrian')}></img>,
    <img key="falsebeard" id="falsebeard" title="False Beard" src={ falsebeard } onClick={handleClick} className={getClasses('falsebeard')}></img>,
    <img key="figurehead" id="figurehead" title="Figurehead of the Queen Anne's Revenge" src={ figurehead } onClick={handleClick} className={getClasses('figurehead')}></img>,
    <img key="flag" id="flag" title="Flag of Jhansi" src={ flag } onClick={handleClick} className={getClasses('flag')}></img>,
    <img key="flute" id='flute' title="Flute" src={ flute } onClick={handleClick} className={getClasses('flute')}></img>,
    <img key="forget" id="forget" title="Forget-me-not" src={ forget } onClick={handleClick} className={getClasses('forget')}></img>,
    <img key="garuda" id="garuda" title="Garuda Statue" src={ garuda } onClick={handleClick} className={getClasses('garuda')}></img>,
    <img key="glass" id="glass" title="Glass Armonica" src={ glass } onClick={handleClick} className={getClasses('glass')}></img>,
    <img key="globus" id="globus" title="Globus Cruciger" src={ globus } onClick={handleClick} className={getClasses('globus')}></img>,
    <img key="goldsapphire" id="goldsapphire" title="Gold & Sapphire Flowers" src={ goldsapphire } onClick={handleClick} className={getClasses('goldsapphire')}></img>,
    <img key="goldfluted" id="goldfluted" title="Gold Fluted Phiale" src={ goldfluted } onClick={handleClick} className={getClasses('goldfluted')}></img>,
    <img key="goldsnuff" id='goldsnuff' title="Gold Snuff Box" src={ goldsnuff } onClick={handleClick} className={getClasses('goldsnuff')}></img>,
    <img key="goldensceptre" id="goldensceptre" title="Golden Sceptre" src={ goldensceptre } onClick={handleClick} className={getClasses('goldensceptre')}></img>,
    <img key="goldenseal" id="goldenseal" title="Golden Seal Stone" src={ goldenseal } onClick={handleClick} className={getClasses('goldenseal')}></img>,
    <img key="greatimperial" id="greatimperial" title="Great Imperial Crown" src={ greatimperial } onClick={handleClick} className={getClasses('greatimperial')}></img>,
    <img key="greencolonel" id="greencolonel" title="Green Colonel's Jacket" src={ greencolonel } onClick={handleClick} className={getClasses('greencolonel')}></img>,
    <img key="groma" id="groma" title="Groma" src={ groma } onClick={handleClick} className={getClasses('groma')}></img>,
    <img key="hermione" id="hermione" title="Hermione Model" src={ hermione } onClick={handleClick} className={getClasses('hermione')}></img>,
    <img key="iiprincipe" id="iiprincipe" title="Il Principe" src={ iiprincipe } onClick={handleClick} className={getClasses('iiprincipe')}></img>,
    <img key="imago" id="imago" title="Imago Mundi" src={ imago } onClick={handleClick} className={getClasses('imago')}></img>,
    <img key="incense" id="incense" title="Incense Censer" src={ incense } onClick={handleClick} className={getClasses('incense')}></img>,
    <img key="inscribed" id="inscribed" title="Inscribed Sling Bullet" src={ inscribed } onClick={handleClick} className={getClasses('inscribed')}></img>,
    <img key="joyeuse" id="joyeuse" title="Joyeuse" src={ joyeuse } onClick={handleClick} className={getClasses('joyeuse')}></img>,
    <img key="kiem" id="kiem" title="Kiem" src={ kiem } onClick={handleClick} className={getClasses('kiem')}></img>,
    <img key="kite" id="kite" title="Kite & Key" src={ kite } onClick={handleClick} className={getClasses('kite')}></img>,
    <img key="krone" id="krone" title="Krone von Friedrich I" src={ krone } onClick={handleClick} className={getClasses('krone')}></img>,
    <img key="kusanagi" id="kusanagi" title="Kusanagi no Tsurugi" src={ kusanagi } onClick={handleClick} className={getClasses('kusanagi')}></img>,
    <img key="kwalkwali" id="kwalkwali" title="Kwalkwali" src={ kwalkwali } onClick={handleClick} className={getClasses('kwalkwali')}></img>,
    <img key="lantern" id="lantern" title="Lantern" src={ lantern } onClick={handleClick} className={getClasses('lantern')}></img>,
    <img key="legion" id="legion" title="Legion d'honneur Grand Eagle and Cross" src={ legion } onClick={handleClick} className={getClasses('legion')}></img>,
    <img key="letter" id="letter" title="Letter to Adrienne" src={ letter } onClick={handleClick} className={getClasses('letter')}></img>,
    <img key="letterjamaica" id="letterjamaica" title="Letter to Jamaica" src={ letterjamaica } onClick={handleClick} className={getClasses('letterjamaica')}></img>,
    <img key="lion" id="lion" title="Lion Capital" src={ lion } onClick={handleClick} className={getClasses('lion')}></img>,
    <img key="lotus" id="lotus" title="Lotus Blossom" src={ lotus } onClick={handleClick} className={getClasses('lotus')}></img>,
    <img key="lydian" id="lydian" title="Lydian Lion" src={ lydian } onClick={handleClick} className={getClasses('lydian')}></img>,
    <img key="mascapaycha" id="mascapaycha" title="Mascapaycha" src={ mascapaycha } onClick={handleClick} className={getClasses('mascapaycha')}></img>,
    <img key="medicine" id="medicine" title="Medicine Chest" src={ medicine } onClick={handleClick} className={getClasses('medicine')}></img>,
    <img key="merchant" id="merchant" title="Merchant's Saddle" src={ merchant } onClick={handleClick} className={getClasses('merchant')}></img>,
    <img key="noli" id="noli" title="AnNoli Me Tángerekus" src={ noli } onClick={handleClick} className={getClasses('noli')}></img>,
    <img key="noteg" id="noteg" title="Note G" src={ noteg } onClick={handleClick} className={getClasses('noteg')}></img>,
    <img key="ophthalmoscope" id="ophthalmoscope" title="Ophthalmoscope" src={ ophthalmoscope } onClick={handleClick} className={getClasses('ophthalmoscope')}></img>,
    <img key="order" id="order" title="Order of the Black Eagle Badge" src={ order } onClick={handleClick} className={getClasses('order')}></img>,
    <img key="padron" id="padron" title="Padrón Real" src={ padron } onClick={handleClick} className={getClasses('padron')}></img>,
    <img key="piano" id="piano" title="Piano" src={ piano } onClick={handleClick} className={getClasses('piano')}></img>,
    <img key="pochteca" id="pochteca" title="Pochteca Backpack" src={ pochteca } onClick={handleClick} className={getClasses('pochteca')}></img>,
    <img key="portrait" id="portrait" title="Portrait of Josephine" src={ portrait } onClick={handleClick} className={getClasses('portrait')}></img>,
    <img key="potemkin" id="potemkin" title="Potemkin's Sword-Knot" src={ potemkin } onClick={handleClick} className={getClasses('potemkin')}></img>,
    <img key="poteskwate" id="poteskwate" title="Poteskwate" src={ poteskwate } onClick={handleClick} className={getClasses('poteskwate')}></img>,
    <img key="punch" id="punch" title="Punch Cards" src={ punch } onClick={handleClick} className={getClasses('punch')}></img>,
    <img key="queen" id="queen" title="Queen's Jewelry" src={ queen } onClick={handleClick} className={getClasses('queen')}></img>,
    <img key="paiza" id="paiza" title="Paiza" src={ paiza } onClick={handleClick} className={getClasses('paiza')}></img>,
    <img key="rawani" id="rawani" title="Rawani" src={ rawani } onClick={handleClick} className={getClasses('rawani')}></img>,
    <img key="royalur" id="royalur" title="Royal Game of Ur" src={ royalur } onClick={handleClick} className={getClasses('royalur')}></img>,
    <img key="royalmace" id="royalmace" title="Royal Mace" src={ royalmace } onClick={handleClick} className={getClasses('royalmace')}></img>,
    <img key="saddle" id="saddle" title="Saddle" src={ saddle } onClick={handleClick} className={getClasses('saddle')}></img>,
    <img key="sakaki" id="sakaki" title="Sakaki Branch" src={ sakaki } onClick={handleClick} className={getClasses('sakaki')}></img>,
    <img key="satchel" id="satchel" title="Satchel" src={ satchel } onClick={handleClick} className={getClasses('satchel')}></img>,
    <img key="scythianbattle" id="scythianbattle" title="Scythian Battle-Axe" src={ scythianbattle } onClick={handleClick} className={getClasses('scythianbattle')}></img>,
    <img key="shak" id="shak" title="Shakōkidogū" src={ shak } onClick={handleClick} className={getClasses('shak')}></img>,
    <img key="shisa" id="shisa" title="Shisa Necklace" src={ shisa } onClick={handleClick} className={getClasses('shisa')}></img>,
    <img key="sidearm" id="sidearm" title="Sidearm" src={ sidearm } onClick={handleClick} className={getClasses('sidearm')}></img>,
    <img key="silk" id="silk" title="Silk Uttariya" src={ silk } onClick={handleClick} className={getClasses('silk')}></img>,
    <img key="sulde" id="sulde" title="Sulde" src={ sulde } onClick={handleClick} className={getClasses('sulde')}></img>,
    <img key="sword" id="sword" title="Sword of Brennus" src={ sword } onClick={handleClick} className={getClasses('sword')}></img>,
    <img key="takoba" id="takoba" title="Takoba" src={ takoba } onClick={handleClick} className={getClasses('takoba')}></img>,
    <img key="tencendur" id="tencendur" title="Tencendur" src={ tencendur } onClick={handleClick} className={getClasses('tencendur')}></img>,
    <img key="analects" id="analects" title="The Analects" src={ analects } onClick={handleClick} className={getClasses('analects')}></img>,
    <img key="artofwar" id="artofwar" title="The Art of War" src={ artofwar } onClick={handleClick} className={getClasses('artofwar')}></img>,
    <img key="rihla" id="rihla" title="The Rihla" src={ rihla } onClick={handleClick} className={getClasses('rihla')}></img>,
    <img key="travels" id="travels" title="The Travels of Marco Polo" src={ travels } onClick={handleClick} className={getClasses('travels')}></img>,
    <img key="topayauri" id="topayauri" title="Topayauri" src={ topayauri } onClick={handleClick} className={getClasses('topayauri')}></img>,
    <img key="traveller" id="traveller" title="Traveller's Sandals" src={ traveller } onClick={handleClick} className={getClasses('traveller')}></img>,
    <img key="treaty" id="treaty" title="Treaty of Kadesh" src={ treaty } onClick={handleClick} className={getClasses('treaty')}></img>,
    <img key="tricolor" id="tricolor" title="Tricolor Cockade" src={ tricolor } onClick={handleClick} className={getClasses('tricolor')}></img>,
    <img key="uraeus" id="uraeus" title="Uraeus" src={ uraeus } onClick={handleClick} className={getClasses('uraeus')}></img>,
    <img key="voltaire" id="voltaire" title="Voltaire's Edicts" src={ voltaire } onClick={handleClick} className={getClasses('voltaire')}></img>,
    <img key="walking" id="walking" title="Walking Stick" src={ walking } onClick={handleClick} className={getClasses('walking')}></img>,
    <img key="wampum" id="wampum" title="Wampum Belt" src={ wampum } onClick={handleClick} className={getClasses('wampum')}></img>,
    <img key="warclub" id="warclub" title="Warclub" src={ warclub } onClick={handleClick} className={getClasses('warclub')}></img>,
    <img key="yasakani" id="yasakani" title="Yasakani no Magatama" src={ yasakani } onClick={handleClick} className={getClasses('yasakani')}></img>,
    <img key="yata" id="yata" title="Yata no Kagami" src={ yata } onClick={handleClick} className={getClasses('yata')}></img>,
  ];

  return (
    <>
      <label id='memento_filter_label' htmlFor='memento_filter'>Memento Search</label>
      <input id='memento_filter' name='memento_filter' value={mementoFilter} onChange={(e) => updateMementoFilter(e.target.value)} />
      <div id='memento_pool' className={`team-${team_number} ${banning ? 'banning' : ''}`}>
        {...mementoImages.filter((value) => {
          return mementoFilter ? value.props.title.toLowerCase().includes(mementoFilter.toLowerCase()) : true;
        })}
      </div>
    </>
  )
}

export default Mementos
