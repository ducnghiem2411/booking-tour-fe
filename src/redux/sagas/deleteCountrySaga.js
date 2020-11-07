import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import * as type from "../TypeAction";
import axios from "axios";

import {
  deleteCountryItemSucced,
  deleteCountryItemFailed,
} from "../actions/index";


export function* deleteCountryInSaga(action) {
    

  try {
    const apiUrl = `http://localhost:8000/countries/${action.id}`;
    const response = yield call(axios.delete, apiUrl);

    if (response) {
      yield put(deleteCountryItemSucced(action.id));
    }
  } catch (error) {
    console.log('error', error)
    yield put(deleteCountryItemFailed(error));
  }
}

export default function* deleteCountrySaga() {
  yield takeLatest(type.DELETE_COUNTRY_REQUESTED, deleteCountryInSaga);
}
