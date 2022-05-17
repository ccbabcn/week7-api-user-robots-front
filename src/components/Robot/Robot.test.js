import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../redux/store/store";
import Robot from "./Robot";

describe("Given Robot component", () => {
  const receiveRobot = {
    id: "id1",
    name: "Atutomata",
    resistance: 0,
    created: "00-00-0000",
    image: "image-url.jpg",
    velocity: 0,
  };
  describe("When it's called with a robot", () => {
    test("Then it should render a robot object with a heading containing it's name", () => {
      render(
        <Provider store={store}>
          <Robot robot={receiveRobot} />
        </Provider>
      );

      const createdRobotHeading = screen.getByRole("heading", {
        name: /Atutomata/i,
      });

      expect(createdRobotHeading).toBeInTheDocument();
    });
    test("Then it should render a robot object with a image containing it's name as alt text", () => {
      render(
        <Provider store={store}>
          <Robot robot={receiveRobot} />
        </Provider>
      );

      const createdImage = screen.getByRole("img", {
        name: /Atutomata/i,
      });

      expect(createdImage).toBeInTheDocument();
    });
    test("Then it should render a robot object with a list item", () => {
      render(
        <Provider store={store}>
          <Robot robot={receiveRobot} />
        </Provider>
      );

      const listItems = screen.getByRole("list");

      expect(listItems).toBeInTheDocument();
    });
  });
});
