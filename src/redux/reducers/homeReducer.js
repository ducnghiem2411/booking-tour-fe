import * as type from "../TypeAction";

const initialState = {
  isAuthenticated: false,
  // tokenStore : localStorage.getItem('token')
};

export default function homeReducer(state = initialState, action) {
  switch (action.type) {
    case type.LOGIN_SUCCESSED:
      return {
        ...state,
        isAuthenticated: true,
      };
      break;
    case type.LOGOUT:
      // const tokenEmpty = localStorage.removeItem('token')
      // console.log('tokenEmpty', tokenEmpty)
      return {
        ...state,
        // tokenStore: tokenEmpty
      };
      break;
    default:
      return state;
  }
}
