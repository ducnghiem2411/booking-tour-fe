import { transpileModule } from "typescript";
import * as type from "../TypeAction";

const initialState = {
  loading: false,
  error: false,
  message: "",
  reviewsList: [],
};



export default function reviewReducer(state = initialState, action) {
  
  switch (action.type) {
    case type.SUBMIT_USER_REVIEW_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case type.SUBMIT_USER_REVIEW_SUCCED:
     
      state.dataCountry.data.push(action.data);
      state.loading = false;
      state.statusCreate = true;
      return { ...state };

    case type.SUBMIT_USER_REVIEW_FAILED:
      return {
        ...state,
        error: true,
        loading: false,
        message: action.message.data.message,
      };



    default:
      return state;
  }
}
