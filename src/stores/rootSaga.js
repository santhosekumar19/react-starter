import { put, takeLatest, all } from 'redux-saga/effects';
function* fetchNews() {
  const json = yield fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json());    
  yield put({ type: "GET_POSTS", json: json, });
}
function* actionWatcher() {
     yield takeLatest('GET_POST', fetchNews)
}
export default function* rootSaga() {
   yield all([actionWatcher()]);
}