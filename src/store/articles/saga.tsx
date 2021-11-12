import { call, put, takeEvery, delay } from '@redux-saga/core/effects';
import { requestSuccess, requestError } from './actions';
import { UsersCommentsData, UsersPostsData, UsersData } from './types';

const commentsAPI = 'https://jsonplaceholder.typicode.com/comments';
const postsAPI = 'https://jsonplaceholder.typicode.com/posts';
const usersAPI = 'https://jsonplaceholder.typicode.com/users';

const getData = (url: string) => {
  return fetch(url)
    .then(response => response.json())
    .catch(error => {
      throw error;
    });
};

function* fetchUsers() {
  try {
    const comments: UsersCommentsData[] = yield call(getData, commentsAPI);
    const posts: UsersPostsData[] = yield call(getData, postsAPI);
    const users: UsersData[] = yield call(getData, usersAPI);
    yield delay(500);
    yield put(requestSuccess({ comments, posts, users }));
  } catch (e) {
    yield put(requestError());
  }
}

export default function* usersWatcher() {
  yield takeEvery('REQUEST_DATA', fetchUsers);
  // yield takeEvery('SINGLE_USER_REQUESTING', fetchSingleUser);
  // yield takeEvery('POST_SINGLE_USER', postRequest);
}

// function* fetchSingleUser(action) {
//   try {
//     const singleUser = yield call(getSingleUser, action.payload);
//     yield delay(500);
//     yield put(singleUserSuccess(singleUser));
//   } catch {
//     yield put(usersError());
//   }
// }

// function* postRequest(action) {
//   try {
//     yield call(postUser, action.payload);
//     yield delay(1000);
//     yield put(postSingleUserSuccess());
//     yield delay(1000);
//     yield put(postSingleUserCloseAlert());
//   } catch {
//     yield put(postUsersError());
//   }
// }

// const getSingleUser = id => {
//   return fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
//     .then(response => response.json())
//     .catch(error => {
//       throw error;
//     });
// };

// const postUser = payload => {
//   return fetch('https://jsonplaceholder.typicode.com/posts', {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify(payload),
//   })
//     .then(response => {
//       console.log(response.status);
//     })
//     .then(data => console.log(data));
// };
