import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import * as type from "../TypeAction";
import axios from "axios";

import {
  fetchDataTourSucced,
  fetchDataTourFailed,
} from "../actions/index";



export function* fetchTourInSaga(action) {
  try {
    const apiUrl = `http://localhost:8000/tours?${action.paramsString}`;
    const response = yield call(axios.get, apiUrl, null);


    if (response && response.status == 200) {
      yield put(fetchDataTourSucced(response.data));
    }
  } catch (error) {
    yield put(fetchDataTourFailed(error));
  }
}

export default function* fetchTourSaga() {
  yield takeLatest(type.FETCH_TOUR_REQUEST, fetchTourInSaga);
}
