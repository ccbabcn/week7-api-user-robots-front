import { mockRobot, mockRobotsList } from "../../mocks/mockRobots";
import robotsReducer, {
  deleteRobotActionCreator,
  loadRobotsActionCreator,
} from "./robotsSlice";

describe("Given a robotsReducer", () => {
  describe("When it's loadRobotsActionCreator receives a state with an a array containning a robot", () => {
    test("Then it should return a new state with the new array", () => {
      const actualState = [
        {
          id: "id",
          name: "Atutomata",
          resistance: 0,
          created: "00-00-0000",
          image: "image-url.jpg",
          velocity: 0,
        },
      ];
      const expectedNewState = [
        {
          id: "id",
          name: "Atutomata",
          resistance: 0,
          created: "00-00-0000",
          image: "image-url.jpg",
          velocity: 0,
        },
      ];

      const loadAction = loadRobotsActionCreator(actualState);

      const newState = robotsReducer(null, loadAction);

      expect(newState).toEqual(expectedNewState);
    });
  });

  describe("When it's deleteRobotsActionCreator receives a state with an a array containning a robot", () => {
    test("Then it should return a new state with the new array", () => {
      const actualState = mockRobotsList;
      const robotToDelete = mockRobot;

      const expectedNewState = [
        {
          _id: "id2",
          name: "Robotico",
          resistance: 10,
          created: "10-10-2020",
          image: "image-url2.jpg",
          velocity: 5,
        },
      ];

      const deleteAction = deleteRobotActionCreator(robotToDelete._id);

      const newState = robotsReducer(actualState, deleteAction);

      expect(newState).toEqual(expectedNewState);
    });
  });
});
