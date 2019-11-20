import styled from 'styled-components/native';

import { backgroundCard } from '../../util/consts';

export const Container = styled.View`
  background-color: ${backgroundCard};
  padding: 10px 10px 10px 30px;
  border-radius: 40px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;
export const CityName = styled.Text`
  font-size: 24px;
`;
