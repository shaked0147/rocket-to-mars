import styled from "styled-components";

function ResetTimerButton() {
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

  return <Button onClick={ResetTimer}>Reset Timer</Button>;
}

function ResetTimer() {
  const timer = document.getElementById("CountDownTimer");
  console.log(timer);
}

export default ResetTimerButton;
