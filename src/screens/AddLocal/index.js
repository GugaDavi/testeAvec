import React from 'react';

import {
  Container,
  TitleView,
  Title,
  LocalInput,
  TextArea,
  SubmitButton,
} from './styles';
import Background from '../../components/Background';

export default function AddLocal() {
  return (
    <Background>
      <Container>
        <TitleView>
          <Title>Novo Local</Title>
        </TitleView>
        <LocalInput icon="border-color" placeholder="Nome" />
        <LocalInput icon="check" placeholder="Tipo" />
        <LocalInput icon="home" placeholder="Endereço" />
        <TextArea
          icon="note"
          placeholder="Informações Adicionais"
          multiline
          numberOfLines={5}
          maxLength={100}
        />
        <SubmitButton>Adicionar</SubmitButton>
      </Container>
    </Background>
  );
}
