import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import * as type from "../TypeAction";
import axios from "axios";

import {
  fetchDataPlaceSucced,
  fetchDataPlaceFailed,
} from "../actions/index";



export function* getFilterTourInSaga(action) {

  const apiUrl = "http://localhost:8000/tours";
  const filter = {
    country: action.payload.country,
    place: action.payload.place,
    member: action.payload.member,
    minprice: action.payload.min,
    maxprice: action.payload.max,

  }




  try {
    const response = yield call(axios.get, apiUrl, filter);


    if (response) {
      console.log('response', response)
      // yield put(getFilterTourSucced(response.data));
    }
  } catch (error) {
    // yield put(getFilterTourFailed(error));
  }
}

export default function* getFilterTourSaga() {
  yield takeLatest(type.GET_FILTER_TOUR_REQUEST, getFilterTourInSaga);
}
