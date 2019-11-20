import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { StatusBar } from 'react-native';

import './config/ReactotronConfig';
import Routes from './routes';

// import { store, persistor } from './store';

const Index = () => {
  return (
    <Provider>
      <PersistGate>
        <StatusBar backgroundColor="#fff" barStyle="dark-content" />
        <Routes />
      </PersistGate>
    </Provider>
  );
};

export default Index;
