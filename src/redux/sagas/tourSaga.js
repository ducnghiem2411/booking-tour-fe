import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import * as type from "../TypeAction";
import axios from "axios";

import {
  createPlaceSucced,
  createPlaceFailed,
  createTourFailed,
  createTourSucced,
} from "../actions/index";

const apiUrl = "http://localhost:8000/tours";

export function* createTourInSaga(action) {
  const data = {
    
    // image: action.payload.image,
    countryId: action.payload.countryId,
    country: action.payload.countryName,
    placeId: action.payload.placeId,
    place: action.payload.placeName,
    name: action.payload.tourName,
    checkIn: action.payload.checkIn,
    checkOut: action.payload.checkOut,
    price: action.payload.price,
    member: action.payload.member,
    description: action.payload.description,
  };
  try {
    const response = yield call(axios.post, apiUrl, data);

    if (response) {
      console.log("response", response);

      yield put(createTourSucced(response.data.data));
    }
  } catch (error) {
    yield put(createTourFailed(error.response));
  }
}

export default function* tourSaga() {
  yield takeLatest(type.CREATE_TOUR_REQUESTED, createTourInSaga);
}
