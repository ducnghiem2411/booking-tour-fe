import * as type from "../TypeAction";

const initialState = {
  loading: false,
  error: false,
  registerStatus: false,
  message: ""
  
};

export default function registerReducer(state = initialState, action: any) {
  switch (action.type) {
    case type.CREATE_COUNTRY_REQUESTED:
      return {
        loading: true,
      };

      break;
    case type.CREATE_COUNTRY_SUCCESSED:
      return {
        registerStatus: true,
      };

      break;
    case type.CREATE_COUNTRY_FAILED:
      return {
        error: true,
        message: action.message
      };

      break;
  

    default:
      return state;
  }
}
