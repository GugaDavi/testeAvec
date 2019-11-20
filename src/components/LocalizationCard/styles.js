import styled from 'styled-components/native';

import { backgroundCard } from '../../util/consts';

export const Container = styled.View`
  background-color: ${backgroundCard};
  padding: 20px 20px 20px 20px;

  margin-bottom: 10px;
`;

export const LocationName = styled.Text`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;
export const Divisor = styled.View`
  border: 0.2px solid black;
  align-self: stretch;
  margin: 10px 0px 10px 0px;
`;
export const Type = styled.Text`
  font-size: 21px;
  line-height: 25px;
  margin-bottom: 5px;
`;
export const Adress = styled.Text`
  font-size: 18px;
  line-height: 21px;
  margin-bottom: 5px;
`;
export const Notes = styled.Text`
  font-size: 16px;
  line-height: 19px;
`;
