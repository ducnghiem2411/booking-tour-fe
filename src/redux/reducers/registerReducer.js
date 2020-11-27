import * as type from "../TypeAction";

const initialState = {
  loading: false,
  error: false,
  registerStatus: false,
  keyRegister: 0,
  message: "",
  loadingRegister: false
  
};

export default function registerReducer(state = initialState, action) {
  switch (action.type) {
    case type.REGISTER_REQUEST:
      return {
        ...state,
        loadingRegister: true,
      };

      break;
    case type.REGISTER_SUCCESSED:
      return {
        ...state,
        registerStatus: true,
        keyRegister: state.keyRegister + 1 ,
        loadingRegister: false,
        message: action.message
      };

      break;
    case type.REGISTER_FAILED:
      return {
        ...state,
        error: true,
        registerStatus: false,
        keyRegister: state.keyRegister + 1,
        loadingRegister: false,
        message: action.message.message
      };

      break;
    case type.UPDATE_STATUS_ERROR:
      return {
        ...state,
        error: action.data,
        registerStatus: action.data,
      };

      break;
    case type.RESET_REGISTER_STATUS:
      return {
        ...state,
        registerStatus: false,
        keyRegister: 0
      };

      break;

   

    default:
      return state;
  }
}
