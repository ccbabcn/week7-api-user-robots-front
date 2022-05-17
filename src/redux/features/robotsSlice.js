import { createSlice } from "@reduxjs/toolkit";

const robotsSlice = createSlice({
  name: "robots",
  initialState: [],
  reducers: {
    loadRobots: (robotsState, action) => [...action.payload],
    deleteRobot: (robots, action) =>
      robots.filter((robot) => robot._id !== action.payload),
  },
});

export const {
  loadRobots: loadRobotsActionCreator,
  deleteRobot: deleteRobotActionCreator,
} = robotsSlice.actions;

export default robotsSlice.reducer;
