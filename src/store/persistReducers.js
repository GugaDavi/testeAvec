import storage from '@react-native-community/async-storage';
import { persistReducer } from 'redux-persist';

import { citysAsyncStoreKey } from '../util/consts';

export default reducers => {
  const persistedReducer = persistReducer(
    {
      key: citysAsyncStoreKey,
      storage,
      whitelist: ['citys'],
    },
    reducers,
  );

  return persistedReducer;
};
