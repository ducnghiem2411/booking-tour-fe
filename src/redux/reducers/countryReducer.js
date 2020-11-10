import { transpileModule } from "typescript";
import * as type from "../TypeAction";

const initialState = {
  loading: false,
  error: false,
  registerStatus: false,
  message: "",
  dataCountry: [],
  dataRow: null,
  statusEdit: false,
};

var findIndex = (dataCountries, id) => {
  var result = -1;
  dataCountries.forEach((dataCountry, index) => {
    if (dataCountry._id === id) {
      result = index;
    }
  });

  return result;
};

export default function countryReducer(state = initialState, action) {
  var index = -1
  switch (action.type) {
    case type.CREATE_COUNTRY_REQUESTED:
      return {
        ...state,
        loading: true,
      };

    case type.CREATE_COUNTRY_SUCCESSED:
      state.dataCountry.data.push(action.data);
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
      index = findIndex(state.dataCountry.data, action.id);
      state.dataCountry.data.splice(index, 1);
      state.loading = false;
      return { ...state };

    case type.DELETE_COUNTRY_FAILED:
      return {
        ...state,
        message: action.message,
      };
    // case type.GET_INFO_COUNTRY_ITEM_REQUEST:
    //   return {
    //     ...state,
    //     loading: true,
    //   };
    // case type.GET_INFO_COUNTRY_ITEM_SUCCED:
    //   return {
    //     ...state,
    //     loading: false,
    //   };
    // case type.GET_INFO_COUNTRY_ITEM_FAILED:
    //   return {
    //     ...state,
    //     loading: false,
    //     message: action.message,
    //   };
    case type.GET_DATA_ROW_TABLE_REQUESTED:
      // console.log('action.data', action.data)
      return {
        ...state,
        loading: true,
      };
    case type.GET_DATA_ROW_TABLE_SUCCED:
      // console.log('action.data', action.data)
      return {
        ...state,
        loading: false,
        dataRow: action.data,
      };
    case type.GET_DATA_ROW_TABLE_FAILED:
      // console.log('action.data', action.data)
      console.log("message", action.message);
      return {
        ...state,
        loading: false,
        message: action.message,
      };
    case type.SEND_DATA_ROW_INTO_STORE:
      // console.log('action.data', action.data)

      return {
        ...state,
        dataRow: action.data,
        statusEdit: true,
      };
    case type.CHANGE_STATUS_EDIT:
      // console.log('action.data', action.data)

      return {
        ...state,

        statusEdit: false,
      };
    case type.UPDATE_DATA_COUNTRY_REQUESTED:
      // console.log('action.data', action.data)

      return {
        ...state,
        loading: transpileModule,
      };
    case type.UPDATE_DATA_COUNTRY_SUCCED:
      // console.log('action.data', action.data)
      index = findIndex(state.dataCountry.data, action.data._id);
      state.dataCountry.data[index] = action.data;
      state.loading = false;
      return { ...state };

    case type.UPDATE_DATA_COUNTRY_FAILED:
      // console.log('action.data', action.data)

      return {
        ...state,
        loading: false,
        message: action.message,
      };

    default:
      return state;
  }
}
