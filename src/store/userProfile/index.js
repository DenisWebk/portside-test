import { GET_USER, ON_USER_FAIL, ON_USER_RESPONSE } from './actionTypes';
const initialState = {
    data: null,
    isFetching: false
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_USER:
            return {
                ...state,
                isFetching: true
            };
        case ON_USER_RESPONSE:
            return {
                ...state,
                data: action.payload,
                isFetching: false
            };
        case ON_USER_FAIL:
            return {
                ...state,
                isFetching: false
            };
        default:
            return state
    }
}