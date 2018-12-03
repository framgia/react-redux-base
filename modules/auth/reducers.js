import { RECEIVE_LOGIN_AUTH, RECEIVE_CURRENT_USER } from "./types";
import { getCookie } from './../../utils/cookie';
import { fromJS } from 'immutable';

const initialState = fromJS({
    isAuthenticated: getCookie('token') ? true : false,
    user: {}
});

export default function (state = initialState, action) {
    switch (action.type) {
        case RECEIVE_LOGIN_AUTH:
            return state.set('isAuthenticated', action.decoded ? true : false)
        case RECEIVE_CURRENT_USER:
            return state.set('user', action.user)
        default:
            return state;
    }
}
