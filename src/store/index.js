import { combineReducers, createStore, applyMiddleware } from 'redux'
import userList from "./userList";
import user from './userProfile'
import createSagaMiddleware from 'redux-saga'
import rootSaga from "./sagas";

const sagas = createSagaMiddleware();
const reducers = combineReducers({
   userList,
   user
});

const store = createStore(reducers, applyMiddleware(sagas));
sagas.run(rootSaga);

export default store;

