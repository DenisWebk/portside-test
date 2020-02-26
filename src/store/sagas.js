import { fork } from 'redux-saga/effects'
import userListSaga from './userList/saga';
import userProfileSaga from './userProfile/saga';

export default function* rootSaga() {
    yield fork(userListSaga);
    yield fork(userProfileSaga);
}