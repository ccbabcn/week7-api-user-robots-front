import { useSelector } from "react-redux";
import LoginForm from "../LoginForm/LoginForm";
import Robot from "../Robot/Robot";
import { RobotListStyle } from "./RobotListStyle";

const RobotsList = () => {
  const robots = useSelector((state) => state.robots);
  return (
    <RobotListStyle className="container align-items-center">
      <LoginForm />

      <ul className="robots-container row">
        {robots.map((robot) => (
          <Robot key={robot._id} robot={robot} />
        ))}
      </ul>
    </RobotListStyle>
  );
};

export default RobotsList;
