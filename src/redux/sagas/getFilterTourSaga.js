import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import * as type from "../TypeAction";
import axios from "axios";

import {
  getFilterTourSucced,
  getFilterTourFailed,
} from "../actions/index";



export function* getFilterTourInSaga(action) {

  const apiUrl = `http://localhost:8000/tours?${action.paramsString}`;
 
  try {
    const response = yield call(axios.get, apiUrl, null);


    if (response) {
      console.log('response', response)
      yield put(getFilterTourSucced(response.data.data));
    }
  } catch (error) {
    yield put(getFilterTourFailed(error.response.data));
  }
}

export default function* getFilterTourSaga() {
  yield takeLatest(type.GET_FILTER_TOUR_REQUEST, getFilterTourInSaga);
}
