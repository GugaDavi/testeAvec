import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';

import { primaryColor } from '../../util/consts';

export default styled(LinearGradient).attrs({
  colors: ['#fff', primaryColor],
})`
  flex: 1;
  color: rgba(2, 2, 2, 0.7);
`;
