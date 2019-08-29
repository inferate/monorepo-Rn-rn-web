import { Text, View } from "react-native";
import styled from "styled-components";

export const Container = styled(View)`
  flex: 1;
  background-color: ${props => props.theme.backgroundStyle.primary};
  justify-content: center;
  align-items: center;
`;

export const Title = styled(Text)`
  font-size: 24px;
  font-weight: 500;
  color: ${props => props.theme.backgroundStyle.secondary};
`;
