import { transpileModule } from "typescript";
import * as type from "../TypeAction";

const initialState = {
  loading: false,
  error: false,
  message: "",
  reviewsList: [],
  statusSubmitReview: false,
  keyReview: 0,
  allReviews: ''
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
      state.keyReview  ++
      
      return { ...state };

    case type.SUBMIT_USER_REVIEW_FAILED:
      return {
        ...state,
        error: true,
        loading: false,
        statusSubmitReview: false,
        keyReview : state.keyReview + 1,
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
      };
    case type.FETCH_REVIEWS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case type.FETCH_REVIEWS_SUCCED:
      return {
        ...state,
        loading: false,
        allReviews: action.data
      }
     
    
    case type.FETCH_REVIEWS_FAILED:
      return {
        ...state,
        loading: false,
        message: ''
      };
    case type.RESET_STATE_IN_STORE:
      return {
        ...state,
        statusSubmitReview: false,
        keyReview: 0
      };



    default:
      return state;
  }
}
