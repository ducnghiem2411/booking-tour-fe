import * as type from "../TypeAction";

const initialState = {
    isDisplay: false,
    isDisplayLoginModal: false,
    isDisplayRegisterModal: false,
    statusCreateModal: false
};

export default function displayModalReducer(state = initialState, action) {
  switch (action.type) {
    case type.SHOW_MODAL:
      return {
        ...state,
        isDisplay: action.status,
      };
      break;
    case type.SHOW_MODAL_LOGIN:
      return {
        ...state,
        isDisplayLoginModal: action.status,
      };
      break;
    case type.SHOW_MODAL_REGISTER:
      return {
        ...state,
        isDisplayRegisterModal: action.status,
      };
      break;
    case type.CLOSE_MODAL:
      return {
        ...state,
        isDisplay: action.status,
      };
      break;
    case type.CLOSE_MODAL_LOGIN:
      return {
        ...state,
        isDisplayLoginModal: action.status,
      };
      break;
    case type.CLOSE_MODAL_REGISTER:
      return {
        ...state,
        isDisplayRegisterModal: action.status,
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
