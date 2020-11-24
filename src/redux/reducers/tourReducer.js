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
  messageBooking: '',
  bookingTourStatus: false,
  keyBookingTourStatus: 0,
  dataFilter: [],
  statusAdmin: false,
  keyAdminModal: 0,
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
  const messageCreate = "Created tour successfully !"
  const messageDelete = "Deleted tour successfully !"
  const messageUpdate = "Updated tour successfully !"
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
        loading: false,
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
      state.statusAdmin = true;
      state.keyAdminModal++;
      state.message = messageCreate;
      return { ...state };

    case type.CREATE_TOUR_FAILED:
      return {
        ...state,
        error: true,
        statusAdmin: false,
        keyAdminModal: state.keyAdminModal + 1,
        message: action.message.data.message,
      };

      case type.RESET_STATUS_ADMIN:
        return {
          ...state,
  
          statusAdmin: false,
          keyAdminModal: 0,
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
      state.statusAdmin = true;
      state.keyAdminModal++;
      state.message = messageDelete;
      return { ...state };

    case type.DELETE_TOUR_FAILED:
      return {
        ...state,
        loading: false,
        statusAdmin: false,
        keyAdminModal: state.keyAdminModal + 1,
        message: action.message,
      };
    


    case type.GET_DATA_ROW_TABLE_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case type.GET_DATA_ROW_TABLE_SUCCED:
      return {
        ...state,
        loading: false,
        dataRow: action.data,
      };
    case type.GET_DATA_ROW_TABLE_FAILED:
      return {
        ...state,
        loading: false,
        message: action.message,
      };



      
    


    case type.GET_FILTER_TOUR_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case type.GET_FILTER_TOUR_SUCCED:
      return {
        ...state,
        loading: false,
        dataFilter: action.data,
      };
    case type.GET_FILTER_TOUR_FAILED:
      return {
        ...state,
        loading: false,
        message: action.message,
      };




    case type.SEND_DATA_ROW_INTO_STORE:

      return {
        ...state,
        dataRow: action.data,
        statusEdit: true,
      };
    case type.CHANGE_STATUS_EDIT:

      return {
        ...state,

        statusEdit: false,
      };
    case type.UPDATE_DATA_TOUR_REQUESTED:

      return {
        ...state,
        loading: true,
      };
    case type.UPDATE_DATA_TOUR_SUCCED:
      index = findIndex(state.dataTour.data, action.data._id);
      state.dataTour.data[index] = action.data;
      state.loading = false;
      state.message = messageUpdate;
      state.statusAdmin = true;
      state.keyAdminModal++;
      return { ...state };

    case type.UPDATE_DATA_TOUR_FAILED:
      return {
        ...state,
        loading: false,
        message: action.message,
        statusAdmin: false,
        keyAdminModal: state.keyAdminModal + 1,
      };
   
    case type.DATA_ITEM_TOUR_REQUESTED:
      return {
        ...state,
        loading: true
      };
    case type.DATA_ITEM_TOUR_SUCCED:
      return {
        ...state,
        loading: false,
        itemTour: action.data,
      };

    case type.DATA_ITEM_TOUR_FAILED:
      return {
        ...state,
        loading: false,
      };
    case type.BOOKING_TOUR_SUCCED:
      return {
        ...state,
        loading: false,
        keyBookingTourStatus : state.keyBookingTourStatus + 1,
        bookingTourStatus: true,
      };
    case type.BOOKING_TOUR_FAILED:
      return {
        ...state,
        loading: false,
        messageBooking: action.message,
        keyBookingTourStatus : state.keyBookingTourStatus + 1,
        bookingTourStatus: false,
      };
    case type.RESET_STATUS_BOOKING_TOUR:
      return {
        ...state,
       
        keyBookingTourStatus : 0,
        bookingTourStatus: false,
      };

    default:
      return state;
  }
}
