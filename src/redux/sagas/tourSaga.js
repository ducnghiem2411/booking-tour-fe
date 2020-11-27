import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import * as type from "../TypeAction";
import axios from "axios";

import {
  createPlaceSucced,
  createPlaceFailed,
  createTourFailed,
  createTourSucced,
} from "../actions/index";

export function* createTourInSaga(action) {
  // console.log('action.payload', action.payload.images)

  // for(let i = 0;i < action.payload.images.length; i++){
  //   console.log('action.payload.images[i]', action.payload.images[i])
  // }
  try {
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };

    const apiUrl = "http://localhost:8000/tours";
    const formData = new FormData();
    formData.append("countryId", action.payload.countryId);
    formData.append("country", action.payload.countryName);
    formData.append("placeId", action.payload.placeId);
    formData.append("place", action.payload.placeName);
    formData.append("name", action.payload.tourName);
    formData.append("checkIn", action.payload.checkIn);
    formData.append("checkOut", action.payload.checkOut);
    formData.append("price", action.payload.price);
    formData.append("member", action.payload.member);
    formData.append("description", action.payload.description);
    for(let i = 0;i < action.payload.images.length; i++){
      formData.append("images", action.payload.images[i]);
    }


    
    // formData.append("images",  action.payload.images );

    const response = yield call(axios.post, apiUrl, formData, config);

    if (response) {
      yield put(createTourSucced(response.data.data));
    }
  } catch (error) {
    yield put(
      createTourFailed(error.response.data && error.response.data.message)
    );
  }
}

export default function* tourSaga() {
  yield takeLatest(type.CREATE_TOUR_REQUESTED, createTourInSaga);
}
