import styled from 'styled-components/native';

export const TitleView = styled.View`
  padding-top: 20px;
`;
export const Title = styled.Text`
  font-size: 32px;
  color: #fff;
  text-align: center;
`;
export const Container = styled.ScrollView`
  padding: 20px 10px 0px 10px;
`;

export const CitysList = styled.FlatList.attrs({
  showVerticalScollIndicator: false,
})`
  margin-bottom: 90px;
`;
