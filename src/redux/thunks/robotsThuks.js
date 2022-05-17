import axios from "axios";

import {
  deleteRobotActionCreator,
  loadRobotsActionCreator,
} from "../features/robotsSlice";

export const loadRobotsThunk = () => async (dispatch) => {
  try {
    const { data: robots, status } = await axios.get(
      process.env.REACT_APP_API_URL,
      {
        headers: {
          authorization: `Bearer ${process.env.REACT_APP_CRM_API_ACCESS_TOKEN}`,
        },
      }
    );
    if (status === 200) {
      dispatch(loadRobotsActionCreator(robots.robots));
    }
  } catch {}
};

export const deleteRobotThunk = (robotId) => async (dispatch) => {
  try {
    const { status } = await axios.delete(
      `${process.env.REACT_APP_API_URL}delete/${robotId}`,
      {
        headers: {
          authorization: `Bearer ${process.env.REACT_APP_CRM_API_ACCESS_TOKEN}`,
        },
      }
    );
    if (status === 200) {
      dispatch(deleteRobotActionCreator(robotId));
    }
  } catch {}
};
