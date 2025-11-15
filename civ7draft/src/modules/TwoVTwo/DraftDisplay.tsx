import { createContext, useState, useEffect } from 'react'
import '../../styles/picks.css';

import { default as Leaders } from './Leaders'

const CHOICES = {
  BAN: 'ban',
  GREEN_PICK: 'greenpick',
  BLUE_PICK: 'bluepick'
}

const DEFAULT_TOTAL_TIME_FOR_PICK = 5;

const DraftContext = createContext({
  pick: CHOICES.GREEN_PICK
});

function DraftDisplay() {
  const [timeRemaining, setTimeRemaining] = useState(5); //Time in seconds
  const [draftInProgress, setDraftInProgress] = useState(false);
  const [team1Name, setTeam1Name] = useState("Green Team");
  const [team2Name, setTeam2Name] = useState("Blue Team");
  const [choiceType, setChoiceType] = useState(CHOICES.BAN);
  const [currentStage, setCurrentStage] = useState(0);

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

  const stage1 = pick_stages[1];
  const teamName11 = stage1[0] as number;


  const beginDraft = () => {
    setDraftInProgress(true);
  }

  const nextStage = () => {
    if (currentStage < pick_stages.length - 1){
      setCurrentStage(currentStage + 1);
      setTimeRemaining(DEFAULT_TOTAL_TIME_FOR_PICK);
    } else {
      setDraftInProgress(false);
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

  const derivedPickStage = pick_stages[currentStage];
  const derivedTeamNumber = derivedPickStage[0] as number;
  const derivedStage = derivedPickStage[1] as string;

  return (
    <>
      <div id="draft_display">
        <button onClick={() => beginDraft()}>Begin timer</button>
        <div>{pick_stages[currentStage][1]}</div>
        <div>Time remaining: {timeRemaining}</div>
      </div>
      <Leaders team_number={derivedTeamNumber} banning={derivedStage.includes('ban')} />
    </>
  )
}

export {
  DraftContext,
  DraftDisplay
}
