import * as Types from './types';
import {fromJS} from 'immutable';

const initialState = fromJS({
	success: '',
	error: '',
	errors: []
});

export default function (state = initialState, action) {
    switch (action.type) {
        case Types.RECEIVE_SUCCESS_MESSAGE:
            return state.set('success', action.success)

        case Types.RECEIVE_ERRORS_MESSAGE:
            return state.set('errors', action.errors)
        case Types.RECEIVE_ERROR_MESSAGE:
            return state.set('error', action.error)
        default:
            return state;
    }
}
