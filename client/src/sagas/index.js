import { put, takeLatest, all } from 'redux-saga/effects';

function* fetchProducts() {
    const requestUrl = 'http://127.0.0.1:8000/api/flowers/';
    const products = yield fetch(requestUrl)
        .then(response => response.json());

    yield put({ type: "PRODUCTS_FETCHED", payload: {products} });
}

function* fetchProduct(payload) {
    console.log(payload);

    const requestUrl = `http://127.0.0.1:8000/api/flowers/${payload.itemId}`;
    const product = yield fetch(requestUrl)
        .then(response => response.json());

    yield put({ type: "PRODUCT_FETCHED", payload: {product} });
}

function* actionWatcher() {
    yield takeLatest('GET_PRODUCT', fetchProduct);
    yield takeLatest('GET_PRODUCTS', fetchProducts);
}

export default function* rootSaga() {
    yield all([
        actionWatcher(),
    ]);
}