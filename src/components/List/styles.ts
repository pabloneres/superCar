import styled from "styled-components/native";

export const ListContainer = styled.View`
  flex: 1;
  padding: 16px;
  background-color: rgb(234, 234, 234);
`;

export const ListItem = styled.TouchableOpacity`
  padding: 12px;
  margin-bottom: 8px;
  border-radius: 8px;
  background-color: #fff;
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.1;
  shadow-radius: 4px;
  elevation: 2;
`;

export const ItemText = styled.Text`
  font-size: 16px;
  color: #333;
  font-weight: 500;
`;
