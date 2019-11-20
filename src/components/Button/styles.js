import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { darken } from 'polished';

import { primaryColor } from '../../util/consts';

export const Container = styled(RectButton)`
  height: 50px;
  background: ${darken(0.5, primaryColor)};
  border-radius: 4px;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
`;
