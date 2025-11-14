import { useState, useEffect } from 'react'
import '../../styles/picks.css';

function DraftDisplay() {
  const [timeRemaining, setTimeRemaining] = useState(0); //Time in seconds

  const pick_stages = [
    "Blue team ban leader",
    "Red team ban leader",
    "Blue team pick",
    "Red team pick"
  ];

  const beginDraft = () => {
    setTimeRemaining(30);
  }

  useEffect(() => {
    if (timeRemaining > 0) {
      const countdownInterval = setInterval(() => {
        if (timeRemaining <= 0) {
          setTimeRemaining(0);
          clearInterval(countdownInterval);
          alert("Stage complete!");
        }

        setTimeRemaining(timeRemaining - 1);
      }, 1000);

      return () => clearInterval(countdownInterval);
    }
  }, [timeRemaining]);

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
