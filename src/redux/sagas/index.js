import {all} from 'redux-saga/effects'
import loginSaga from './loginSaga'
import registerSaga from './registerSaga'
import countrySaga from './countrySaga'
import placeSaga from './placeSaga'
import fetchCountrySaga from './fetchCountrySaga'
import fetchPlaceSaga from './fetchPlaceSaga'
import fetchTourSaga from './fetchTourSaga'
import deleteCountrySaga from './deleteCountrySaga'
import deletePlaceSaga from './deletePlaceSaga'
import updateInfoCountrySaga from './updateInfoCountrySaga'
import updateInfoPlaceSaga from './updateInfoPlaceSaga'
import getDataRowSaga from './getDataRowSaga'
import tourSaga from './tourSaga'
import deleteTourSaga from './deleteTourSaga'
import updateInfoTourSaga from './updateInfoTourSaga'
import bookingTourSaga from './bookingTourSaga'
import fetchTopListDestinationSaga from './fetchTopListDestinationSaga'
import submitUserReviewSaga from './submitUserReviewSaga'
import fetchInfoTourSaga from './fetchInfoTourSaga'
import fetchReviewsListSaga from './fetchReviewsListSaga'
import updateLoginSaga from './updateLoginSaga'
import fetchReviewsSaga from './fetchReviewsSaga'
import fetchDataItemTourSaga from './fetchDataItemTourSaga'

export default function* rootSaga() {
    yield all([
        loginSaga(), 
        registerSaga(),
        countrySaga(),
        placeSaga(),
        tourSaga(),
        fetchCountrySaga(),
        fetchPlaceSaga(),
        fetchTourSaga(),
        deleteCountrySaga(),
        deletePlaceSaga(),
        deleteTourSaga(),
        updateInfoCountrySaga(),
        fetchTopListDestinationSaga(),
        updateInfoPlaceSaga(),
        updateInfoTourSaga(),
        fetchInfoTourSaga(),
        getDataRowSaga(),
        bookingTourSaga(),
        submitUserReviewSaga(),
        fetchReviewsListSaga(),
        updateLoginSaga(),
        fetchReviewsSaga(),
        fetchDataItemTourSaga()
        
    ])
}