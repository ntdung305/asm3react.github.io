import { NavLink } from "react-router-dom";
import "./MainNav.css";

//get storage
const getFromStorage = (key) => {
  return JSON.parse(localStorage.getItem(key));
};
export let dataLogin = getFromStorage("currentUser")
  ? getFromStorage("currentUser")
  : [];

const MainNav = (props) => {
  let show;

  //btn handle
  const btnLogout = () => {
    localStorage.removeItem("currentUser");

    window.location.replace("/Home");
  };
  if (getFromStorage("currentUser")) {
    show = (
      <div className="header-1_NavLink" onClick={btnLogout}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
          />
        </svg>
        {dataLogin.name} Logout
      </div>
    );
  } else {
    show = (
      <NavLink className="header-1_NavLink" to="/login">
        Login
      </NavLink>
    );
  }

  return (
    <header className="header">
      <div className="header-1">
        <NavLink className="header-1_NavLink" to="home">
          Home
        </NavLink>
        <NavLink className="header-1_NavLink" to="shop">
          Shop
        </NavLink>
      </div>
      <div className="header-2">
        <div>BOUTIQUE</div>
      </div>
      <div className="header-3">
        <NavLink className="header-1_NavLink" to="cart">
          Cart
        </NavLink>
        <div>{show}</div>
      </div>
    </header>
  );
};
export default MainNav;
