import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { StatusBar } from 'react-native';

import './config/ReactotronConfig';
import Routes from './routes';

import { primaryColor } from './util/consts';

import { store, persistor } from './store';

const Index = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <StatusBar backgroundColor={primaryColor} barStyle="light-content" />
        <Routes />
      </PersistGate>
    </Provider>
  );
};

export default Index;
