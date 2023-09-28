import { useState } from "react";

export function Chronometre() {
  const [second, setSecond] = useState(0);
  const [minute, setMinute] = useState(0);
  const [heure, setHeure] = useState(0);
  let count = 0
let min = 0
 

  const incrementTime = () => {
    count++
    console.log({second,count})

    if (count < 60 && min < 60) {
      setSecond(count);
    }
    if (count > 59 && min < 60) {
      setSecond(0);
      count =0
      min ++
      setMinute(min);
    }
    if (min > 59) {
        min = 0
      setMinute(0);
      setHeure(heure + 1);
    }
  };

  const handleCount = () => {
    setInterval(incrementTime, 100)
  }

  return (
    <>
      <div>
        <h1>Chronometre</h1>
        <div
          style={{
            padding: "15px",
            margin: "10px",
            fontSize: "32px",
            fontFamily: "bold",
          }}
        >
          <p> {heure}:{minute}:{second}</p>
        </div>
        <div>
          <button
            onClick={handleCount}
          >
            START
          </button>
          <button>STOP</button>
          <button>RESET</button>
        </div>
      </div>
    </>
  );
}
