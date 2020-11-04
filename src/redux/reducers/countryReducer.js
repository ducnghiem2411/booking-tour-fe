import * as type from "../TypeAction";

const initialState = {
  loading: false,
  error: false,
  registerStatus: false,
  message: "",
  dataCountry: [],
};

export default function countryReducer(state = initialState, action) {
  switch (action.type) {
    
    case type.CREATE_COUNTRY_REQUESTED:
      return {
        ...state,
        loading: true,
      };

    case type.CREATE_COUNTRY_SUCCESSED:
      state.dataCountry.push(action.data);
      state.loading = false;
      return state;

    case type.CREATE_COUNTRY_FAILED:
      return {
        ...state,
        error: true,
        message: action.message,
      };

      case type.FETCH_COUNTRY_REQUEST:
      return {
        ...state,
        loading: action.loading,
      };

    case type.FETCH_COUNTRY_SUCCED:
      // console.log("action.data", action.data);
      // console.log('action.data', action.data)
      return {
        ...state,
        dataCountry: action.data,
        loading: action.loading
      }

      case type.FETCH_COUNTRY_FAILED:
      return {
        ...state,
        error: true,
        message: action.message,
      };

    

    default:
      return state;
  }
}
