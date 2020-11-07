import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import * as type from "../TypeAction";
import axios from "axios";

import {
  updateInfoCountryItemSucced,
  updateInfoCountryItemFailed,
} from "../actions/index";



export function* updateInfoCountryInSaga(action) {
  try {
    const apiUrl = `http://localhost:8000/countries/${action.id}`;
    const response = yield call(axios.put, apiUrl);
    console.log('response', response)


    if (response) {
      yield put(updateInfoCountryItemSucced(response.data));
    }
  } catch (error) {
    console.log('error', error)
    yield put(updateInfoCountryItemFailed(error));
  }
}

export default function* updateInfoCountrySaga() {
  yield takeLatest(type.GET_INFO_COUNTRY_ITEM_REQUEST, updateInfoCountryInSaga);
}
