import * as type from "../TypeAction";

const initialState = {
  loading: false,
  resetStatus: false,
  keyReset: 0,
  messageReset: ''

};

export default function resetReducer(state = initialState, action) {
  switch (action.type) {
    
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
    

      break;
    case type.RESET_STATUS_RESET:
      return {
        ...state,
        resetStatus: false,
        keyReset: 0
      };

      break;

    default:
      return state;
      
  }
}
