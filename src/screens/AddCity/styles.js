import styled from 'styled-components/native';

import Input from '../../components/Input';
import Button from '../../components/Button';

export const Container = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
  padding: 20px 10px 20px 10px;
`;
export const TitleView = styled.View`
  padding-top: 20px;
`;
export const Title = styled.Text`
  font-size: 32px;
  color: #fff;
  text-align: center;
  margin: 20px 0px 20px 0px;
`;

export const CityName = styled(Input)`
  margin-bottom: 10px;
`;

export const CountryName = styled(Input)`
  margin-bottom: 10px;
`;

export const SubmitButton = styled(Button)`
  align-self: stretch;
`;
