import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import * as type from "../TypeAction";
import axios from "axios";

import {
  updateInfoPlaceItemSucced,
  updateInfoPlaceItemFailed,
  updateInfoTourItemSucced,
  updateInfoTourItemFailed,
} from "../actions/index";

export function* updateInfoTourInSaga(action) {
 
  try {
    const apiUrl = `http://localhost:8000/tours/${action.id}`;
    const response  = yield call(axios.put, apiUrl, { 
      // countryId: action.countryId,
      // placeId: action.placeId,
      name: action.body.tourName,
      checkIn: action.body.dateString[0],
      checkOut: action.body.dateString[1],
      price: action.body.price,
      member: action.body.memNumber,
      // description: action.body.description,
    });
   
    if (response) {
      yield put(updateInfoTourItemSucced(response.data.data));
    }
  } catch (error) {
    yield put(updateInfoTourItemFailed(error));
  }
}

export default function* updateInfoTourSaga() {
  yield takeLatest(type.UPDATE_DATA_TOUR_REQUESTED, updateInfoTourInSaga);
}
