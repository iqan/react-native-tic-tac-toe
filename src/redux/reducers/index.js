import { combineReducers } from "redux";

const INITIAL_STATE = {
  isLoggedIn: false
};

const loginReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, isLoggedIn: true };
    default:
      return state;
  }
};

export default combineReducers({
  login: loginReducer
});
