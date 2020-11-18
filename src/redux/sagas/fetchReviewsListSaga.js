import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import * as type from "../TypeAction";
import axios from "axios";

import {
  fetchDataPlaceSucced,
  fetchDataPlaceFailed,
  fetchInfoTourSucced,
  fetchInfoTourFailed,
  fetchReviewsListFailed,
  fetchReviewsListSucced,
} from "../actions/index";



export function* fetchReviewsListInSaga(action) {

  const apiUrl = `http://localhost:8000/reviews/${action.id}`

  try {
    
    const response = yield call(axios.get, apiUrl, null);


    if (response) {
      yield put(fetchReviewsListSucced(response.data.data));
    }
  } catch (error) {
    yield put(fetchReviewsListFailed(error));
  }
}

export default function* fetchReviewsListSaga() {
  yield takeLatest(type.FETCH_REVIEWS_LIST_REQUEST, fetchReviewsListInSaga);
}
