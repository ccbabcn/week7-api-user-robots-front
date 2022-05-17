import { mockRobot, mockRobots } from "../../mocks/mockRobots";
import {
  deleteRobotActionCreator,
  loadRobotsActionCreator,
} from "../features/robotsSlice";
import { deleteRobotThunk, loadRobotsThunk } from "./robotsThuks";

describe("Given a loadRobotsThunk", () => {
  describe("When it's invoked", () => {
    test("Then it should disptach loadRobotsActionCreator", async () => {
      const dispatch = jest.fn();
      const robots = mockRobots;

      const expectedAction = loadRobotsActionCreator(robots.robots);

      const thunk = loadRobotsThunk();
      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalledWith(expectedAction);
    });
  });
});

describe("Given a deleteRobotThunk", () => {
  describe("When its invoked", () => {
    test("Then it should disptach deleteToDoActionCreator", async () => {
      const robotIdToDelete = mockRobot._id;
      const thunk = deleteRobotThunk(robotIdToDelete);
      const dispatch = jest.fn();
      const expectedAction = deleteRobotActionCreator(robotIdToDelete);

      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalledWith(expectedAction);
    });
  });
});
