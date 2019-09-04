import { View } from "react-native";
import styled from "styled-components";

export const TopHeader = styled(View)`
flex-direction:row
justify-content:space-between;
padding:5px;
`;

export const RepsCounter = styled(View)`
  border-radius: 100%;
  padding: 20px;
  margin: auto;
  background-color: ${props => props.theme.backgroundStyle.secondary};
`;
