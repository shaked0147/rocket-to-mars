import React, { useState, useEffect, useRef, Fragment } from "react";
import styled from "styled-components";

const START_MINUTES = "5";
const START_SECOND = "00";
const START_DURATION = 5 * 60;
const storageKey = "Timer";

const Button = styled.button`
  background-color: red;
  color: white;
  padding: 10px 110px;
  border-radius: 15px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: ease background-color 250ms;
  margin-left: auto;
  margin-right: auto;
  display: block;
  font-size: 25pt;
  font-family: "Pattaya";
  &:hover {
    background-color: rgba(130, 0, 0);
  }
`;

export default function CountDownTimer() {
  const [currentMinutes, setMinutes] = useState(START_MINUTES);
  const [currentSeconds, setSeconds] = useState(START_SECOND);
  const [duration, setDuration] = useState(START_DURATION);
  const [isRunning, setIsRunning] = useState(false);
  let alertFlag = true;
  const alertFlagRef = useRef(alertFlag);
  alertFlagRef.current = alertFlag;
  const dateTime =
    localStorage.getItem(storageKey) != null
      ? JSON.parse(localStorage.getItem(storageKey))
      : 5 * 60;

  localStorage.setItem(storageKey, JSON.stringify(dateTime));

  if (isRunning === false) {
    setIsRunning(true);
    setDuration(dateTime);
  }

  const resetHandler = () => {
    setMinutes(START_MINUTES);
    setSeconds(START_SECOND);
    setIsRunning(true);
    setDuration(START_DURATION);
    alertFlagRef.current = false;
  };

  useEffect(() => {
    if (isRunning === true) {
      let timer = duration;
      var minutes, seconds;
      const interval = setInterval(function () {
        --timer;
        localStorage.setItem(storageKey, JSON.stringify(timer));
        if (timer <= 0 && alertFlagRef.current) {
          alertFlagRef.current = false;
          alert("You missed the last rocket to mars!");
        } else if (timer > -1) {
          minutes = parseInt(timer / 60, 10);
          seconds = parseInt(timer % 60, 10);

          minutes = minutes < 10 ? +minutes : minutes;
          seconds = seconds < 10 ? "0" + seconds : seconds;

          setMinutes(minutes);
          setSeconds(seconds);
        } else {
          setMinutes("0");
          setSeconds("00");
        }
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [isRunning, duration]);

  return (
    <Fragment>
      <div className="countdown-numbers">
        <span className="countdown-background">{currentMinutes}</span>
        <span className="countdown-dots">:</span>
        <span className="countdown-background"> {currentSeconds}</span>
      </div>

      <Button onClick={resetHandler}>Reset timer</Button>
    </Fragment>
  );
}
