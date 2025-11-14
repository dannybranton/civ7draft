import { useState, useEffect } from 'react'
import '../../styles/picks.css';

function DraftDisplay() {
  const [timeRemaining, setTimeRemaining] = useState(5); //Time in seconds
  const [draftInProgress, setDraftInProgress] = useState(false);

  const pick_stages = [
    "Blue team ban leader",
    "Red team ban leader",
    "Blue team pick",
    "Red team pick"
  ];

  const beginDraft = () => {
    setDraftInProgress(true);
  }

  const nextStage = () => {
    setDraftInProgress(false);
  }

  useEffect(() => {
    if (draftInProgress) {
      const countdownInterval = setInterval(() => {
        if (timeRemaining <= 0) {
          setTimeRemaining(0);
          clearInterval(countdownInterval);
          nextStage();
          alert("Stage complete!");
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

  return (
    <>
      <div id="draft_display">
        <button onClick={() => beginDraft()}>Begin timer</button>
        <div>Time remaining: {timeRemaining}</div>
      </div>
    </>
  )
}

export default DraftDisplay
