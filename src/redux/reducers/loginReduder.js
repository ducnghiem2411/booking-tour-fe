import * as type from "../TypeAction";

const initialState = {
  loading: false,
  // userData: {
  //   username: null,
  //   password: null,
  // },
  error: false,
  token: "",
  messageLogin: "",
  loginStatus: false,
  resetStatus: false,
  keyLogin: 0,
  keyReset: 0,
  updateLoginStatus: false,
  messageReset: '',
  accessToken:'',
  loadingLogin: false

};

export default function loginReduder(state = initialState, action) {
  switch (action.type) {
    case type.LOGIN_REQUESTED:
      return {
        ...state,
        loadingLogin: true,
      };
      break

    case type.LOGIN_SUCCESSED:
      localStorage.setItem("token", JSON.stringify(action.token.accessToken));

      return {
        ...state,
        loadingLogin: false,
        keyLogin: state.keyLogin +1 ,
        loginStatus: true,
        token: action.token,
      };
      break

    case type.LOGIN_FAILED:
      return {
        ...state,
        loadingLogin: false,
        error: true,
        loginStatus: false,
        keyLogin: state.keyLogin + 1 ,
        messageLogin: action.message.message,
      };
      break
    // case type.LOGIN_GOOGLE_REQUEST:
    //   localStorage.setItem("token", JSON.stringify(action.token.accessToken));

    //   return {
    //     ...state,
        
    //   };
    //   break
    case type.RESET_PASSWORD_REQUEST:
      return {
        ...state,
        loading: true,
      };
      break

    case type.RESET_PASSWORD_SUCCED:
    

      return {
        ...state,
        loading: false,
        keyReset: state.keyReset +1 ,
        resetStatus: true,
        messageReset: action.message
      };
      break

    case type.RESET_PASSWORD_FAILED:
      
      return {
        ...state,
        loading: false,
        error: true,
        resetStatus: false,
        keyReset: state.keyReset + 1 ,
        messageReset: action.message
      };
      break
    case type.UPDATE_LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      };
      break

    case type.UPDATE_LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        loginStatus: true,
        updateLoginStatus: true,
        // token: action.token,
        accessToken: action.accessToken
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
