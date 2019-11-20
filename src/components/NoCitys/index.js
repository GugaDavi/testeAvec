import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Title, IconView, TextIcon } from './styles';

export default function NoCitys() {
  return (
    <Container>
      <Title>Sem Cidades Cadastradas</Title>
      <IconView>
        <TextIcon>Adicione uma nova</TextIcon>
        <Icon name="add" />
      </IconView>
    </Container>
  );
}
