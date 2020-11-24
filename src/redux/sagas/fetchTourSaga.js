import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import * as type from "../TypeAction";
import axios from "axios";

import {
  fetchDataTourSucced,
  fetchDataTourFailed,
} from "../actions/index";



export function* fetchTourInSaga(action) {

  const apiUrl = `http://localhost:8000/tours?${action.paramsString}`;


  try {
    
    const response = yield call(axios.get, apiUrl, null);


    if (response) {
      yield put(fetchDataTourSucced(response.data.data));
    }
  } catch (error) {
    yield put(fetchDataTourFailed(error));
  }
}

export default function* fetchTourSaga() {
  yield takeLatest(type.FETCH_TOUR_REQUEST, fetchTourInSaga);
}
