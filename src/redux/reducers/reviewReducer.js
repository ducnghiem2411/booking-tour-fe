import { transpileModule } from "typescript";
import * as type from "../TypeAction";

const initialState = {
  loading: false,
  error: false,
  message: "",
  reviewsList: [],
  statusSubmitReview: false,
};



export default function reviewReducer(state = initialState, action) {
  
  switch (action.type) {
    case type.SUBMIT_USER_REVIEW_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case type.SUBMIT_USER_REVIEW_SUCCED:
     
      state.reviewsList.push(action.data);
      state.loading = false;
      state.statusSubmitReview = true
      
      return { ...state };

    case type.SUBMIT_USER_REVIEW_FAILED:
      return {
        ...state,
        error: true,
        loading: false,
        statusSubmitReview: false,
        message: action.message,
      };

    case type.FETCH_REVIEWS_LIST_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case type.FETCH_REVIEWS_LIST_SUCCED:
      return {
        ...state,
        loading: false,
        reviewsList: action.data
      }
     
    
    case type.FETCH_REVIEWS_LIST_FAILED:
      return {
        ...state,
        error: true,
        loading: false,
        // message: action.message.data.message,
      };



    default:
      return state;
  }
}
