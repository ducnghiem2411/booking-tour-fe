import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import * as type from "../TypeAction";
import axios from "axios";

import {
  fetchDataPlaceSucced,
  fetchDataPlaceFailed,
  fetchAllReviewsSucced,
  fetchAllReviewsFailed,
} from "../actions/index";



export function* fetchAllReviewsInSaga(action) {

  const apiUrl = 'http://localhost:8000/reviews';

  try {
    
    const response = yield call(axios.get, apiUrl, null);


    if (response) {
      yield put(fetchAllReviewsSucced(response.data.data));
    }
  } catch (error) {
    yield put(fetchAllReviewsFailed(error));
  }
}

export default function* fetchAllReviewsSaga() {
  yield takeLatest(type.FETCH_ALL_REVIEWS_REQUEST, fetchAllReviewsInSaga);
}
