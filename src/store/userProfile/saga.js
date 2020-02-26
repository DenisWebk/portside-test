import { call, put, takeLatest } from 'redux-saga/effects'
import { onUserResponse, onUserFail } from "./actions";
import { GET_USER } from "./actionTypes";

function* fetchUser(action) {
    try {
        const usersList = yield call(fetch, `https://reqres.in/api/users/${action.payload}`);
        const response = yield usersList.json();
        yield put(onUserResponse(response.data));
    } catch (err) {
        yield put(onUserFail(err));
    }
}

export default function* getUser() {
    yield takeLatest(GET_USER, fetchUser);
}