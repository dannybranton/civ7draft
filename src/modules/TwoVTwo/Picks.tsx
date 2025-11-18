import type { DraftMeta } from '../../interfaces/draft/draft';
import '../../styles/picks.css';

interface IPicksProps {
  // civilizations: React.Component<typeof Civilizations>
  civilizations: React.ReactNode;
  leaders: React.ReactNode;
  mementos: React.ReactNode;
  teamToDisplay: string;
  teamName: string;
  draftMeta: DraftMeta;
  setTeamName: React.Dispatch<React.SetStateAction<string>>
}
const Picks = ({ civilizations, leaders, mementos, teamToDisplay, draftMeta, teamName, setTeamName }: IPicksProps) => {

  return (
    <>
      <div className={`picks_pool ${teamToDisplay}`}>
        <div className={`team_names ${draftMeta.draftStatus}`}>
          <div>
            <label id={`${teamToDisplay}_name_label`} htmlFor={`${teamToDisplay}_name`} className={`${draftMeta.draftStatus}`}>Team Name</label>
            <input id={`${teamToDisplay}_name`} value={teamName} onChange={(e) => setTeamName(e.target.value)} />
          </div>
        </div>
        {/* <img loading="lazy" title="ADA LOVELACE" src="https://assets.2k.com/1a6ngf98576c/7HBQeH6cuEmu6bxYShwuAK/515872ebe8564f3ca1c5a4fdf899a227/Leaders_400x240Ada-Lovelace.jpg" height="240" width="400" alt="ADA LOVELACE"></img> */}
        <div id={`${teamToDisplay}picks`}>
          {civilizations}
          {leaders}
          {mementos}
        </div>
      </div>
    </>
  )
}

export default Picks
