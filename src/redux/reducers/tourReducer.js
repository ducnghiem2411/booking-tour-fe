import * as type from "../TypeAction";

const initialState = {
  loading: false,
  error: false,
  registerStatus: false,
  message: "",
  dataTour: [],
  dataRow: null,
  statusEdit: false,
  statusCreate: false,
  itemTour: "",
  bookingTourStatus: false,
  messageBooking: ''
};

var findIndex = (dataTour, id) => {
  var result = -1;
  dataTour.forEach((itemTour, index) => {
    if (itemTour._id === id) {
      result = index;
    }
  });

  return result;
};

export default function tourReducer(state = initialState, action) {
  var index = -1;
  switch (action.type) {
    case type.FETCH_TOUR_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case type.FETCH_TOUR_SUCCED:
      return {
        ...state,
        dataTour: action.data,
        loading: false,
      };

    case type.FETCH_TOUR_FAILED:
      return {
        ...state,
        error: true,
        message: action.message,
      };

    case type.CREATE_TOUR_REQUESTED:
      return {
        ...state,
        loading: true,
      };

    case type.CREATE_TOUR_SUCCESSED:
      state.dataTour.data.push(action.data);
      state.loading = false;
      state.statusCreate = true;
      return { ...state };

    case type.CREATE_TOUR_FAILED:
      return {
        ...state,
        error: true,
        message: action.message.data.message,
      };

    case type.DELETE_TOUR_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case type.DELETE_TOUR_SUCCESSED:
      index = findIndex(state.dataTour.data, action.id);
      state.dataTour.data.splice(index, 1);
      state.loading = false;
      return { ...state };

    case type.DELETE_TOUR_FAILED:
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
    case type.UPDATE_DATA_TOUR_REQUESTED:
      console.log("action.data", action.data);

      return {
        ...state,
        loading: true,
      };
    case type.UPDATE_DATA_TOUR_SUCCED:
      index = findIndex(state.dataTour.data, action.data._id);
      state.dataTour.data[index] = action.data;
      state.loading = false;
      return { ...state };

    case type.UPDATE_DATA_TOUR_FAILED:
      return {
        ...state,
        loading: false,
        message: action.message,
      };
    case type.DATA_ITEM_TOUR_REQUESTED:
      return {
        ...state,
        itemTour: action.itemTour,
      };

    case type.BOOKING_TOUR_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case type.BOOKING_TOUR_SUCCED:
      return {
        ...state,
        loading: false,
        bookingTourStatus: true,
      };
    case type.BOOKING_TOUR_FAILED:
      return {
        ...state,
        loading: false,
        messageBooking: action.message,
        bookingTourStatus: false,
      };

    default:
      return state;
  }
}
