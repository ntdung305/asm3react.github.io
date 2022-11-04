import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Login.css";
import { userArr } from "../SignUp/SignUp";
import { useDispatch } from "react-redux";

//storage
function saveLocalStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}
const getFromStorage = (key) => {
  return JSON.parse(localStorage.getItem(key));
};

// get data
let dataSignUp = [];
if (getFromStorage("userArr")) {
  dataSignUp = getFromStorage("userArr");
}

export const dataLogin = getFromStorage("currentUser")
  ? getFromStorage("currentUser")
  : [];

const Login = () => {
  //hook
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const dispatch = useDispatch();

  //get input
  const emailInputHandler = (e) => {
    setEnteredEmail(e.target.value);
  };
  const passwordInputHandler = (e) => {
    setEnteredPassword(e.target.value);
  };

  //click btn login
  const btnHanler = () => {
    const userLogin = dataSignUp.find(
      (item) => item.email === enteredEmail && item.password === enteredPassword
    );
    if (userLogin) {
      alert("đăng nhập thành công");
      saveLocalStorage("currentUser", userLogin);
      window.location.replace("/");
      dispatch({});
    } else {
      alert("Vui lòng kiểm tra lại mật khẩu hoặc email");
      return false;
    }
    return true;
  };

  //prevent form submitted

  const SubmitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div className="login">
      <div className="login-form">
        <div className="login-form1">
          <div className="login-form1__title">Sign In</div>
          <form onSubmit={SubmitHandler} className="login-form2">
            <input
              className="login-form2__input aaa"
              placeholder="Email"
              required
              onChange={emailInputHandler}
            />
            <input
              type="password"
              className="login-form2__input"
              placeholder="Password"
              required
              onChange={passwordInputHandler}
            />
            <button onClick={btnHanler} className="login-form2__btn">
              SIGN IN
            </button>
            <div className="login-form2__btn1">
              Create an account?
              <NavLink to="/signup" className="login-form2__btn2">
                Sign Up
              </NavLink>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Login;
