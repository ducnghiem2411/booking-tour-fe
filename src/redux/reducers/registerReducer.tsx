import * as type from "../TypeAction";

const initialState = {
  loading: false,
  error: false,
  registerStatus: false,
  message: ""
  
};

export default function registerReducer(state = initialState, action: any) {
  switch (action.type) {
    case type.REGISTER_REQUEST:
      return {
        loading: true,
      };

      break;
    case type.REGISTER_SUCCESSED:
      return {
        registerStatus: true,
      };

      break;
    case type.REGISTER_FAILED:
      return {
        error: true,
        message: action.message
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
