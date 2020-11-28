import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import * as type from "../TypeAction";
import axios from "axios";

import {
  updateInfoCountryItemSucced,
  updateInfoCountryItemFailed,
} from "../actions/index";

export function* updateInfoCountryInSaga(action) {

  const config = {
    headers: {
      "content-type": "multipart/form-data"
    },
  };


  const apiUrl = `http://localhost:8000/countries/${action.id}`;

  
  try {

    const formData = new FormData();
    
    formData.append("name",  action.body.countryName );
    formData.append("description", action.body.description);
    formData.append("image", action.image);

    
    const response = yield call(axios.put, apiUrl, formData, config );
    if(response){
      yield put(updateInfoCountryItemSucced(response.data.data))
    }
  } catch (error) {
    yield put(updateInfoCountryItemFailed(error.response.data.message));
  }
}

export default function* updateInfoCountrySaga() {
  yield takeLatest(type.UPDATE_DATA_COUNTRY_REQUESTED, updateInfoCountryInSaga);
}
