import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import * as type from "../TypeAction";
import axios from "axios";

import {
  deletePlaceItemSucced,
  deletePlaceItemFailed,
} from "../actions/index";


export function* deletePlaceInSaga(action) {
    

  try {
    const apiUrl = `http://localhost:8000/places/${action.id}`;
    const response = yield call(axios.delete, apiUrl);

    if (response) {
      yield put(deletePlaceItemSucced(action.id));
    }
  } catch (error) {
    yield put(deletePlaceItemFailed(error));
  }
}

export default function* deletePlaceSaga() {
  yield takeLatest(type.DELETE_PLACE_REQUESTED, deletePlaceInSaga);
}
