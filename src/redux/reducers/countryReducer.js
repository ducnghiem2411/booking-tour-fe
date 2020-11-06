import * as type from "../TypeAction";

const initialState = {
  loading: false,
  error: false,
  registerStatus: false,
  message: "",
  dataCountry: [],
};

var findIndex = (dataCountries, id) => {
  var result = -1;
  dataCountries.forEach((dataCountry, index) => {
    if (dataCountry.id === id) {
      result = index;
    }
  });

  return result;
};

export default function countryReducer(state = initialState, action) {
  switch (action.type) {
    case type.CREATE_COUNTRY_REQUESTED:
      return {
        ...state,
        loading: true,
      };

    case type.CREATE_COUNTRY_SUCCESSED:
      state.dataCountry.push(action.data.data);
      console.log('action.data', action.data)
      state.loading = false;
      return { ...state };

    case type.CREATE_COUNTRY_FAILED:
      return {
        ...state,
        error: true,
        message: action.message,
      };

    case type.FETCH_COUNTRY_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case type.FETCH_COUNTRY_SUCCED:
      return {
        ...state,
        dataCountry: action.data,
        loading: false,
      };

    case type.FETCH_COUNTRY_FAILED:
      return {
        ...state,
        error: true,
        message: action.message,
      };
    case type.DELETE_COUNTRY_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case type.DELETE_COUNTRY_SUCCESSED:
      const index = findIndex(state.dataCountry, action.id);
      state.dataCountry.splice(index, 1);
      state.loading = false;
      return { ...state };

    case type.DELETE_COUNTRY_FAILED:
      return {
        ...state,
        message: action.message,
      };

    default:
      return state;
  }
}
