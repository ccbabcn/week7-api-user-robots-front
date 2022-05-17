import jwtDecode from "jwt-decode";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import RobotsList from "./components/RobotsList/RobotsList";
import {
  logInActionCreator,
  logOutActionCreator,
} from "./redux/features/userSlice";
import { loadRobotsThunk } from "./redux/thunks/robotsThuks";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRobotsThunk());
  }, [dispatch]);

  const user = useSelector((sate) => sate.user);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userInfo = jwtDecode(token);

    if (token) {
      dispatch(logInActionCreator(userInfo));
    }
  }, [dispatch]);

  const logOut = () => {
    localStorage.removeItem("token");
    dispatch(logOutActionCreator());
  };
  //Hola {user?.name} conditional chaining
  return (
    <>
      <h1>Hola {user?.name}</h1>
      <RobotsList />;<button onClick={logOut}>LOG OUT</button>
    </>
  );
}

export default App;
