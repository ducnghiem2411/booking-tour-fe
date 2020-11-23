import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import * as type from "../TypeAction";
import axios from "axios";

import {
  fetchReviewListSucced,
  fetchReviewsSucced,
  fetchReviewsFailed,
} from "../actions/index";

const apiUrl = "http://localhost:8000/reviews";

export function* fetchReviewsInSaga(action) {
  try {
    const response = yield call(axios.get, apiUrl, null);

    if (response) {
      // console.log('response', response)
      // yield put(fetchReviewsSucced(response.data));
    }
  } catch (error) {
    // yield put( fetchReviewsFailed(error));
  }
}

export default function* fetchReviewsSaga() {
  yield takeLatest(type.FETCH_REVIEWS_REQUEST, fetchReviewsInSaga);
}
