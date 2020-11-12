import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import * as type from "../TypeAction";
import axios from "axios";

import {
  getDataRowTableSucced,
  getDataRowTableFailed,
} from "../actions/index";


export function* getDataRowInSaga(action) {
    

  try {
    const apiUrl = `http://localhost:8000/countries/${action.id.key}`;
    const response = yield call(axios.get, apiUrl);

    if (response) {
      yield put(getDataRowTableSucced(response.data.data));
    }
  } catch (error) {
    yield put(getDataRowTableFailed(error));
  }
}

export default function* getDataRowSaga() {
  yield takeLatest(type.GET_DATA_ROW_TABLE_REQUESTED, getDataRowInSaga);
}
