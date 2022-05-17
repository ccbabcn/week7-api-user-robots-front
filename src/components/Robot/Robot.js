import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { deleteRobotThunk } from "../../redux/thunks/robotsThuks";
import Button from "../Button/Button";
import { RobotStyle } from "./RobotStyle";

const Robot = ({
  robot,
  robot: { name, resistance, created, image, velocity },
}) => {
  const dispatch = useDispatch();

  const deleteRobot = () => {
    dispatch(deleteRobotThunk(robot._id));
  };

  return (
    <RobotStyle className="container">
      <div data-testid="robot" className="robot card text-center">
        <img
          width={200}
          height={220}
          className="robot__image card-img-top"
          src={image}
          alt={name}
        />
        <div className="card-body">
          <h3 className="robot__name Card title">{name}</h3>
          <ul className="list-group">
            <li className="list-group-item">Resistance: {resistance}</li>
            <li className="list-group-item">Velocity: {velocity}</li>
            <li className="list-group-item">Date of creation: {created}</li>
          </ul>
          <Button
            action={deleteRobot}
            className="btn btn-danger"
            text="Delete"
          />
        </div>
      </div>
    </RobotStyle>
  );
};

Robot.propTypes = {
  robot: PropTypes.shape({
    name: PropTypes.string.isRequired,
    resistance: PropTypes.number.isRequired,
    created: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    velocity: PropTypes.number.isRequired,
  }).isRequired,
};

export default Robot;
