import * as type from "../TypeAction";

const initialState = {
  loading: false,
  error: false,
  registerStatus: '',
  message: ""
  
};

export default function registerReducer(state = initialState, action) {
  switch (action.type) {
    case type.REGISTER_REQUEST:
      return {
        loading: true,
      };

      break;
    case type.REGISTER_SUCCESSED:
      return {
        registerStatus: true,
        loading: false
      };

      break;
    case type.REGISTER_FAILED:
      return {
        error: true,
        registerStatus: false,
        loading: false,
        message: action.message.message
      };

      break;
    case type.UPDATE_STATUS_ERROR:
      return {
        error: action.data,
        registerStatus: action.data,
      };

      break;

      return {
        loading: false,
      };

    default:
      return state;
  }
}
