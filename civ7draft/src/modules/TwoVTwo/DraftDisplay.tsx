import { useState, useEffect } from 'react'
import '../../styles/draft_display.css';

import { default as Leaders } from './Leaders'
import { default as Mementos } from './Mementos'
import { default as Civilizations } from './Civilizations';

import type { Bans, DraftMeta, PROGRESS_STATUS } from '../../interfaces/draft/draft';

import { HOUSE_BANS } from '../../utilities/draft/constants';

const DEFAULT_TOTAL_TIME_FOR_PICK = 25;

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

  // Team 1 is Green Team, Team 2 is Blue Team
  let civilization_pick_stages = [
    [1, `${team1Name} ban a civilization`, 'CIVILIZATION'],
    [2, `${team2Name} ban a civilization`, 'CIVILIZATION'],
    [1, `${team1Name} pick a civilization`, 'CIVILIZATION'],
    [2, `${team2Name} pick a civilization`, 'CIVILIZATION'],
    [1, `${team1Name} pick a 2nd civilization`, 'CIVILIZATION'],
    [2, `${team2Name} pick a 2nd civilization`, 'CIVILIZATION']
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
    [2, `${team2Name} pick a leader`, 'LEADER'],
    [1, `${team1Name} pick a leader`, 'LEADER'],
    [2, `${team2Name} pick a second leader`, 'LEADER'],
    [1, `${team1Name} pick a second leader`, 'LEADER']
  ];

  const pick_stages = [ ...civilization_pick_stages, ...memento_ban_1, ...leader_pick_stages, ...memento_ban_2 ];

  const derivedPickStage = pick_stages[currentStage];
  const derivedTeamNumber = derivedPickStage[0] as number;
  const derivedStage = derivedPickStage[1] as string;
  const bans: Bans = { houseBans: HOUSE_BANS, draftBans: team1Bans.concat(team2Bans)}
  const draftMeta: DraftMeta = { draftStatus, proposedPickBan };
  const banning: boolean = derivedStage.includes('ban');

  const beginDraft = () => {
    setDraftStatus("IN_PROGRESS");
  }

  const nextStage = () => {
    if (currentStage < pick_stages.length - 1){
      if (proposedPickBan == ''){ //when advancing stages, if no pick has been made, make one
        switch (derivedPickStage[2]) {
          case 'LEADER':
            let numPickableLeaders = document.querySelectorAll('#leader_pool > .pickable').length
            let randomLeaderNum = Math.floor(Math.random() * numPickableLeaders);
            const randomLeader = document.querySelectorAll('#leader_pool > img.pickable')[randomLeaderNum].getAttribute('id') as string;
            onPickBan(randomLeader, derivedTeamNumber, banning);
            break;
          case 'CIVILIZATION':
            let numPickableCivs = document.querySelectorAll('#civ_pool > .pickable').length
            let randomCivNum = Math.floor(Math.random() * numPickableCivs);
            const randomCiv = document.querySelectorAll('#civ_pool > img.pickable')[randomCivNum].getAttribute('id') as string;
            onPickBan(randomCiv, derivedTeamNumber, banning);
            break;
          case 'MEMENTO':
            let numPickableMementos = document.querySelectorAll('#memento_pool > .pickable').length
            let randomMementoNum = Math.floor(Math.random() * numPickableMementos);
            const randomMemento = document.querySelectorAll('#memento_pool > img.pickable')[randomMementoNum].getAttribute('id') as string;
            onPickBan(randomMemento, derivedTeamNumber, banning);
            break;
        }
      }

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

  const skip = () => {
    //nextStage();
    setTimeRemaining(-3);
  }

  const restartDraft = () => {
    setDraftStatus('NOT_STARTED');
    setTeam1Bans([]);
    setTeam1Picks([]);
    setTeam2Bans([]);
    setTeam2Picks([]);
    setTimeRemaining(DEFAULT_TOTAL_TIME_FOR_PICK);
  }

  useEffect(() => {
    if (draftStatus == 'PAUSED' || draftStatus == 'IN_PROGRESS') {
      const countdownInterval = setInterval(() => {
        if ((timeRemaining <= 0 && proposedPickBan !== '') || timeRemaining <= -3) { //Grace period of 3 seconds
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
        buttonAction = beginDraft;
        buttonText = "Begin draft";
        break;
      case 'IN_PROGRESS':
        buttonClass = 'pause'
        buttonAction = pauseDraft;
        buttonText = "Pause";
        break;
      case 'PAUSED':
        buttonClass = 'resume';
        buttonAction = resumeDraft;
        buttonText = "Resume";
        break;
      case 'COMPLETED':
        buttonClass = 'restart';
        buttonAction = restartDraft;
        buttonText = "Restart draft";
        break;
    }

    return <>
      <button className={`draft_button ${buttonClass}`} onClick={buttonAction}>{buttonText}</button>
    </>
  }

  return (
    <>
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
        {(draftStatus == 'NOT_STARTED') &&
          <input value={team1Name} onChange={(e) => setTeam1Name(e.target.value)} />
        }
        {/* {(draftStatus == 'IN_PROGRESS') &&
          <button className='skip_button' onClick={() => skip()}>Skip</button>
        } */}
        <DraftButton />
        {(draftStatus == 'NOT_STARTED') &&
          <input value={team2Name} onChange={(e) => setTeam2Name(e.target.value)} />
        }
      </div>
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
