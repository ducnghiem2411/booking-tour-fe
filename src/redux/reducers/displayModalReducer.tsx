import * as type from "../TypeAction";

const initialState = {
    isDisplay: false,
    statusCreateModal: false
};

export default function displayModalReducer(state = initialState, action: any) {
  switch (action.type) {
    case type.SHOW_MODAL:
      return {
        ...state,
        isDisplay: action.status,
      };
      break;
    case type.CLOSE_MODAL:
      return {
        ...state,
        isDisplay: action.status,
      };
      break;
    case type.SHOW_CREATE_ACC_MODAL:
      return {
        ...state,
        statusCreateModal: action.status,
      };
      break;
    case type.SHOW_LOGIN_ACC_MODAL:
      return {
        ...state,
        statusCreateModal: action.status,
      };
      break;
   
    default:
      return state;
  }
}
