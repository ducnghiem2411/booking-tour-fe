import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import * as type from "../TypeAction";
import axios from "axios";

import {
  fetchDataPlaceSucced,
  fetchDataPlaceFailed,
} from "../actions/index";

const apiUrl = "http://localhost:8000/places";

export function* fetchPlaceInSaga(action) {
  try {
    const response = yield call(axios.get, apiUrl, null);


    if (response ) {
      yield put(fetchDataPlaceSucced(response.data));
    }
  } catch (error) {
    yield put(fetchDataPlaceFailed(error));
  }
}

export default function* fetchPlaceSaga() {
  yield takeLatest(type.FETCH_PLACE_REQUEST, fetchPlaceInSaga);
}
