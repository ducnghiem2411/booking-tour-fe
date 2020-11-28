import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import * as type from "../TypeAction";
import axios from "axios";

import {
  updateInfoPlaceItemSucced,
  updateInfoPlaceItemFailed,
} from "../actions/index";

export function* updateInfoPlaceInSaga(action) {

  const config = {
    headers: {
      "content-type": "multipart/form-data"
    },
  };


  try {
    const apiUrl = `http://localhost:8000/places/${action.id}`;

    const formData = new FormData();
    
    formData.append("name",  action.body.placeName );
    formData.append("description", action.body.description);
    formData.append("image", action.image);

    // { 
    //   name: action.body.placeName,
    //   description: action.body.description,
    // }


    const response  = yield call(axios.put, apiUrl, formData, config );
   
    if (response) {
      yield put(updateInfoPlaceItemSucced(response.data.data));
    }
  } catch (error) {
    yield put(updateInfoPlaceItemFailed(error.response.data.message));
  }
}

export default function* updateInfoPlaceSaga() {
  yield takeLatest(type.UPDATE_DATA_PLACE_REQUESTED, updateInfoPlaceInSaga);
}
