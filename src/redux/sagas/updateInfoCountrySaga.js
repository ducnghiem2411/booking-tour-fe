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
    yield call(axios.put, apiUrl, {
      name: action.body.countryName,
      description: action.body.description,
    });
    const response = yield call(axios.get, `http://localhost:8000/countries/${action.id}`)
    if(response){
      console.log('response', response)
      yield put(updateInfoCountryItemSucced(response.data.data))
    }
  } catch (error) {
    console.log("error", error);
    yield put(updateInfoCountryItemFailed(error));
  }
}

export default function* updateInfoCountrySaga() {
  yield takeLatest(type.UPDATE_DATA_COUNTRY_REQUESTED, updateInfoCountryInSaga);
}
