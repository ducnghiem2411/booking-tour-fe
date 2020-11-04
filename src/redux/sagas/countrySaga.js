import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import * as type from "../TypeAction";
import axios from "axios";

import { createCountrySucced, createCountryFailed,fetchDataCountryRequest } from "../actions/index";

const apiUrl = "https://5f854efbc29abd00161905ac.mockapi.io/user";

export function* createCountryInSaga(action) {
  const data = {
    name: action.payload.name,
    description: action.payload.description,
    image: action.payload.image,
  };
  try {
    const response = yield call(axios.post, apiUrl, data);

    if (response) {
      // console.log('response', response)
      yield put(createCountrySucced(response.data));
      // yield put(fetchDataCountryRequest());
    }
  } catch (error) {
    // debugger
    yield put(createCountryFailed(error));
  }
}

export default function* countrySaga() {
  yield takeLatest(type.CREATE_COUNTRY_REQUESTED, createCountryInSaga);
}
