import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import * as type from "../TypeAction";
import axios from "axios";

import {
    fetchTopListDestinationSucced,
  fetchTopListDestinationFailed,
} from "../actions/index";

const apiUrl = "http://localhost:8000/countries/top-destination";

export function* fetchTopListDestinationInSaga(action) {
  try {
    const response = yield call(axios.get, apiUrl, null);


    if (response) {
        
      yield put(fetchTopListDestinationSucced(response.data.data));
    }
  } catch (error) {
    yield put(fetchTopListDestinationFailed(error));
  }
}

export default function* fetchTopListDestinationSaga() {
  yield takeLatest(type.FETCH_TOP_LIST_DESTINATION_REQUESTED, fetchTopListDestinationInSaga);
}
