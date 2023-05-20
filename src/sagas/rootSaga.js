import { call, all, put, takeLatest } from 'redux-saga/effects';
import { API } from '../api/index';
import { setUser } from '../reducers/userReducer';
import { edit } from '../reducers/taskReducer';

function * fetchUser () {
  try {
    // yield => basically it's es6 async await, wait for call and continue
    // const response = yield call(API.fetchUser);
    // const user = response.content.content.credentials.name;
    // yield put(setUser(user));
  } catch (e) {
    console.log(e);
  }
}

function * fetchTasks () {
  try {
    const response = yield call(API.fetchTasks);
    const tasks = response.tasks;
    yield put(edit(tasks));
  } catch (e) {
    console.log(e);
  }
}

function * userSaga () {
  yield takeLatest('USER_FETCH_REQUESTED', fetchUser);
}

export default function * rootSaga () {
  yield all([userSaga(), fetchTasks()]);
}
