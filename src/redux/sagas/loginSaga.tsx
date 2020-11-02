import { call, put, takeLatest } from "redux-saga/effects";
import * as type from "../TypeAction";
import axios from "axios";

import { loginSucced, loginFailed } from "../actions/index";

const apiUrl = "https://conduit.productionready.io/api/users/login";

export function* signInSaga(action: any) {
  const data = {
    user: {
      email: action.payload.email,
      password: action.payload.password,
    },
  };
  try {
    const response = yield call(axios.post, apiUrl, data);
    if (response.status == 200) {
      yield put(loginSucced(response.data.user.token));
    }
  } catch (error) {
    yield put(loginFailed(error.response.data))
  }
}

export default function* loginSaga() {
  yield takeLatest(type.LOGIN_REQUESTED, signInSaga);
}
