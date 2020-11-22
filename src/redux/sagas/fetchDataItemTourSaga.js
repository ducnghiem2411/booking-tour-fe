import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import * as type from "../TypeAction";
import axios from "axios";

import {
  dataItemTourSucced,
  dataItemTourFailed,
} from "../actions/index";



export function* fetchDataItemTourInSaga(action) {
  try {
    const apiUrl = `http://localhost:8000/tours/${action.id}`;
    const response = yield call(axios.get, apiUrl, null);


    if (response) {
      yield put(dataItemTourSucced(response.data.data));
    }
  } catch (error) {
    yield put(dataItemTourFailed(error));
  }
}

export default function* fetchDataItemTourSaga() {
  yield takeLatest(type.DATA_ITEM_TOUR_REQUESTED, fetchDataItemTourInSaga);
}
