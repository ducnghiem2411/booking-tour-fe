import * as type from "../TypeAction";

const initialState = {
  loading: false,
  error: false,
  registerStatus: false,
  message: "",
  dataPlace: [],
  dataRow: null,
  statusEdit: false,
  statusCreate: false
};

var findIndex = (dataPlace, id) => {
  var result = -1;
  dataPlace.forEach((itemPlace, index) => {
    if (itemPlace._id === id) {
      result = index;
    }
  });

  return result;
};

export default function placeReducer(state = initialState, action) {
  var index = -1
  switch (action.type) {


    case type.FETCH_PLACE_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case type.FETCH_PLACE_SUCCED:
      return {
        ...state,
        dataPlace: action.data,
        loading: false,
      };

    case type.FETCH_PLACE_FAILED:
      return {
        ...state,
        error: true,
        message: action.message,
      };


    case type.CREATE_PLACE_REQUESTED:
      return {
        ...state,
        loading: true,
      };

    case type.CREATE_PLACE_SUCCESSED:
      state.dataPlace.data.push(action.data);
      state.loading = false;
      state.statusCreate = true;
      return { ...state };

    case type.CREATE_PLACE_FAILED:
      return {
        ...state,
        error: true,
        message: action.message.data.message,
      };

    
    case type.DELETE_PLACE_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case type.DELETE_PLACE_SUCCESSED:
      index = findIndex(state.dataPlace.data, action.id);
      state.dataPlace.data.splice(index, 1);
      state.loading = false;
      return { ...state };

    case type.DELETE_PLACE_FAILED:
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
    case type.UPDATE_DATA_PLACE_REQUESTED:
      // console.log('action.data', action.data)

      return {
        ...state,
        loading: true,
      };
    case type.UPDATE_DATA_PLACE_SUCCED:
      // console.log('action.data', action.data)
      index = findIndex(state.dataPlace.data, action.data._id);
      state.dataPlace.data[index] = action.data;
      state.loading = false;
      return { ...state };

    case type.UPDATE_DATA_PLACE_FAILED:
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
