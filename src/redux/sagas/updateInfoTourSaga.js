import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import * as type from "../TypeAction";
import axios from "axios";

import {
  updateInfoPlaceItemSucced,
  updateInfoPlaceItemFailed,
  updateInfoTourItemSucced,
  updateInfoTourItemFailed,
} from "../actions/index";

export function* updateInfoTourInSaga(action) {

  const config = {
    headers: {
      "content-type": "multipart/form-data"
    },
  };

 
  try {
    const apiUrl = `http://localhost:8000/tours/${action.id}`;

    // const formData = new FormData();
    
    // formData.append("name",  action.body.tourName );
    // formData.append("checkIn", action.body.dateString[0]);
    // formData.append("checkOut", action.body.dateString[1]);
    // formData.append("price", action.body.price);
    // formData.append("member", action.body.memNumber);
    // // formData.append("description", action.body.description);
    // formData.append("description", action.body.description);



    const response  = yield call(axios.put, apiUrl, { 
      countryId: action.countryId,
      placeId: action.placeId,
      name: action.body.tourName,
      checkIn: action.body.dateString[0],
      checkOut: action.body.dateString[1],
      price: action.body.price,
      member: action.body.memNumber,
      // description: action.body.description,
    });
   
    if (response) {
      yield put(updateInfoTourItemSucced(response.data.data));
    }
  } catch (error) {
    yield put(updateInfoTourItemFailed(error.response.data.message));
  }
}

export default function* updateInfoTourSaga() {
  yield takeLatest(type.UPDATE_DATA_TOUR_REQUESTED, updateInfoTourInSaga);
}
