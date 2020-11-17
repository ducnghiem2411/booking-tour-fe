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
    
    const response = yield call(axios.post, apiUrl, tour);

    if (response) {
      console.log('response', response)
      // yield put(bookingTourSucced(action.id));
    }
  } catch (error) {
    yield put(bookingTourFailed(error));
  }
}

export default function* bookingTourSaga() {
  yield takeLatest(type.BOOKING_TOUR_REQUEST, bookingTourInSaga);
}
