import { call, all, put, takeLatest } from 'redux-saga/effects';
import { setUser } from '../reducers/userReducer';

function* fetchUser() {
    try {
        // yield => basically it's es6 async await, wait for call and continue
        const response = yield call(API.fetchUser);
        const user = response.content.content.credentials.name;
        yield put(setUser(user));
    } catch (e) {
        console.log(e);
    }
}

function* userSaga() {
    yield takeLatest('USER_FETCH_REQUESTED', fetchUser);
}

export default function* rootSaga() {
    yield all([userSaga()]);
}