import React from "react";
import DateTimeDisplay from "./DateTimeDisplay";
import { useCountdown } from "../hooks/useCountdown";

const ShowCounter = ({ minutes, seconds }) => {
  return (
    <div className="show-counter">
      <div className="countdown-row">
        <DateTimeDisplay value={minutes} type={"Mins"} isDanger={false} />
        <p>:</p>
        <DateTimeDisplay value={seconds} type={"Seconds"} isDanger={false} />
      </div>
    </div>
  );
};

let alertFlag = true;

const CountdownTimer = ({ targetDate }) => {
  const [minutes, seconds] = useCountdown(targetDate);

  if (minutes + seconds <= 0) {
    if (alertFlag) {
      alertFlag = false;
      alert("You missed the last rocket to mars!");
    }
  }
  return <ShowCounter minutes={minutes} seconds={seconds} />;
};

export default CountdownTimer;
