import {all} from 'redux-saga/effects'
import loginSaga from './loginSaga'
import registerSaga from './registerSaga'
import countrySaga from './countrySaga'
import fetchCountrySaga from './fetchCountrySaga'
import deleteCountrySaga from './deleteCountrySaga'
import updateInfoCountrySaga from './updateInfoCountrySaga'
import getDataRowSaga from './getDataRowSaga'

export default function* rootSaga() {
    yield all([
        loginSaga(), 
        registerSaga(),
        countrySaga(),
        fetchCountrySaga(),
        deleteCountrySaga(),
        updateInfoCountrySaga(),
        getDataRowSaga()
        
    ])
}