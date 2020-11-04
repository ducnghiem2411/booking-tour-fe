import {all} from 'redux-saga/effects'
import loginSaga from './loginSaga'
import registerSaga from './registerSaga'
import countrySaga from './countrySaga'
import fetchCountrySaga from './fetchCountrySaga'

export default function* rootSaga() {
    yield all([
        loginSaga(), 
        registerSaga(),
        countrySaga(),
        fetchCountrySaga()
        
    ])
}