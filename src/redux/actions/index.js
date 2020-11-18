import * as type from "../TypeAction";

const fetchDataPlaceInCountryRequest = (id) => {
  return {
    type: type.FETCH_DATA_PLACE_IN_COUNTRY_REQUESTED,
    id,
  };
};

const fetchDataPlaceInCountrySucced = (data) => {
  return {
    type: type.FETCH_DATA_PLACE_IN_COUNTRY_SUCCED,
    data,
  };
};
const fetchDataPlaceInCountryFailed = (message) => {
  return {
    type: type.FETCH_DATA_PLACE_IN_COUNTRY_FAILED,
    message,
  };
};
const fetchTopListDestinationRequest = () => {
  return {
    type: type.FETCH_TOP_LIST_DESTINATION_REQUESTED,
  };
};
const dataItemTourRequest = (itemTour) => {
  return {
    type: type.DATA_ITEM_TOUR_REQUESTED,
    itemTour
  };
};
const fetchTopListDestinationSucced = (data) => {
  return {
    type: type.FETCH_TOP_LIST_DESTINATION_SUCCED,
    data
  };
};
const fetchTopListDestinationFailed = (message) => {
  return {
    type: type.FETCH_TOP_LIST_DESTINATION_FAILED,
    message
  };
};
const loginRequest = (email, password) => {
  return {
    type: type.LOGIN_REQUESTED,
    payload: {
      email: email,
      password: password,
    },
  };
};

const loginSucced = (token) => {
  return {
    type: type.LOGIN_SUCCESSED,
    token,
  };
};
const loginFailed = (message) => {
  return {
    type: type.LOGIN_FAILED,
    message,
  };
};

const registerRequest = (username, email, password) => {
  return {
    type: type.REGISTER_REQUEST,
    payload: {
      username: username,
      email: email,
      password: password,
    },
  };
};

// const createCountryRequest = (name, description, image) => {
//   console.log('image', image)

//   return {
//     type: type.CREATE_COUNTRY_REQUESTED,
//     payload: {
//       name: name,
//       description: description,
//       image: image,
//     },
//   };
// };



const createPlaceRequest = (countryId, country, name, description) => {
  return {
    type: type.CREATE_PLACE_REQUESTED,
    payload: {
      countryId: countryId,
      country: country,
      name: name,
      description: description,
      // image: image,
    },
  };
};
const createPlaceSucced = (data) => {
  return {
    type: type.CREATE_PLACE_SUCCESSED,
    data,
  };
};
const createPlaceFailed = (message) => {
  return {
    type: type.CREATE_PLACE_FAILED,
    message,
  };
};





const createTourRequest = (countryId, countryName, placeId,  placeName, tourName, checkIn, checkOut, price, member, description) => {
  return {
    type: type.CREATE_TOUR_REQUESTED,
    payload: {
      countryId: countryId,
      countryName: countryName,
      placeId: placeId,
      placeName: placeName,
      tourName: tourName,
      checkIn: checkIn,
      checkOut: checkOut,
      price: price,
      member: member,
      description: description,
      // image: image,
    },
  };
};
const createTourSucced = (data) => {
  return {
    type: type.CREATE_TOUR_SUCCESSED,
    data,
  };
};
const createTourFailed = (message) => {
  return {
    type: type.CREATE_TOUR_FAILED,
    message,
  };
};



const createCountryRequest = (name, description) => {
  return {
    type: type.CREATE_COUNTRY_REQUESTED,
    payload: {
      name: name,
      description: description,
      // image: image,
    },
  };
};
const createCountrySucced = (data) => {
  return {
    type: type.CREATE_COUNTRY_SUCCESSED,
    data,
  };
};
const createCountryFailed = (message) => {
  return {
    type: type.CREATE_COUNTRY_FAILED,
    message,
  };
};

const fetchDataCountryRequest = () => {
  return {
    type: type.FETCH_COUNTRY_REQUEST,
  };
};

const fetchDataCountrySucced = (data) => {
  return {
    type: type.FETCH_COUNTRY_SUCCED,
    data,
  };
};

const fetchDataCountryFailed = (message) => {
  return {
    type: type.FETCH_COUNTRY_FAILED,
    message,
  };
};



const fetchDataPlaceRequest = () => {
  return {
    type: type.FETCH_PLACE_REQUEST,
  };
};

const fetchDataPlaceSucced = (data) => {
  return {
    type: type.FETCH_PLACE_SUCCED,
    data,
  };
};

const fetchDataPlaceFailed = (message) => {
  return {
    type: type.FETCH_PLACE_FAILED,
    message,
  };
};





const fetchDataTourRequest = () => {
  return {
    type: type.FETCH_TOUR_REQUEST,
  };
};

const fetchDataTourSucced = (data) => {
  return {
    type: type.FETCH_TOUR_SUCCED,
    data,
  };
};

const fetchDataTourFailed = (message) => {
  return {
    type: type.FETCH_TOUR_FAILED,
    message,
  };
};










const fetchInfoTourRequest = (id) => {
  return {
    type: type.FETCH_INFO_TOUR_REQUEST,
    id
  };
};

const fetchInfoTourSucced = (data) => {
  return {
    type: type.FETCH_INFO_TOUR_SUCCED,
    data,
  };
};

const fetchInfoTourFailed = (message) => {
  return {
    type: type.FETCH_INFO_TOUR_FAILED,
    message,
  };
};












const fetchReviewsListRequest = (id) => {
  return {
    type: type.FETCH_REVIEWS_LIST_REQUEST,
    id
  };
};

const fetchReviewsListSucced = (data) => {
  return {
    type: type.FETCH_REVIEWS_LIST_SUCCED,
    data,
  };
};

const fetchReviewsListFailed = (message) => {
  return {
    type: type.FETCH_REVIEWS_LIST_FAILED,
    message,
  };
};











const submitUserReviewRequest = (review, rate, tourId, placeId) => {
  return {
    type: type.SUBMIT_USER_REVIEW_REQUEST,
    payload: {
      review: review,
      rate: rate,
      tourId: tourId,
      placeId: placeId
    }
    
  };
};

const submitUserReviewSucced = (data) => {
  return {
    type: type.SUBMIT_USER_REVIEW_SUCCED,
    data,
  };
};

const submitUserReviewFailed = (message) => {
  return {
    type: type.SUBMIT_USER_REVIEW_FAILED,
    message,
  };
};







const bookingTourRequest = (id, name) => {
  return {
    type: type.BOOKING_TOUR_REQUEST,
    payload : {
      id: id,
      name: name
    }
  };
};

const bookingTourSucced = (data) => {
  return {
    type: type.BOOKING_TOUR_SUCCED,
    data,
  };
};

const bookingTourFailed = (message) => {
  return {
    type: type.BOOKING_TOUR_FAILED,
    message,
  };
};



const updateInfoCountryItemRequest = (id, body) => {
  return {
    type: type.UPDATE_DATA_COUNTRY_REQUESTED,
    id,
    body,
  };
};

const updateInfoCountryItemSucced = (data) => {
  return {
    type: type.UPDATE_DATA_COUNTRY_SUCCED,
    data,
  };
};

const updateInfoCountryItemFailed = (message) => {
  return {
    type: type.UPDATE_DATA_COUNTRY_FAILED,
    message,
  };
};




const updateInfoPlaceItemRequest = (id, body) => {
  return {
    type: type.UPDATE_DATA_PLACE_REQUESTED,
    id,
    body
  };
};

const updateInfoPlaceItemSucced = (data) => {
  return {
    type: type.UPDATE_DATA_PLACE_SUCCED,
    data,
  };
};

const updateInfoPlaceItemFailed = (message) => {
  return {
    type: type.UPDATE_DATA_PLACE_FAILED,
    message,
  };
};







const updateInfoTourItemRequest = (countryId, placeId, id, body) => {
  return {
    type: type.UPDATE_DATA_TOUR_REQUESTED,
    countryId,
    placeId,
    id,
    body
  };
};

const updateInfoTourItemSucced = (data) => {
  
  return {
    type: type.UPDATE_DATA_TOUR_SUCCED,
    data,
  };
};

const updateInfoTourItemFailed = (message) => {
  return {
    type: type.UPDATE_DATA_TOUR_FAILED,
    message,
  };
};




const deleteCountryItemRequest = (id) => {
  return {
    type: type.DELETE_COUNTRY_REQUESTED,
    id,
  };
};

const deleteCountryItemSucced = (id) => {
  return {
    type: type.DELETE_COUNTRY_SUCCESSED,
    id,
  };
};

const deleteCountryItemFailed = (message) => {
  return {
    type: type.DELETE_COUNTRY_FAILED,
    message,
  };
};




const deletePlaceItemRequest = (id) => {
  return {
    type: type.DELETE_PLACE_REQUESTED,
    id,
  };
};

const deletePlaceItemSucced = (id) => {
  return {
    type: type.DELETE_PLACE_SUCCESSED,
    id,
  };
};

const deletePlaceItemFailed = (message) => {
  return {
    type: type.DELETE_PLACE_FAILED,
    message,
  };
};







const deleteTourItemRequest = (id) => {
  return {
    type: type.DELETE_TOUR_REQUESTED,
    id,
  };
};

const deleteTourItemSucced = (id) => {
  return {
    type: type.DELETE_TOUR_SUCCESSED,
    id,
  };
};

const deleteTourItemFailed = (message) => {
  return {
    type: type.DELETE_TOUR_FAILED,
    message,
  };
};




const registerSucced = () => {
  return {
    type: type.REGISTER_SUCCESSED,
  };
};
const getDataRowTableRequested = (id) => {
  return {
    type: type.GET_DATA_ROW_TABLE_REQUESTED,
    id,
  };
};
const getDataRowTableSucced = (data) => {
  return {
    type: type.GET_DATA_ROW_TABLE_SUCCED,
    data,
  };
};
const getDataRowTableFailed = (message) => {
  return {
    type: type.GET_DATA_ROW_TABLE_FAILED,
    message,
  };
};

const registerFailed = (message) => {
  return {
    type: type.REGISTER_FAILED,
    message,
  };
};
const onUpdateStatusError = (data) => {
  return {
    type: type.UPDATE_STATUS_ERROR,
    data,
  };
};
const onShowModal = (status) => {
  return {
    type: type.SHOW_MODAL,
    status,
  };
};
const onShowModalLogin = (status) => {
  return {
    type: type.SHOW_MODAL_LOGIN,
    status,
  };
};
const onShowModalRegister = (status) => {
  return {
    type: type.SHOW_MODAL_REGISTER,
    status,
  };
};
const onCloseModal = (status) => {
  return {
    type: type.CLOSE_MODAL,
    status,
  };
};
const onCloseModalLogin = (status) => {
  return {
    type: type.CLOSE_MODAL_LOGIN,
    status,
  };
};
const onCloseModalRegister = (status) => {
  return {
    type: type.CLOSE_MODAL_REGISTER,
    status,
  };
};
const showCreateAccModal = (status) => {
  return {
    type: type.SHOW_CREATE_ACC_MODAL,
    status,
  };
};
const onChangeStatusCreateAccModal = (status) => {
  return {
    type: type.SHOW_LOGIN_ACC_MODAL,
    status,
  };
};

const onLogout = () => {
  return {
    type: type.LOGOUT,
  };
};

const sendDataRowIntoStore = (data) => {
  return {
    type: type.SEND_DATA_ROW_INTO_STORE,
    data,
  };
};
const changeStatusEdit = () => {
  return {
    type: type.CHANGE_STATUS_EDIT,
  };
};
// const registerRequest = () => {
//   return {
//     type: type.CHANGE_STATUS_EDIT,
//   };
// };







export {
  loginRequest,
  loginSucced,
  registerRequest,
  fetchDataPlaceRequest,
  fetchDataPlaceSucced,
  fetchDataPlaceFailed,
  loginFailed,
  deletePlaceItemRequest,
  deletePlaceItemSucced,
  deletePlaceItemFailed,
  onLogout,
  deleteCountryItemRequest,
  deleteCountryItemSucced,
  updateInfoPlaceItemRequest,
  updateInfoPlaceItemSucced,
  fetchReviewsListRequest,
  fetchReviewsListSucced,
  fetchReviewsListFailed,
  onCloseModalRegister,
  updateInfoPlaceItemFailed,
  changeStatusEdit,
  deleteCountryItemFailed,
  createCountryRequest,
  onCloseModalLogin,
  onShowModalLogin,
  onShowModalRegister,
  getDataRowTableFailed,
  fetchDataCountryRequest,
  updateInfoTourItemRequest,
  updateInfoTourItemSucced,
  updateInfoTourItemFailed,
  sendDataRowIntoStore,
  fetchInfoTourRequest,
  fetchInfoTourSucced,
  fetchInfoTourFailed,

  fetchDataCountrySucced,
  fetchDataCountryFailed,
  updateInfoCountryItemSucced,
  fetchDataPlaceInCountrySucced,
  updateInfoCountryItemFailed,
  updateInfoCountryItemRequest,
  getDataRowTableRequested,
  fetchTopListDestinationSucced,
  fetchTopListDestinationFailed,
  createCountrySucced,
  deleteTourItemSucced,
  createPlaceRequest,
  createCountryFailed,
  fetchDataTourRequest,
  fetchDataTourSucced,
  fetchDataTourFailed,
  deleteTourItemFailed,
  createPlaceSucced,
  deleteTourItemRequest,
  createTourRequest,
  dataItemTourRequest,
  createTourSucced,
  createTourFailed,
  createPlaceFailed,
  submitUserReviewRequest,
  submitUserReviewSucced,
  submitUserReviewFailed,
  getDataRowTableSucced,
  registerSucced,
  showCreateAccModal,
  bookingTourRequest,
  bookingTourSucced,
  bookingTourFailed,
  fetchDataPlaceInCountryRequest,
  fetchTopListDestinationRequest,
  fetchDataPlaceInCountryFailed,
  onChangeStatusCreateAccModal,
  registerFailed,
  onCloseModal,
  onShowModal,
  onUpdateStatusError,
};
