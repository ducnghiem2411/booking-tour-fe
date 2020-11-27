import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import * as type from "../TypeAction";
import axios from "axios";

import {
    getInfoUserFailed,
    getInfoUserSucced,
} from "../actions/index";


export function* getInfoUserInSaga(action) {
    

  try {
    const apiUrl = `http://localhost:8000/users/${action.token}`;
    const response = yield call(axios.get, apiUrl);

    if (response) {
      yield put(getInfoUserSucced(response.data.data));
    }
  } catch (error) {
    yield put(getInfoUserFailed(error.response.data));
  }
}

export default function* getInfoUserSaga() {
  yield takeLatest(type.GET_INFO_USER_REQUEST, getInfoUserInSaga);
}
