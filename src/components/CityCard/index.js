import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';

import { Container, CityName } from './styles';

export default function Card({ cityName, onPress }) {
  return (
    <Container>
      <CityName>{cityName}</CityName>
      <Icon name="keyboard-arrow-right" size={40} onPress={onPress} />
    </Container>
  );
}

Card.propTypes = {
  cityName: PropTypes.string,
  onPress: PropTypes.func,
};

Card.defaultProps = {
  cityName: '',
  onPress: null,
};
