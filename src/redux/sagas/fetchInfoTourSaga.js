import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import * as type from "../TypeAction";
import axios from "axios";

import {
  fetchDataPlaceSucced,
  fetchDataPlaceFailed,
  fetchInfoTourSucced,
  fetchInfoTourFailed,
} from "../actions/index";



export function* fetchInfoTourInSaga(action) {

  const apiUrl = `http://localhost:8000//tours/${action.id}`;

  try {
    
    const response = yield call(axios.get, apiUrl, null);


    if (response) {
      console.log('response', response)
      // yield put(fetchInfoTourSucced(response.data));
    }
  } catch (error) {
    yield put(fetchInfoTourFailed(error));
  }
}

export default function* fetchInfoTourSaga() {
  yield takeLatest(type.FETCH_INFO_TOUR_REQUEST, fetchInfoTourInSaga);
}
