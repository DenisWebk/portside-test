import { GET_USER_LIST, ON_USER_LIST_FAIL, ON_USER_LIST_RESPONSE } from './actionTypes';
const initialState = {
    data: null,
    isFetching: false
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_USER_LIST:
            return {
                ...state,
                isFetching: true
            };
        case ON_USER_LIST_RESPONSE:
            return {
                ...state,
                data: action.payload,
                isFetching: false
            };
        case ON_USER_LIST_FAIL:
            return {
                ...state,
                isFetching: false
            };
        default:
            return state
    }
}