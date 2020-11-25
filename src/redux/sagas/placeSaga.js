import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import * as type from "../TypeAction";
import axios from "axios";

import { createPlaceSucced, createPlaceFailed,fetchDataCountryRequest } from "../actions/index";

const apiUrl = "http://localhost:8000/places";

export function* createPlaceInSaga(action) {

  const config = {
    headers: {
      "content-type": "multipart/form-data"
    },
  };


  try {

    const formData = new FormData();
    
    formData.append("countryId",  action.payload.countryId );
    formData.append("country",  action.payload.country );
    formData.append("name",  action.payload.name );
    formData.append("description",  action.payload.description );
    formData.append("image",  action.payload.image );





    const response = yield call(axios.post, apiUrl,formData, config);

    if (response) {

      yield put(createPlaceSucced(response.data.data));
    }
  } catch (error) {
    yield put(createPlaceFailed(error.response.data.message));
  }
}

export default function* placeSaga() {
  yield takeLatest(type.CREATE_PLACE_REQUESTED, createPlaceInSaga);
}
