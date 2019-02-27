import { combineReducers } from 'redux';
import { fork, all } from 'redux-saga/effects';
import products from './product/reducers';
import auth from './auth/reducers';
import alert from './alert/reducers';
import * as productSagas from './product/sagas';
import * as authSagas from './auth/sagas';

export const rootReducer = combineReducers({
    products,
    auth,
    alert
});

export function* rootSaga() {
    yield all([
        ...Object.values(productSagas),
        ...Object.values(authSagas),
    ].map(fork));
}