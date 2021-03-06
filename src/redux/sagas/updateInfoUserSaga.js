import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import * as type from "../TypeAction";
import axios from "axios";

import { updateInfoUserSucced, updateInfoUserFailed } from "../actions/index";

export function* updateInfoUserInSaga(action) {
   
    
  
  const token = JSON.parse(localStorage.getItem('token'))

  const config = {
    headers: {
      "content-type": "multipart/form-data",
      "Authorization": `Bearer ${token}`
    },
  };
  // const headers = {
  //   "content-type": "multipart/form-data",
  //   "Authorization": `Bearer + ${token}`
    
  // }

  const apiUrl = `http://localhost:8000/users/profile/${action.payload.username}`;

  try {
    const formData = new FormData();
    formData.append("bio", action.payload.bio);
    formData.append("phone", action.payload.phone);
    formData.append("image", action.payload.image);

    const response = yield call(axios.put, apiUrl, formData, config );
    if (response) {
      yield put(updateInfoUserSucced(response.data.data))
    }
  } catch (error) {
    yield put(updateInfoUserFailed(error.response.data.message));
  }
}

export default function* updateInfoUserSaga() {
  yield takeLatest(type.UPDATE_INFO_USER_REQUEST, updateInfoUserInSaga);
}
