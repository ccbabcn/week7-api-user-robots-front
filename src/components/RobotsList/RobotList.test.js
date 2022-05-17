import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../redux/store/store";
import RobotsList from "./RobotsList";

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: () => {
    return [
      {
        id: "id",
        name: "Atutomata",
        resistance: 0,
        created: "00-00-0000",
        image: "image-url.jpg",
        velocity: 0,
      },
      {
        id: "id2",
        name: "Machine",
        resistance: 5,
        created: "10-05-1980",
        image: "image-url2.jpg",
        velocity: 5,
      },
    ];
  },
}));

describe("Given RobotsList component", () => {
  describe("When it's called with a list of 2 robots", () => {
    test("Then it should render 2 list elemetns", () => {
      const expectedNumberofListItems = 2;

      render(
        <Provider store={store}>
          <RobotsList />
        </Provider>
      );

      const totalListItemsCreated = screen.getAllByTestId("robot");

      expect(totalListItemsCreated).toHaveLength(expectedNumberofListItems);
    });
  });
});
