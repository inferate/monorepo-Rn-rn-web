import { Text, View } from "react-native";
import styled from "styled-components";

export const Container = styled(View)`
  flex: 1;
  width: 100%;
  margin: 20px;
  background-color: ${props => props.theme.backgroundStyle.primary};
  justify-content: center;
  align-items: center;
`;

export const Title = styled(Text)`
  font-size: 16px;
  font-weight: 500;
  color: ${props => props.theme.backgroundStyle.secondary};
`;

export const DefTextTitle = styled(Text)`
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  padding-right: 4px;
  color: ${props => props.theme.textStyle.primary};
`;
export const AppWrapper = styled(View)`
 
 flex:1;
  width:100%
  max-width:450px;
`;
export const AppContainer = styled(View)`
  height: 100%;
  align-items: center;
  flex: 1;
  height: 100%;
  justify-content: center;
`;
