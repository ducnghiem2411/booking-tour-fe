import * as type from "../TypeAction";

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

const registerSucced = () => {
  return {
    type: type.REGISTER_SUCCESSED,
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

export {
  loginRequest,
  loginSucced,
  loginFailed,
  onLogout,
  deleteCountryItemRequest,
  deleteCountryItemSucced,
  deleteCountryItemFailed,
  createCountryRequest,
  fetchDataCountryRequest,
  fetchDataCountrySucced,
  fetchDataCountryFailed,
  createCountrySucced,
  createCountryFailed,
  registerRequest,
  registerSucced,
  showCreateAccModal,
  onChangeStatusCreateAccModal,
  registerFailed,
  onCloseModal,
  onShowModal,
  onUpdateStatusError,
};
