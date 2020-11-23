import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import * as type from "../TypeAction";
import axios from "axios";

import { createCountrySucced, createCountryFailed } from "../actions/index";

const apiUrl = "http://localhost:8000/countries";

export function* createCountryInSaga(action) {

  const data = {
    name: action.payload.name,
    description: action.payload.description,
    // image: action.payload.image,
  };
  try {
    const response = yield call(axios.post, apiUrl, data);

    if (response) {

      yield put(createCountrySucced(response.data.data));
    }
  } catch (error) {
    yield put(createCountryFailed(error.response));
  }
}

export default function* countrySaga() {
  yield takeLatest(type.CREATE_COUNTRY_REQUESTED, createCountryInSaga);
}
