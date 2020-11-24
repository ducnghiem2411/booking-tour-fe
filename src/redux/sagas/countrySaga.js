import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import * as type from "../TypeAction";
import axios from "axios";

import { createCountrySucced, createCountryFailed } from "../actions/index";

const apiUrl = "http://localhost:8000/countries";

export function* createCountryInSaga(action) {

  const config = {
    headers: {
      "content-type": "multipart/form-data"
    },
  };


  try {
    const formData = new FormData();
    
    formData.append("name",  action.payload.name );
    formData.append("description", action.payload.description);
    formData.append("image", action.payload.image);
    const response = yield call(axios.post,apiUrl, formData, config);

    if (response) {
      // console.log('response', response)

      yield put(createCountrySucced(response.data.data));
    }
  } catch (error) {
    yield put(createCountryFailed(error.response.data.message));
  }
}

export default function* countrySaga() {
  yield takeLatest(type.CREATE_COUNTRY_REQUESTED, createCountryInSaga);
}
