import { GET_USER, ON_USER_RESPONSE, ON_USER_FAIL } from './actionTypes';

export const getUser = (payload) => {
    return { type: GET_USER, payload }
};

export const onUserResponse = (response) => {
    return { type: ON_USER_RESPONSE, payload: response }
};

export const onUserFail = (err) => {
    return {type: ON_USER_FAIL }
};

