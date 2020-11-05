import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import * as type from "../TypeAction";
import axios from "axios";

import {
  deleteCountryItemSucced,
  deleteCountryItemFailed,
} from "../actions/index";


export function* deleteCountryInSaga(action) {
    

  try {
    const apiUrl = `https://5f854efbc29abd00161905ac.mockapi.io/user/${action.id}`;
    console.log('id', action.id)
    const response = yield call(axios.delete, apiUrl, null);
    // console.log('response', response)

    if (response) {
        console.log('response', response)
      yield put(deleteCountryItemSucced(action.id));
    }
  } catch (error) {
    yield put(deleteCountryItemFailed(error));
  }
}

export default function* deleteCountrySaga() {
  yield takeLatest(type.DELETE_COUNTRY_REQUESTED, deleteCountryInSaga);
}
