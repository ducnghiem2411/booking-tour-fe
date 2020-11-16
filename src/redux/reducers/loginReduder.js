import * as type from "../TypeAction";

const initialState = {
  loading: false,
  userData: {
    username: null,
    password: null,
  },
  error: false,
  token: "",
  messageLogin: "",
  loginStatus: false,
 
};

export default function loginReduder(state = initialState, action) {
  switch (action.type) {
    case type.LOGIN_REQUESTED:
      return {
        ...state,
        loading: true,
      };
      break

    case type.LOGIN_SUCCESSED:
      localStorage.setItem("token", JSON.stringify(action.token));

      return {
        ...state,
        loading: false,
        loginStatus: true,
        token: action.token,
      };
      break

    case type.LOGIN_FAILED:
      return {
        ...state,
        loading: false,
        error: true,
        messageLogin: action.message.message,
      };
      break

    case type.UPDATE_STATUS_ERROR:
      return {
        error: action.data,
        loginStatus: action.data,
      };

      break;

    default:
      return state;
      break
  }
}
