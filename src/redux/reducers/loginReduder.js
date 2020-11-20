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
  keyLogin: 0,
  updateLoginStatus: false,

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
      localStorage.setItem("token", JSON.stringify(action.token.accessToken));

      return {
        ...state,
        loading: false,
        keyLogin: state.keyLogin +1 ,
        loginStatus: true,
        token: action.token,
      };
      break

    case type.LOGIN_FAILED:
      return {
        ...state,
        loading: false,
        error: true,
        loginStatus: false,
        keyLogin: state.keyLogin + 1 ,
        messageLogin: action.message.message,
      };
      break
    case type.UPDATE_LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      };
      break

    case type.UPDATE_LOGIN_SUCCESS:
      // localStorage.setItem("token", JSON.stringify(action.token.accessToken));

      return {
        ...state,
        loading: false,
        loginStatus: true,
        updateLoginStatus: true,
        token: action.token,
      };
      break

    case type.UPDATE_LOGIN_FAILED:
      return {
        ...state,
        loading: false,
        updateLoginStatus: false,
      };
      break
    

    case type.UPDATE_STATUS_ERROR:
      return {
        error: action.data,
        loginStatus: action.data,
      };

      break;
    case type.RESET_LOGIN_STATUS:
      return {
        ...state,
        loginStatus: false,
        keyLogin: 0
      };

      break;

    default:
      return state;
      break
  }
}
