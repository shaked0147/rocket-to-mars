import "./App.css";
import Rocket from "./Elements/Rocket";
import Hero from "./Elements/Hero";
import CountDownTimer from "./Elements/CountDownTimerAndButton";

function App() {
  const storageKey = "Time";
  const FIVE_MINS_IN_MS = 5 * 60 * 1000;
  const NOW_IN_MS = new Date().getTime();
  const dateTime =
    localStorage.getItem(storageKey) != null
      ? JSON.parse(localStorage.getItem(storageKey))
      : NOW_IN_MS + FIVE_MINS_IN_MS;

  localStorage.setItem(storageKey, JSON.stringify(dateTime));

  return (
    <div className="main-container">
      <Rocket />
      <div className="row">
        <div className="text-container">
          <h1 className="mars-text-header">Get your seat to Mars!</h1>
          <p className="mars-text">
            Earth is doomed, but don't worry! The last rocket is leaving for
            mars soon, so hurry up and book your flight!
          </p>
        </div>
        <Hero />
      </div>

      <div className="countdown-column">
        <h2 className="countdown-text">Countdown to lift off</h2>
        <CountDownTimer />
      </div>
    </div>
  );
}

export default App;

//<CountdownTimer id="CountDownTimer" targetDate={dateTime} />
//<ResetTimerButton />

//   <Container className="main-container">
//   <Row>
//     <Rocket />
//   </Row>
//   <Row>
//     <Col>
//       <Row>
//         <h1 className="mars-text-header">Get your seat to Mars!</h1>
//       </Row>
//       <Row className="mars-text">
//         Earth is doomed, but don't worry! The last rocket is leaving for
//         mars soon, so hurry up and book your flight!
//       </Row>
//     </Col>
//     <Col>
//       <Hero />
//     </Col>
//   </Row>
// </Container>
