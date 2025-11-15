import { useState, useEffect } from 'react'
import '../../styles/draft_display.css';

import { default as Leaders } from './Leaders'
import { default as Civilizations } from './Civilizations';

const DEFAULT_TOTAL_TIME_FOR_PICK = 5;

function DraftDisplay() {
  const [timeRemaining, setTimeRemaining] = useState(DEFAULT_TOTAL_TIME_FOR_PICK); //Time in seconds
  const [draftInProgress, setDraftInProgress] = useState(false);
  const [team1Name, setTeam1Name] = useState("Green Team");
  const [team2Name, setTeam2Name] = useState("Blue Team");
  const [currentStage, setCurrentStage] = useState(0);

  const [team1Bans, setTeam1Bans] = useState<string[]>([]);
  const [team1Picks, setTeam1Picks] = useState<string[]>([]);
  const [team2Bans, setTeam2Bans] = useState<string[]>([]);
  const [team2Picks, setTeam2Picks] = useState<string[]>([]);

  const houseBans: string[] = [
    'lafayette',
    'napoleonemperor',
    'harriet',
    'miss',
    'ming',
    'egyptian',
    'qajar'
  ];

  // Team 1 is Green Team, Team 2 is Blue Team
  const civilization_pick_stages = [
    [1, `${team1Name} ban a civilization`],
    [2, `${team2Name} ban a civilization`],
    [1, `${team1Name} pick first civilization`],
    [2, `${team2Name} pick first civilization`],
    [1, `${team1Name} pick second civilization`],
    [2, `${team2Name} pick second civilization`]
  ];

  const memento_ban_1 = [
    [1, `${team1Name} ban a memento`],
    [2, `${team2Name} ban a memento`],
  ];

  const memento_ban_2 = [
    [2, `${team2Name} ban a memento`],
    [1, `${team1Name} ban a memento`],
  ];

  const leader_pick_stages = [
    [2, `${team2Name} ban a leader`],
    [1, `${team1Name} ban a leader`],
    [2, `${team2Name} pick first leader`],
    [1, `${team1Name} pick first leader`],
    [2, `${team2Name} pick second leader`],
    [1, `${team1Name} pick second leader`]
  ];

  const pick_stages = [ ...civilization_pick_stages, ...memento_ban_1, ...leader_pick_stages, ...memento_ban_2 ];

  const beginDraft = () => {
    setDraftInProgress(true);
  }

  const nextStage = () => {
    if (currentStage < pick_stages.length - 1){
      setCurrentStage(currentStage + 1);
      setTimeRemaining(DEFAULT_TOTAL_TIME_FOR_PICK);
    } else {
      setDraftInProgress(false);
      setCurrentStage(0);
    }
  }

  useEffect(() => {
    if (draftInProgress) {
      const countdownInterval = setInterval(() => {
        if (timeRemaining <= 0) {
          setTimeRemaining(0);
          clearInterval(countdownInterval);
          nextStage();
        } else {
          setTimeRemaining(timeRemaining - 1);
        }
      }, 1000);

      return () => {
        clearInterval(countdownInterval);
        //nextStage();
      }
    }
  }, [timeRemaining, draftInProgress]);

  const onPickBan = (pickedId: string, teamNumber: number, banning: boolean) => {
    switch (teamNumber) {
      case 1:
        banning ? setTeam1Bans(team1Bans.concat(pickedId)) : setTeam1Picks(team1Picks.concat(pickedId));
        break;
      case 2:
        banning ? setTeam2Bans(team2Bans.concat(pickedId)) : setTeam2Picks(team2Picks.concat(pickedId));
        break;
    }
    console.log('onPickBand completed');
  }

  const derivedPickStage = pick_stages[currentStage];
  const derivedTeamNumber = derivedPickStage[0] as number;
  const derivedStage = derivedPickStage[1] as string;
  const derivedAllBans = team1Bans.concat(team2Bans);

  return (
    <>
      <div id="draft_display">
        {draftInProgress ?
        <div>
          <div className={`stage_prompt team-${derivedTeamNumber}`}>
            <p>{derivedStage}</p>
            <p className='timer'>{timeRemaining}</p>
          </div>
        </div>
        :
        <button onClick={() => beginDraft()}>Begin draft</button>}
      </div>
      <Leaders
        onPickBan={onPickBan}
        team_number={derivedTeamNumber}
        banning={derivedStage.includes('ban')}
        bans={derivedAllBans}
        team1Picks={team1Picks}
        team2Picks={team2Picks}
      />
      <Civilizations
        onPickBan={onPickBan}
        team_number={derivedTeamNumber}
        banning={derivedStage.includes('ban')}
        bans={derivedAllBans}
        team1Picks={team1Picks}
        team2Picks={team2Picks}
      />
      <div>Picks Team1: {team1Picks.join(',')}</div>
      <div>Bans: {team1Bans.join(',')} {team2Bans.join(',')}</div>
      <div>Picks Team2: {team2Picks.join(',')}</div>
    </>
  )
}

export {
  DraftDisplay
}
