import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import * as type from "../TypeAction";
import axios from "axios";

import {
  fetchDataCountrySucced,
  fetchDataCountryFailed,
} from "../actions/index";

const apiUrl = "http://localhost:8000/countries";

export function* fetchCountryInSaga(action) {
  try {
    const response = yield call(axios.get, apiUrl, null);

    if (response) {
      yield put(fetchDataCountrySucced(response.data));
    }
  } catch (error) {
    yield put(fetchDataCountryFailed(error));
  }
}

export default function* fetchCountrySaga() {
  yield takeLatest(type.FETCH_COUNTRY_REQUEST, fetchCountryInSaga);
}
