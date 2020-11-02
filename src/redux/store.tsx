import { createStore, compose, applyMiddleware } from "redux";
import rootSaga from "./sagas/index";
import rootReducers from "./reducers/index";
import thunk from 'redux-thunk'
import createSagaMiddlewave from 'redux-saga'

const sagaMiddleware = createSagaMiddlewave();


const composeEnhancers =
    typeof window === 'object' &&
        process.env.NODE_ENV === 'development' &&
        (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
        : compose
const enhancer = composeEnhancers(applyMiddleware(thunk, sagaMiddleware))
const store = createStore(rootReducers, enhancer)

sagaMiddleware.run(rootSaga);

export default store
