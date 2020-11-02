import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import * as type from "../TypeAction";
import axios from "axios";

import { registerSucced, registerFailed } from "../actions/index";

const apiUrl = "https://conduit.productionready.io/api/users";


export function* registerInSaga(action: any) {
  const data = {
    user: {
      email: action.payload.email,
      username: action.payload.username,
      password: action.payload.password,
    },
  };
  try {
    const response = yield call(axios.post, apiUrl, data);

    if (response && response.status == 200) {
      yield put(registerSucced());  
    }
  } catch (error) {
    // debugger
    yield put(registerFailed(error.response.data));
    
    
  }
}

export default function* registerSaga() {
  yield takeLatest(type.REGISTER_REQUEST, registerInSaga);
}
