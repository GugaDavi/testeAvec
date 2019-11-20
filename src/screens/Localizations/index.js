import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';

import { Container, FlatButton } from './styles';

import Background from '../../components/Background';
import Card from '../../components/LocalizationCard';

export default function Localizations({ navigation }) {
  function addLocale() {
    navigation.navigate('AddLocal');
  }

  return (
    <Background>
      <Container>
        <Card
          locationName="Maceió"
          type="Cidade Praiana"
          adress="Rua São Francisco"
          notes="Cidade Arretada"
        />
      </Container>
      <FlatButton onPress={() => addLocale()}>
        <Icon name="add" size={30} />
      </FlatButton>
    </Background>
  );
}

Localizations.propTypes = {
  navigation: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
    .isRequired,
};
