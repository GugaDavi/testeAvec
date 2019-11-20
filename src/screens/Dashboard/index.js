import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import { Container, TitleView, Title, CitysList } from './styles';
import Background from '../../components/Background';
import Card from '../../components/CityCard';
import NoCitys from '../../components/NoCitys';

export default function Dashboard({ navigation }) {
  const citys = useSelector(state => state.citys.citys);

  useEffect(() => {}, [citys]);

  function handleAbout() {
    navigation.navigate('Localizations');
  }

  return (
    <Background>
      <TitleView>
        <Title>Cidades</Title>
      </TitleView>
      <Container>
        {citys.length > 0 ? (
          <CitysList
            data={citys}
            keyExtractor={(city, index) => String(index)}
            renderItem={({ item }) => (
              <Card cityName={item.name} onPress={() => handleAbout(item.id)} />
            )}
          />
        ) : (
          <NoCitys />
        )}
      </Container>
    </Background>
  );
}

Dashboard.propTypes = {
  navigation: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
    .isRequired,
};
