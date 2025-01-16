import styled from "styled-components/native";

export const InputLabel = styled.Text`
  padding-left: 10px;
  margin-bottom: 10px;
  font-size: 16px;
`;

export const InputContainer = styled.View`
  height: 50px;
  border: 1px solid;
  border-radius: 10px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-color: ${(props: { isActive: boolean; hasError: boolean }) =>
    props.isActive ? "green" : props.hasError ? "red" : "#ccc"};
`;

export const Input = styled.TextInput`
  padding-left: 10px;
  height: 50px;
  width: 100%;
`;

export const ErrorText = styled.Text`
  padding-left: 10px;
  margin-top: 10px;
  font-size: 16px;
  color: red;
`;
