import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import * as type from "../TypeAction";
import axios from "axios";

import {
  deleteCountryItemSucced,
  deleteCountryItemFailed,
  bookingTourSucced,
  bookingTourFailed,
} from "../actions/index";


export function* bookingTourInSaga(action) {

  const apiUrl = 'http://localhost:8000/booking';

  const tour = {
    tourId: action.payload.id,
    tour: action.payload.name
  }
    

  try {
    const token = JSON.parse(localStorage.getItem('token'))
    const headerAuth = {
      headers: { Authorization: 'Bearer ' + token }
  };
    
    
    const response = yield call(axios.post, apiUrl, tour, headerAuth);

    if (response && response.data) {
      yield put(bookingTourSucced());
    }
  } catch (error) {
    console.log('error.response', error.response)
    yield put(bookingTourFailed(error.response.data.message));
  }
}

export default function* bookingTourSaga() {
  yield takeLatest(type.BOOKING_TOUR_REQUEST, bookingTourInSaga);
}
