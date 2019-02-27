import { takeEvery, call, put, takeLatest } from 'redux-saga/effects';
import { fetchProducts, createNewProduct, editProduct, updateProduct, deleteProduct} from './api';
import * as Types from './types'
import { recFetchProducts, recEditProduct } from './actions';

function* callFetchProducts() {
    try{
        const products = yield call(fetchProducts);
        yield put(recFetchProducts(products));
    } catch (e) {
        console.log(e);
    }
}

function* callCreateProduct(action) {
    try {
        let newProduct = yield call(createNewProduct, action.product);
        yield call(action.router.push, '/products');
    } catch (e) {
        console.log(e);
    }
}

function* callEditProduct(action) {
    try{
        const product = yield call(editProduct, action.id);
        yield put(recEditProduct(product));
    } catch (e) {
        console.log(e);
    }
}

function* callUpdateProduct(action) {
    try {
        let product = yield call(updateProduct, action);
        yield call(action.router.push, '/products');
    } catch (e) {
        console.log(e);
    }
}

function* callDeleteProduct(action) {
    try {
        let product = yield call(deleteProduct, action.id);
        location.reload();
    } catch (e) {
        console.log(e);
    }
}

export function* watchProductsSaga() {
    yield takeEvery(Types.REQUEST_FETCH_PRODUCTS, callFetchProducts);
    yield takeLatest(Types.REQUEST_CREATE_PRODUCT, callCreateProduct);
    yield takeEvery(Types.REQUEST_EDIT_PRODUCT, callEditProduct);
    yield takeLatest(Types.REQUEST_UPDATE_PRODUCT, callUpdateProduct);
    yield takeLatest(Types.REQUEST_DELETE_PRODUCT, callDeleteProduct);
}
