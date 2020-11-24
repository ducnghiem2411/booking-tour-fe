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
  statusCreate: false,
  dataCountriesTop: [],
   

  statusAdmin: false,
  keyAdminModal: 0,
  messageAdmin: ''

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
  const messageUpdate = "Updated country successfully !"
  const messageCreate = "Created country successfully !"
  const messageDelete = "Deleted country successfully !"
  var index = -1;
  switch (action.type) {
    case type.CREATE_COUNTRY_REQUESTED:
      return {
        ...state,
        loading: true,
      };

    case type.CREATE_COUNTRY_SUCCESSED:
      state.dataCountry.data.push(action.data);
      state.loading = false;
      state.statusCreate = true;
      state.statusAdmin = true;
      state.keyAdminModal++;
      state.message = messageCreate;

      return { ...state };

    case type.CREATE_COUNTRY_FAILED:
      return {
        ...state,
        error: true,
        loading: false,
        message: action.message,
        statusAdmin: false,
        keyAdminModal: state.keyAdminModal + 1,
      };
    case type.RESET_STATUS_ADMIN:
      return {
        ...state,

        statusAdmin: false,
        keyAdminModal: 0,
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
    case type.FETCH_TOP_LIST_DESTINATION_REQUESTED:
      return {
        ...state,
        loading: true,
      };

    case type.FETCH_TOP_LIST_DESTINATION_SUCCED:
      return {
        ...state,
        dataCountriesTop: action.data,
        loading: false,
      };

    case type.FETCH_TOP_LIST_DESTINATION_FAILED:
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
      state.statusAdmin = true;
      state.keyAdminModal++;
      state.message = messageDelete;
      return { ...state };

    case type.DELETE_COUNTRY_FAILED:
      return {
        ...state,
        loading: false,
        statusAdmin: false,
        keyAdminModal: state.keyAdminModal + 1,
      };
    
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

      return {
        ...state,
        loading: true,
      };
    case type.UPDATE_DATA_COUNTRY_SUCCED:
      index = findIndex(state.dataCountry.data, action.data._id);
      state.dataCountry.data[index] = action.data;
      state.message = messageUpdate;
      state.loading = false;
      state.statusAdmin = true;
      state.keyAdminModal++;
      return { ...state };

    case type.UPDATE_DATA_COUNTRY_FAILED:

      return {
        ...state,
        loading: false,
        message: action.message,
        statusAdmin: false,
        keyAdminModal: state.keyAdminModal + 1,
      };

    default:
      return state;
  }
}
