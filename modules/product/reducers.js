import { RECEIVE_FETCH_PRODUCTS, RECEIVE_EDIT_PRODUCT } from "./types";
import { fromJS, List } from 'immutable';

const initialState = fromJS({
    products: [],
    product: ''
});

export default function (state = initialState, action) {
    switch (action.type) {
        case RECEIVE_FETCH_PRODUCTS:
            return List(action.products.data.map(item => fromJS(item)));
        case RECEIVE_EDIT_PRODUCT:
            return state.set('product', action.product.data);
        default:
            return state;
    }
}
