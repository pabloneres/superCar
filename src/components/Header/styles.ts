import styled from "styled-components/native";

export const HeaderContainer = styled.View`
  padding: 20px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const HeaderWelcome = styled.View`
  flex: 1;
  flex-direction: center;
  align-items: center;
  margin-top: 10px;
`;

export const HeaderNameText = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;

export const HeaderLogoutButton = styled.TouchableOpacity`
  width: 50px;
`;
