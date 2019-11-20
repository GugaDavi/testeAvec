import { all } from 'redux-saga/effects';

import citys from './citys/saga';

export default function* rootSaga() {
  return yield all([citys]);
}
