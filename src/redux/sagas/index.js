import {all} from 'redux-saga/effects'
import loginSaga from './loginSaga'
import registerSaga from './registerSaga'
import countrySaga from './countrySaga'
import placeSaga from './placeSaga'
import fetchCountrySaga from './fetchCountrySaga'
import fetchPlaceSaga from './fetchPlaceSaga'
import deleteCountrySaga from './deleteCountrySaga'
import deletePlaceSaga from './deletePlaceSaga'
import updateInfoCountrySaga from './updateInfoCountrySaga'
import updateInfoPlaceSaga from './updateInfoPlaceSaga'
import getDataRowSaga from './getDataRowSaga'

export default function* rootSaga() {
    yield all([
        loginSaga(), 
        registerSaga(),
        countrySaga(),
        placeSaga(),
        fetchCountrySaga(),
        fetchPlaceSaga(),
        deleteCountrySaga(),
        deletePlaceSaga(),
        updateInfoCountrySaga(),
        updateInfoPlaceSaga(),
        getDataRowSaga()
        
    ])
}