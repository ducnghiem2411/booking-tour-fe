import * as type from "../TypeAction";

const loginRequest = (email: string, password: string) => {
  return {
    type: type.LOGIN_REQUESTED,
    payload: {
      email: email,
      password: password,
    },
  };
};


const loginSucced = (data: any) => {
  return {
    type: type.LOGIN_SUCCESSED,
    data,
  };
};
const loginFailed = (message: string) => {
  return {
    type: type.LOGIN_FAILED,
    message,
  };
};


const registerRequest = (username: string, email: string,  password: string) => {
  return {
    type: type.REGISTER_REQUEST,
    payload: {
      username: username,
      email: email,
      password: password
    }
  };
};
const registerSucced = () => {
  return {
    type: type.REGISTER_SUCCESSED,
    
  };
};
const registerFailed = (message: string) => {
  return {
    type: type.REGISTER_FAILED,
    message
  };
};
const onUpdateStatusError = (data: any) => {
  return {
    type: type.UPDATE_STATUS_ERROR,
    data
  };
};
const onShowModal = (status: any) => {
  return {
    type: type.SHOW_MODAL,
    status
  };
};
const onCloseModal = (status: any) => {
  return {
    type: type.CLOSE_MODAL,
    status
  };
};
const showCreateAccModal = (status: any) => {
  return {
    type: type.SHOW_CREATE_ACC_MODAL,
    status
  };
};
const onChangeStatusCreateAccModal = (status: any) => {
  return {
    type: type.SHOW_LOGIN_ACC_MODAL,
    status
  };
};

const onLogout = () => {
  return {
    type: type.LOGOUT,
  };
};

export { loginRequest, loginSucced, loginFailed, onLogout, registerRequest, registerSucced, showCreateAccModal,onChangeStatusCreateAccModal, registerFailed,onCloseModal,onShowModal, onUpdateStatusError};
