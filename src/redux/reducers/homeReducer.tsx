import * as type from "../TypeAction";

const initialState = {
  isAuthenticated: false,
};

export default function homeReducer(state = initialState, action: any) {
  switch (action.type) {
    case type.LOGIN_SUCCESSED:
      return {
        ...state,
        isAuthenticated: true,
      };
      break;
    case type.LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
      };
      break;
    default:
      return state;
  }
}
