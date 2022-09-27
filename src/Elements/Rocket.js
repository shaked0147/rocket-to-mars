import { useSpring, animated } from "react-spring";
import rocket from "../resources/rocket.png";

function Rocket() {
  const styles = useSpring({
    loop: true,
    to: [{ rotateZ: 0 }, { rotateZ: 20 }],
    from: { rotateZ: 20 },
  });

  return (
    <animated.img
      className="rocket-img"
      src={rocket}
      alt="Rocket"
      style={styles}
    />
  );
}

export default Rocket;
