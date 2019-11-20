import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.ScrollView`
  margin-top: 40px;
  padding: 20px 10px 0px 10px;
`;

export const FlatButton = styled(RectButton)`
  background-color: #fff;
  padding: 10px;
  position: absolute;
  border-radius: 40px;
  bottom: 20;
  right: 20;
`;
