import { RECEIVE_FETCH_PRODUCTS, RECEIVE_EDIT_PRODUCT } from "./types";

const initialState = {
    products: [],
    product: ''
};

export default function (state = initialState, action) {
    switch (action.type) {
        case RECEIVE_FETCH_PRODUCTS:
            return  {
                products: action.products.data
            }
        case RECEIVE_EDIT_PRODUCT:
            return  {
                product: action.product.data
            }
        default:
            return state;
    }
}
