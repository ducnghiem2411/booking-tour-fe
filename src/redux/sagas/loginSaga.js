import { call, put, takeLatest } from "redux-saga/effects";
import * as type from "../TypeAction";
import axios from "axios";

import { loginSucced, loginFailed } from "../actions/index";

const apiUrl = "http://localhost:8000/users/login";

export function* signInSaga(action) {
  
    const user = {
      email: action.payload.email,
      password: action.payload.password,
    
  };
  try {
    const response = yield call(axios.post, apiUrl, user);
    if (response) {
      yield put(loginSucced(response.data.data));
    }
  } catch (error) {
    yield put(loginFailed(error.response.data))
  }
}

export default function* loginSaga() {
  yield takeLatest(type.LOGIN_REQUESTED, signInSaga);
}
