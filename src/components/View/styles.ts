import styled from "styled-components/native";

export const ViewContainer = styled.View`
  margin-top: ${({ mt }: { mt: number }) => mt}px;
  margin-bottom: ${({ mb }: { mb: number }) => mb}px;
  margin-left: ${({ ml }: { ml: number }) => ml}px;
  margin-right: ${({ mr }: { mr: number }) => mr}px;
`;
