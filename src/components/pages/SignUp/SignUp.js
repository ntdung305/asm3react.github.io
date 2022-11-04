import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./SignUp.css";

//storage
function saveLocalStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}
const getFromStorage = (key) => {
  return JSON.parse(localStorage.getItem(key));
};

export const userArr = getFromStorage("useArr") ? getFromStorage("useArr") : [];
class User {
  constructor(name, email, password, phone) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.phone = phone;
  }
}

const SignUp = () => {
  //hook
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [enteredName, setEnteredName] = useState("");
  const [enteredPhone, setEnteredPhone] = useState("");

  const emailInputHandler = (e) => {
    setEnteredEmail(e.target.value);
  };
  const passwordInputHandler = (e) => {
    setEnteredPassword(e.target.value);
  };
  const nameInputHandler = (e) => {
    setEnteredName(e.target.value);
  };
  const phoneInputHandler = (e) => {
    setEnteredPhone(e.target.value);
  };
  //click btn sign up
  const btnHanler = () => {
    const user = new User(
      enteredName,
      enteredEmail,
      enteredPassword,
      enteredPhone
    );
    const validate = validateData(user);
    if (validate) {
      userArr.push(user);
      console.log(user);
      saveLocalStorage("userArr", userArr);
      alert("đăng kí thành công");

      // window.location.replace("/Login");
    }
  };

  // validate
  function validateData() {
    if (enteredEmail.length < 2) {
      alert("email không hợp hệ");
      return false;
    }
    if (enteredPassword.length < 2) {
      alert("Password phải hơn 8 kí tự ");
      return false;
    }
    for (let i = 0; i < userArr.length; i++) {
      if (enteredEmail === userArr[i].email) {
        alert("Tài khoản đã có người sử dụng");
        console.log(enteredEmail);
        console.log(userArr[i].email);
        return false;
      }
    }
    return true;
  }

  //prevent form submitted
  const SubmitHandler = (event) => {
    event.preventDefault();
  };
  return (
    <div className="signup">
      <div className="signup-form">
        <div className="signup-form1">
          <div className="signup-form1__title">Sign Up</div>
          <form onSubmit={SubmitHandler} className="signup-form2">
            <input
              className="signup-form2__input aaa"
              placeholder="Full Name"
              onChange={nameInputHandler}
              required
            />
            <input
              className="signup-form2__input aaa"
              placeholder="Email"
              onChange={emailInputHandler}
              required
            />
            <input
              type={"password"}
              className="signup-form2__input aaa"
              placeholder="Password"
              onChange={passwordInputHandler}
              required
            />
            <input
              // type={"number"}
              className="signup-form2__input"
              placeholder="Your Phone"
              required
              onChange={phoneInputHandler}
            />
            <button onClick={btnHanler} className="signup-form2__btn">
              SIGN UP
            </button>
            <div className="signup-form2__btn1">
              Login?
              <NavLink to="/login" className="signup-form2__btn2">
                Click
              </NavLink>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default SignUp;
