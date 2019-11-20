import { all, put, takeLatest, call } from 'redux-saga/effects';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import { listCitysSuccess } from './actions';

import { citysAsyncStoreKey } from '../../../util/consts';

export function* loadCitys() {
  try {
    const citys = yield call(AsyncStorage.getItem(citysAsyncStoreKey));

    console.tron.log(citys);

    yield put(listCitysSuccess(citys));
  } catch (error) {
    Alert.alert('Erro ao Carregar Cidades', 'Tente novamente mais tarde');
  }
}

export default all([takeLatest('@city/LIST_CITYS_SUCCESS', loadCitys)]);
