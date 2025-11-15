import { useState, useEffect } from 'react'
import '../../styles/draft_display.css';

import { default as Leaders } from './Leaders'
import { default as Mementos } from './Mementos'
import { default as Civilizations } from './Civilizations';

import type { CIVILIZATION, LEADER, MEMENTO, Bans, DraftMeta, Picks, PROGRESS_STATUS, STAGE_SELECTION_TYPE, NOT_STARTED } from '../../interfaces/draft/draft';

const DEFAULT_TOTAL_TIME_FOR_PICK = 5;

function DraftDisplay() {
  const [timeRemaining, setTimeRemaining] = useState(DEFAULT_TOTAL_TIME_FOR_PICK); //Time in seconds
  const [draftStatus, setDraftStatus] = useState<PROGRESS_STATUS>("NOT_STARTED");
  const [proposedPickBan, setProposedPickBan] = useState("");
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
    'qajar',
    'glass',
    'antimachiavel',
    'noteg',
    'flag'
  ];

  // Team 1 is Green Team, Team 2 is Blue Team
  let civilization_pick_stages = [
    [1, `${team1Name} ban a civilization`, 'CIVILIZATION'],
    [2, `${team2Name} ban a civilization`, 'CIVILIZATION'],
    [1, `${team1Name} pick first civilization`, 'CIVILIZATION'],
    [2, `${team2Name} pick first civilization`, 'CIVILIZATION'],
    [1, `${team1Name} pick second civilization`, 'CIVILIZATION'],
    [2, `${team2Name} pick second civilization`, 'CIVILIZATION']
  ];

  const memento_ban_1 = [
    [1, `${team1Name} ban a memento`, 'MEMENTO'],
    [2, `${team2Name} ban a memento`, 'MEMENTO'],
  ];

  const memento_ban_2 = [
    [2, `${team2Name} ban a memento`, 'MEMENTO'],
    [1, `${team1Name} ban a memento`, 'MEMENTO'],
  ];

  const leader_pick_stages = [
    [2, `${team2Name} ban a leader`, 'LEADER'],
    [1, `${team1Name} ban a leader`, 'LEADER'],
    [2, `${team2Name} pick first leader`, 'LEADER'],
    [1, `${team1Name} pick first leader`, 'LEADER'],
    [2, `${team2Name} pick second leader`, 'LEADER'],
    [1, `${team1Name} pick second leader`, 'LEADER']
  ];

  const pick_stages = [ ...civilization_pick_stages, ...memento_ban_1, ...leader_pick_stages, ...memento_ban_2 ];

  const beginDraft = () => {
    setDraftStatus("IN_PROGRESS");
  }

  const nextStage = () => {
    if (currentStage < pick_stages.length - 1){
      setCurrentStage(currentStage + 1);
      setTimeRemaining(DEFAULT_TOTAL_TIME_FOR_PICK);
      setProposedPickBan('');
    } else {
      setDraftStatus("COMPLETED");
      setCurrentStage(0);
      setProposedPickBan('');
    }
  }

  const pauseDraft = () => {
    setDraftStatus('PAUSED');
  }

  const resumeDraft = () => {
    setDraftStatus('IN_PROGRESS');
  }

  const restartDraft = () => {
    setDraftStatus('NOT_STARTED');
    setTeam1Bans([]);
    setTeam1Picks([]);
    setTeam2Bans([]);
    setTeam2Picks([]);
  }

  useEffect(() => {
    if (draftStatus == 'PAUSED' || draftStatus == 'IN_PROGRESS') {
      const countdownInterval = setInterval(() => {
        if (timeRemaining <= 0) {
          setTimeRemaining(0);
          clearInterval(countdownInterval);
          nextStage();
        } else {
          if (draftStatus == 'IN_PROGRESS') {
            setTimeRemaining(timeRemaining - 1);
          }
        }
      }, 1000);

      return () => {
        clearInterval(countdownInterval);
        //nextStage();
      }
    }
  }, [timeRemaining, draftStatus]);

  const onPickBan = (pickedId: string, teamNumber: number, banning: boolean) => {
    let newTeam1Bans = team1Bans;
    let newTeam1Picks = team1Picks;
    let newTeam2Bans = team2Bans;
    let newTeam2Picks = team2Picks;

    if (draftStatus == 'IN_PROGRESS'){
      // Pick has been proposed, need to remove it if a different selection is made
      if (proposedPickBan.length > 0){
        switch (teamNumber) {
          case 1:
            banning ? newTeam1Bans = newTeam1Bans.slice(0, -1) : newTeam1Picks = newTeam1Picks.slice(0, -1);
            break;
          case 2:
            banning ? newTeam2Bans = newTeam2Bans.slice(0, -1) : newTeam2Picks = newTeam2Picks.slice(0, -1);
            break;
        }
      }
      // Add the new pick either way
      switch (teamNumber) {
        case 1:
          banning ? newTeam1Bans = newTeam1Bans.concat(pickedId) : newTeam1Picks = newTeam1Picks.concat(pickedId);
          if (banning && pickedId == 'sulde') newTeam1Bans = newTeam1Bans.concat('artilleryman');
          if (banning && pickedId == 'artilleryman') newTeam1Bans = newTeam1Bans.concat('sulde');
          break;
        case 2:
          banning ? newTeam2Bans = newTeam2Bans.concat(pickedId) : newTeam2Picks = newTeam2Picks.concat(pickedId);
          if (banning && pickedId == 'sulde') newTeam2Bans = newTeam2Bans.concat('artilleryman');
          if (banning && pickedId == 'artilleryman') newTeam2Bans = newTeam2Bans.concat('sulde');
          break;
      }
      setTeam1Bans(newTeam1Bans);
      setTeam1Picks(newTeam1Picks);
      setTeam2Bans(newTeam2Bans);
      setTeam2Picks(newTeam2Picks);

      setProposedPickBan(pickedId);
    }
  }

  const DraftButton = () => {
    let buttonAction = () => {};
    let buttonText = "";
    let buttonClass = "";

    switch (draftStatus) {
      case 'NOT_STARTED':
        buttonAction = () => beginDraft();
        buttonText = "Begin draft";
        break;
      case 'IN_PROGRESS':
        buttonClass = 'pause'
        buttonAction = () => pauseDraft();
        buttonText = "Pause draft";
        break;
      case 'PAUSED':
        buttonClass = 'resume';
        buttonAction = () => resumeDraft();
        buttonText = "Resume draft";
        break;
      case 'COMPLETED':
        buttonClass = 'restart';
        buttonAction = () => restartDraft();
        buttonText = "Restart draft";
        break;
    }

    return <>
      <button className={`draft_button ${buttonClass}`} onClick={buttonAction}>{buttonText}</button>
    </>
  }

  const derivedPickStage = pick_stages[currentStage];
  const derivedTeamNumber = derivedPickStage[0] as number;
  const derivedStage = derivedPickStage[1] as string;
  const bans: Bans = { houseBans, draftBans: team1Bans.concat(team2Bans)}
  const draftMeta: DraftMeta = { draftStatus, proposedPickBan };

  return (
    <>
      <div id="draft_display" className={`${draftStatus == 'COMPLETED' ? 'completed' : ''}`}>
        {(draftStatus == 'PAUSED' || draftStatus == 'IN_PROGRESS') &&
          <div>
            <div className={`stage_prompt team-${derivedTeamNumber}`}>
              
              <p>{derivedStage}</p>
              <p className='timer'>{timeRemaining}</p>
            </div>
          </div>
        }
        {draftStatus == 'COMPLETED' && <p>Draft completed!</p>}
        <DraftButton />
      </div>
      <Civilizations
        onPickBan={onPickBan}
        team_number={derivedTeamNumber}
        banning={derivedStage.includes('ban')}
        enablePickBans={derivedPickStage[2] == 'CIVILIZATION'}
        bans={bans}
        picks={{team1Picks, team2Picks}}
        proposedPickBan={proposedPickBan}
        draftMeta={draftMeta}
      />
      <Leaders
        onPickBan={onPickBan}
        team_number={derivedTeamNumber}
        banning={derivedStage.includes('ban')}
        enablePickBans={derivedPickStage[2] == 'LEADER'}
        bans={bans}
        picks={{team1Picks, team2Picks}}
        proposedPickBan={proposedPickBan}
        draftMeta={draftMeta}
      />
      <Mementos
        onPickBan={onPickBan}
        team_number={derivedTeamNumber}
        banning={derivedStage.includes('ban')}
        enablePickBans={derivedPickStage[2] == 'MEMENTO'}
        bans={bans}
        picks={{team1Picks, team2Picks}}
        proposedPickBan={proposedPickBan}
        draftMeta={draftMeta}
      />
      {/* <div>Picks Team1: {team1Picks.join(',')}</div>
      <div>Bans: {team1Bans.join(',')} {team2Bans.join(',')}</div>
      <div>Picks Team2: {team2Picks.join(',')}</div>
      <div>Proposed pickban: {proposedPickBan}</div> */}
    </>
  )
}

export {
  DraftDisplay
}
