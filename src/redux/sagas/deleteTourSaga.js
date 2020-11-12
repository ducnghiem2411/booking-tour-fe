import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import * as type from "../TypeAction";
import axios from "axios";

import {
  deletePlaceItemSucced,
  deletePlaceItemFailed,
  deleteTourItemSucced,
  deleteTourItemFailed,
} from "../actions/index";


export function* deleteTourInSaga(action) {
    

  try {
    const apiUrl = `http://localhost:8000/tours/${action.id}`;
    const response = yield call(axios.delete, apiUrl);

    if (response) {
      yield put(deleteTourItemSucced(action.id));
    }
  } catch (error) {
    yield put(deleteTourItemFailed(error));
  }
}

export default function* deleteTourSaga() {
  yield takeLatest(type.DELETE_TOUR_REQUESTED, deleteTourInSaga);
}
