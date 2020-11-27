import { call, put, takeLatest } from "redux-saga/effects";
import * as type from "../TypeAction";
import axios from "axios";

import {
  loginSucced,
  loginFailed,
  updateLoginSucced,
  updateLoginFailed,
} from "../actions/index";

const apiUrl = "http://localhost:8000/users/update-login";

export function* updateLoginInSaga(action) {
  try {
    const token = JSON.parse(localStorage.getItem("token"));
    const headerAuth = {
      headers: { Authorization: "Bearer " + token },
    };
    const response = yield call(axios.get, apiUrl, headerAuth);
    if (response) {
      yield put(updateLoginSucced(response.data.data.accessToken));
    }
  } catch (error) {

    yield put(updateLoginFailed())
  }
}

export default function* updateLoginSaga() {
  yield takeLatest(type.UPDATE_LOGIN_REQUEST, updateLoginInSaga);
}
