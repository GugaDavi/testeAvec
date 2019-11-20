import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  TitleView,
  Title,
  CityName,
  CountryName,
  SubmitButton,
} from './styles';
import Background from '../../components/Background';

export default function AddCity({ navigation }) {
  return (
    <Background>
      <Container>
        <TitleView>
          <Title>Nova Cidade</Title>
        </TitleView>
        <CityName icon="location-city" placeholder="Nome da Cidade" />
        <CountryName icon="explore" placeholder="Pais" />
        <SubmitButton>Adicionar</SubmitButton>
      </Container>
    </Background>
  );
}

AddCity.navigationOptions = {
  tabBarLabel: 'Nova Cidade',
  tabBarIcon: <Icon name="add" size={25} color="#fff" />,
};

AddCity.propTypes = {
  navigation: PropTypes.objectOf([PropTypes.object, PropTypes.array])
    .isRequired,
};
