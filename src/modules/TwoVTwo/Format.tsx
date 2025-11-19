import draftphases from '../../assets/draftphase.png';

function Format() {

  return (
    <>
      <div id="format">
        <img id="pick_order" src={draftphases} title={'Draft phases'}></img>
        <div id="rules">
          <h2>Royal Rumble</h2>
          <div>
            <h3>2v2 Tournament</h3>
            <ul>
              <li>Map: Pangea and Islands - Small</li>
              <li>Turn Timer: 120/180/240</li>
              <li>Crisis: On</li>
              <li>Unlocks: Off</li>
              <li>Age Length: Standard</li>
            </ul>
          </div>
          <div>
            <h3>Rules:</h3>
            <ul>
              <li>Each team gets (1) remap but must be called before turn 11</li>
              <li>No shift entering production, science or culture. (1 turn is ok)</li>
              <li>No shift entering production, science or culture. (1 turn is ok)</li>
              <li>No Incite Raid</li>
              <li>No bolster military on CS if it has a unit in the city centre</li>
              <li>No Mausoleum of Halicarnassus</li>
              <li>No splash</li>
              <li>No Lafayette No Napoleon Emperor No Tubman</li>
              <li>No Ming no Mississippi no Egypt no Qajar</li>
              <li>No monastery no stonehead</li>
              <li>No Glass harmonica No Anti Machiavelli No Note G No Flag of Jhansi</li>
              <li>Maximum One (1) Military Leader per team</li>
            </ul>
          </div>
          <div>
            <h3>Win Conditions:</h3>
            <p>Victory Screen or Team CC</p>
          </div>
          <div>
            <h3>Notes:</h3>
            <p>For the purpose of memento ban phase Artillery Man's Gloves and Sulde count as one ban</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Format
