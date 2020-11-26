import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import * as type from "../TypeAction";
import axios from "axios";

import { resetPasswordSucced, resetPasswordFailed } from "../actions/index";

const apiUrl = "http://localhost:8000/users/password/reset";

export function* resetPasswordInSaga(action) {
  const data = {
    email: action.payload.email,
  };

  try {
    const response = yield call(axios.post, apiUrl, data);

    if (response) {
      yield put(resetPasswordSucced(response.data.data));
    }
  } catch (error) {
    yield put(resetPasswordFailed(error.response.data.message[0]));
  }
}

export default function* resetPasswordSaga() {
  yield takeLatest(type.RESET_PASSWORD_REQUEST, resetPasswordInSaga);
}
