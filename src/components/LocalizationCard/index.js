import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  LocationName,
  Divisor,
  Type,
  Adress,
  Notes,
} from './styles';

export default function LocalizationCard({
  locationName,
  type,
  adress,
  notes,
}) {
  return (
    <Container>
      <LocationName>{locationName}</LocationName>
      <Divisor />
      {type && <Type>Tipo: {type}</Type>}
      {adress && <Adress>Endereço: {adress}</Adress>}
      <Notes>{notes}</Notes>
    </Container>
  );
}

LocalizationCard.propTypes = {
  locationName: PropTypes.string,
  type: PropTypes.string,
  adress: PropTypes.string,
  notes: PropTypes.string,
};

LocalizationCard.defaultProps = {
  locationName: null,
  type: null,
  adress: null,
  notes: null,
};
