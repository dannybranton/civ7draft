import '../../styles/picks.css';
import { default as Civilizations } from './Civilizations';

interface IPicksProps {
  // civilizations: React.Component<typeof Civilizations>
  civilizations: React.ReactNode;
}
const Picks = ({ civilizations }: IPicksProps) => {

  return (
    <>
      <div id="picks_pool">
        {/* <img loading="lazy" title="ADA LOVELACE" src="https://assets.2k.com/1a6ngf98576c/7HBQeH6cuEmu6bxYShwuAK/515872ebe8564f3ca1c5a4fdf899a227/Leaders_400x240Ada-Lovelace.jpg" height="240" width="400" alt="ADA LOVELACE"></img> */}
        <div id="team1picks">
          {civilizations}
        </div>
        <div id="team2picks">
          {civilizations}
        </div>
      </div>
    </>
  )
}

export default Picks
