import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { logInThunk } from "../../redux/thunks/userThunk";

const LoginForm = () => {
  const blankFields = {
    userName: "",
    password: "",
  };

  const [formData, setFormData] = useState(blankFields);
  const [buttonDisable, setButtonDisable] = useState(true);
  const dispatch = useDispatch;

  useEffect(() => {
    if (formData.userName !== "" && formData.password !== "") {
      setButtonDisable(false);
    } else {
      setButtonDisable(true);
    }
  }, [formData]);

  const changeDate = (event) => {
    setFormData({ ...formData, [event.target.id]: event.target.value }); //[nombre.de.propiedad.]
  };

  const resetForm = () => {
    setFormData(blankFields);
  };

  const submitLogIn = (event) => {
    event.preventDefault();
    dispatch(logInThunk(formData));
    resetForm();
  };

  return (
    <>
      <form autoComplete="off" noValidate onSubmit={submitLogIn}>
        <label htmlFor="userName" />
        <input
          id="userName"
          type="text"
          value={formData.userName}
          onChange={changeDate}
        />
        <label htmlFor="password" />
        <input
          id="password"
          type="password"
          value={formData.password}
          onChange={changeDate}
        />
        <button disabled={buttonDisable} type="submit">
          LOG IN
        </button>
      </form>
    </>
  );
};

export default LoginForm;
