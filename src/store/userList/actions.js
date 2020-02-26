import { GET_USER_LIST, ON_USER_LIST_RESPONSE, ON_USER_LIST_FAIL } from './actionTypes';

export const getUserList = () => {
    return { type: GET_USER_LIST }
};

export const onUserListResponse = (response) => {
    return { type: ON_USER_LIST_RESPONSE, payload: response }
};

export const onUserListFail = (err) => {
    return {type: ON_USER_LIST_FAIL }
};

