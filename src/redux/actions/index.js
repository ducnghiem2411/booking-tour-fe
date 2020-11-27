import * as type from "../TypeAction";
import { Button, notification, Divider, Space } from "antd";

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

const fetchReviewsRequest = () => {
  return {
    type: type.FETCH_REVIEWS_REQUEST,
  };
};

const fetchReviewsSucced = (data) => {
  return {
    type: type.FETCH_REVIEWS_SUCCED,
    data,
  };
};
const fetchReviewsFailed = (message) => {
  return {
    type: type.FETCH_REVIEWS_FAILED,
    message,
  };
};
const fetchTopListDestinationRequest = () => {
  return {
    type: type.FETCH_TOP_LIST_DESTINATION_REQUESTED,
  };
};

const dataItemTourRequest = (id) => {
  return {
    type: type.DATA_ITEM_TOUR_REQUESTED,
    id,
  };
};
const dataItemTourSucced = (data) => {
  return {
    type: type.DATA_ITEM_TOUR_SUCCED,
    data,
  };
};
const dataItemTourFailed = () => {
  return {
    type: type.DATA_ITEM_TOUR_FAILED,
  };
};

const fetchTopListDestinationSucced = (data) => {
  return {
    type: type.FETCH_TOP_LIST_DESTINATION_SUCCED,
    data,
  };
};
const fetchTopListDestinationFailed = (message) => {
  return {
    type: type.FETCH_TOP_LIST_DESTINATION_FAILED,
    message,
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

const updateLoginRequest = () => {
  return {
    type: type.UPDATE_LOGIN_REQUEST,
  };
};


const getInfoUserRequest = (token) => {
  return {
    type: type.GET_INFO_USER_REQUEST,
    token
  };
};
const getInfoUserSucced = (data) => {
  return {
    type: type.GET_INFO_USER_SUCCED,
    data
  };
};
const getInfoUserFailed = (message) => {
  return {
    type: type.GET_INFO_USER_FAILED,
    message
  };
};




const updateInfoUserRequest = (phone, bio, image, username) => {
  return {
    type: type.UPDATE_INFO_USER_REQUEST,
    payload: {
      phone,
      bio,
      image,
      username
    }
    
  };
};
const updateInfoUserSucced = (data) => {
  return {
    type: type.UPDATE_INFO_USER_SUCCED,
    data
  };
};
const updateInfoUserFailed = (message) => {
  return {
    type: type.UPDATE_INFO_USER_FAILED,
    message
  };
};



const updateLoginSucced = (accessToken) => {
  return {
    type: type.UPDATE_LOGIN_SUCCESS,
    accessToken,
  };
};
// const updateLoginSucced = (token) => {
//   return {
//     type: type.UPDATE_LOGIN_SUCCESS,
//     token,
//   };
// };
const updateLoginFailed = (message) => {
  return {
    type: type.UPDATE_LOGIN_FAILED,
    message,
  };
};
const resetPasswordRequest = (email) => {
  return {
    type: type.RESET_PASSWORD_REQUEST,
    payload: {
      email: email
    }
  };
};
const resetPasswordSucced = (message) => {
  return {
    type: type.RESET_PASSWORD_SUCCED,
    message,
  };
};
const resetPasswordFailed = (message) => {
  return {
    type: type.RESET_PASSWORD_FAILED,
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

const createPlaceRequest = (countryId, country, name, description,image) => {
  return {
    type: type.CREATE_PLACE_REQUESTED,
    payload: {
      countryId: countryId,
      country: country,
      name: name,
      description: description,
      image: image,
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

const createTourRequest = (
  countryId,
  countryName,
  placeId,
  placeName,
  tourName,
  checkIn,
  checkOut,
  price,
  member,
  description,  
  images
) => {
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
      images: images,
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

const createCountryRequest = (name, description, image) => {
  return {
    type: type.CREATE_COUNTRY_REQUESTED,
    payload: {
      name: name,
      description: description,
      image: image,
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

const getFilterTourRequest = (paramsString) => {
  return {
    type: type.GET_FILTER_TOUR_REQUEST,
    paramsString,
  };
};

const setStatusFilteredTours = () => {
  return {
    type: type.SET_STATUS_FILTERED_TOURS,
    
  };
};

const increaseKeyFilter = () => {
  return {
    type: type.INCREASE_KEY_FILTER,
    
  };
};

const getFilterTourSucced = (data) => {
  return {
    type: type.GET_FILTER_TOUR_SUCCED,
    data,
  };
};

const getFilterTourFailed = (message) => {
  return {
    type: type.GET_FILTER_TOUR_FAILED,
    message,
  };
};



const fetchDataTourRequest = (paramsString) => {
  return {
    type: type.FETCH_TOUR_REQUEST,
    paramsString,
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





const fetchAllToursRequest = () => {
  return {
    type: type.FETCH_ALL_TOURS_REQUEST,

  };
};

const fetchAllToursSucced = (data) => {
  return {
    type: type.FETCH_ALL_TOURS_SUCCED,
    data,
  };
};

const fetchAllToursFailed = (message) => {
  return {
    type: type.FETCH_ALL_TOURS_FAILED,
    message,
  };
};




const fetchAllReviewsRequest = () => {
  return {
    type: type.FETCH_ALL_REVIEWS_REQUEST,

  };
};

const fetchAllReviewsSucced = (data) => {
  return {
    type: type.FETCH_ALL_REVIEWS_SUCCED,
    data,
  };
};

const fetchAllReviewsFailed = (message) => {
  return {
    type: type.FETCH_ALL_REVIEWS_FAILED,
    message,
  };
};



const fetchInfoTourRequest = (id) => {
  return {
    type: type.FETCH_INFO_TOUR_REQUEST,
    id,
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
    id,
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
      placeId: placeId,
    },
  };
};
const resetStateInStore = () => {
  return {
    type: type.RESET_STATE_IN_STORE,
  };
};
const resetStatusBookingTour = () => {
  return {
    type: type.RESET_STATUS_BOOKING_TOUR,
  };
};
const resetLoginStatus = () => {
  return {
    type: type.RESET_LOGIN_STATUS,
  };
};
const resetStatusReset = () => {
  return {
    type: type.RESET_STATUS_RESET,
  };
};
const resetRegisterStatus = () => {
  return {
    type: type.RESET_REGISTER_STATUS,
  };
};
const resetStatusAdmin = () => {
  return {
    type: type.RESET_STATUS_ADMIN,
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
    payload: {
      id: id,
      name: name,
    },
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
    body,
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

const updateInfoTourItemRequest = (id, body) => {
  return {
    type: type.UPDATE_DATA_TOUR_REQUESTED,

    id,
    body,
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

const registerSucced = (message) => {
  return {
    type: type.REGISTER_SUCCESSED,
    message
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
const showResetModal = (status) => {
  return {
    type: type.SHOW_RESET_MODAL,
    status
    
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

notification.config({
  duration: 1,
});

const openNotification = (status, message, description) => {
  if (status) {
    notification.success({
      message: message,
      description: description,
    });
  } else {
    notification.error({
      message: message,
      description: description,
    });
  }
};

export {
  fetchReviewsFailed,
  loginRequest,
  openNotification,
  loginSucced,
  fetchAllToursSucced,
  registerRequest,
  fetchDataPlaceRequest,
  fetchDataPlaceSucced,
  fetchDataPlaceFailed,
  loginFailed,
  resetPasswordFailed,
  fetchReviewsSucced,
  deletePlaceItemRequest,
  // resetStatus,
  deletePlaceItemSucced,
  deletePlaceItemFailed,
  updateInfoUserFailed,
  resetPasswordRequest,
  fetchAllToursFailed,
  resetLoginStatus,
  onLogout,
  // fetchReviewListFailed,
  deleteCountryItemRequest,
  deleteCountryItemSucced,
  setStatusFilteredTours,
  updateInfoPlaceItemRequest,
  updateInfoPlaceItemSucced,
  fetchReviewsListRequest,
  fetchReviewsListSucced,
  getFilterTourRequest,
  updateInfoUserRequest,
  updateInfoUserSucced,

  getFilterTourSucced,
  resetStatusAdmin,
  getFilterTourFailed,
  fetchReviewsListFailed,
  fetchAllReviewsFailed,
  onCloseModalRegister,
  updateInfoPlaceItemFailed,
  changeStatusEdit,
  increaseKeyFilter,
  // fetchReviewListSucced,
  deleteCountryItemFailed,
  resetStateInStore,
  createCountryRequest,
  getInfoUserSucced,
  onCloseModalLogin,
  onShowModalLogin,
  dataItemTourFailed,
  onShowModalRegister,
  getDataRowTableFailed,
  fetchDataCountryRequest,
  updateInfoTourItemRequest,
  dataItemTourSucced,
  updateInfoTourItemSucced,
  fetchReviewsRequest,
  resetPasswordSucced,
  updateInfoTourItemFailed,
  sendDataRowIntoStore,
  fetchInfoTourRequest,
  fetchInfoTourSucced,
  fetchInfoTourFailed,
  resetRegisterStatus,
  fetchAllToursRequest,
  fetchDataCountrySucced,
  resetStatusBookingTour,
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
  resetStatusReset,
  createCountryFailed,
  fetchDataTourRequest,
  fetchDataTourSucced,
  fetchDataTourFailed,
  deleteTourItemFailed,
  createPlaceSucced,
  deleteTourItemRequest,
  createTourRequest,
  dataItemTourRequest,
  getInfoUserFailed,
  createTourSucced,
  createTourFailed,
  createPlaceFailed,
  fetchAllReviewsRequest,
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
  fetchAllReviewsSucced,
  getInfoUserRequest,
  fetchDataPlaceInCountryFailed,
  showResetModal,
  onChangeStatusCreateAccModal,
  registerFailed,
  updateLoginRequest,
  updateLoginSucced,
  updateLoginFailed,
  onCloseModal,
  onShowModal,
  onUpdateStatusError,
};
