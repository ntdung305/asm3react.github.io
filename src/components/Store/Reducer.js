import { dataLogin } from "../pages/Login/Login";

const initialState = {
  login: dataLogin,
};
const rootReducer = (state = initialState, action) => {
  if (action.type === "ON_LOGIN") {
    return;
  }
  // if (action.type === "ON_LOGOUT") {
  //   return;
  // }
  return state;
};
export default rootReducer;
