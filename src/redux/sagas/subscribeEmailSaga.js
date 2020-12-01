import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import * as type from "../TypeAction";
import axios from "axios";

import {
  subscribeEmailSucced,
  subscribeEmailFailed,
} from "../actions/index";


export function* subscribeEmailInSaga(action) {

  const email = {
    email: action.email
  }
    

  try {
    const apiUrl = 'http://localhost:8000/tours/subscribe/registration';
    const response = yield call(axios.post, apiUrl, email);

    if (response) {
      yield put(subscribeEmailSucced(response.data.data));
    }
  } catch (error) {
    yield put(subscribeEmailFailed());
  }
}

export default function* subscribeEmailSaga() {
  yield takeLatest(type.SUBSCRIBE_EMAIL_REQUEST, subscribeEmailInSaga);
}
