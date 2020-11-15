import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import * as type from "../TypeAction";
import axios from "axios";

import { registerSucced, registerFailed } from "../actions/index";

const apiUrl = "http://localhost:8000/users";


export function* registerInSaga(action) {
  
   const user = {
      email: action.payload.email,
      username: action.payload.username,
      password: action.payload.password,
    }
  
  try {
    const response = yield call(axios.post, apiUrl, user);

    if (response) {
      console.log('response', response)
      yield put(registerSucced());  
    }
  } catch (error) {
    yield put(registerFailed(error.response.data));
    
    
  }
}

export default function* registerSaga() {
  yield takeLatest(type.REGISTER_REQUEST, registerInSaga);
}
