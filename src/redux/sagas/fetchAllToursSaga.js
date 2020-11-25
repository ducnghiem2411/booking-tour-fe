import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import * as type from "../TypeAction";
import axios from "axios";

import {
  fetchAllToursSucced,
  fetchAllToursFailed,
} from "../actions/index";



export function* fetchAllToursInSaga(action) {

  const apiUrl = 'http://localhost:8000/tours';


  try {
    
    const response = yield call(axios.get, apiUrl, null);


    if (response) {
      yield put(fetchAllToursSucced(response.data.data));
    }
  } catch (error) {
    yield put(fetchAllToursFailed(error));
  }
}

export default function* fetchAllToursSaga() {
  yield takeLatest(type.FETCH_ALL_TOURS_REQUEST, fetchAllToursInSaga);
}
