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
const loginRequest = (email, password) => {
  return {
    type: type.LOGIN_REQUESTED,
    payload: {
      email: email,
      password: password,
    },
  };
};

const loginSucced = (data) => {
  return {
    type: type.LOGIN_SUCCESSED,
    data,
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
  console.log('body', body)
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
const onCloseModal = (status) => {
  return {
    type: type.CLOSE_MODAL,
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

export {
  loginRequest,
  loginSucced,
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
  updateInfoPlaceItemFailed,
  changeStatusEdit,
  deleteCountryItemFailed,
  createCountryRequest,
  getDataRowTableFailed,
  fetchDataCountryRequest,
  updateInfoTourItemRequest,
  updateInfoTourItemSucced,
  updateInfoTourItemFailed,
  sendDataRowIntoStore,
  fetchDataCountrySucced,
  fetchDataCountryFailed,
  updateInfoCountryItemSucced,
  fetchDataPlaceInCountrySucced,
  updateInfoCountryItemFailed,
  updateInfoCountryItemRequest,
  getDataRowTableRequested,
  createCountrySucced,
  deleteTourItemSucced,
  createPlaceRequest,
  createCountryFailed,
  registerRequest,
  fetchDataTourRequest,
  fetchDataTourSucced,
  fetchDataTourFailed,
  deleteTourItemFailed,
  createPlaceSucced,
  deleteTourItemRequest,
  createTourRequest,
  createTourSucced,
  createTourFailed,
  createPlaceFailed,
  getDataRowTableSucced,
  registerSucced,
  showCreateAccModal,
  fetchDataPlaceInCountryRequest,
  fetchDataPlaceInCountryFailed,
  onChangeStatusCreateAccModal,
  registerFailed,
  onCloseModal,
  onShowModal,
  onUpdateStatusError,
};
