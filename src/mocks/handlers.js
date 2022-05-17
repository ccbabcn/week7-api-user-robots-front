import { rest } from "msw";
import { mockRobot, mockRobots } from "./mockRobots";

export const handlers = [
  rest.get(process.env.REACT_APP_API_URL, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockRobots));
  }),
  rest.delete(
    `${process.env.REACT_APP_API_URL}delete/${mockRobot._id}`,
    (req, res, ctx) => {
      return res(ctx.status(200), ctx.json({ msg: "robot deleted" }));
    }
  ),
];
