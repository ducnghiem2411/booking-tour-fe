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
    yield call(axios.put, apiUrl, {
      countryId: action.id,
      country: action.body.country,
      name: action.body.name,
      description: action.body.description,
    });
    const response = yield call(axios.get, `http://localhost:8000/places/${action.id}`)
    console.log('response', response)
    if(response){
      yield put(updateInfoPlaceItemSucced(response.data.data))
    }
  } catch (error) {
    yield put(updateInfoPlaceItemFailed(error));
  }
}

export default function* updateInfoPlaceSaga() {
  yield takeLatest(type.UPDATE_DATA_PLACE_REQUESTED, updateInfoPlaceInSaga);
}


