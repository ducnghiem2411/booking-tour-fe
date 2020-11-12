import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import * as type from "../TypeAction";
import axios from "axios";

import { createPlaceSucced, createPlaceFailed,fetchDataCountryRequest } from "../actions/index";

const apiUrl = "http://localhost:8000/places";

export function* createPlaceInSaga(action) {
  const data = {
      countryId: action.payload.countryId,
      country: action.payload.country,
      name: action.payload.name,
      description: action.payload.description,
    // image: action.payload.image,
  };
  try {
    const response = yield call(axios.post, apiUrl, data);

    if (response) {

      yield put(createPlaceSucced(response.data.data));
    }
  } catch (error) {
    yield put(createPlaceFailed(error.response));
  }
}

export default function* placeSaga() {
  yield takeLatest(type.CREATE_PLACE_REQUESTED, createPlaceInSaga);
}
