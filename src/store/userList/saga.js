import { call, put, takeLatest } from 'redux-saga/effects'
import { onUserListResponse, onUserListFail } from "./actions";
import { GET_USER_LIST } from "./actionTypes";

function* fetchUsersList() {
    try {
        const usersList = yield call(fetch, `https://reqres.in/api/users`);
        const response = yield usersList.json();
        yield put(onUserListResponse(response.data));
    } catch (err) {
        yield put(onUserListFail(err));
    }
}

export default function* getUsersList() {
    yield takeLatest(GET_USER_LIST, fetchUsersList);
}