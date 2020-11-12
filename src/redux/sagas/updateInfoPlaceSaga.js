import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import * as type from "../TypeAction";
import axios from "axios";

import {
  updateInfoPlaceItemSucced,
  updateInfoPlaceItemFailed,
} from "../actions/index";

export function* updateInfoPlaceInSaga(action) {
  try {
    const apiUrl = `http://localhost:8000/places/${action.id}`;
    const response  = yield call(axios.put, apiUrl, { 
      name: action.body.placeName,
      description: action.body.description,
    });
   
    if (response) {
      yield put(updateInfoPlaceItemSucced(response.data.data));
    }
  } catch (error) {
    yield put(updateInfoPlaceItemFailed(error));
  }
}

export default function* updateInfoPlaceSaga() {
  yield takeLatest(type.UPDATE_DATA_PLACE_REQUESTED, updateInfoPlaceInSaga);
}
