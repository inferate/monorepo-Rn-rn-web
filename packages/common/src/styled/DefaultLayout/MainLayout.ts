import { Button, TouchableOpacity, View } from "react-native";
import styled from "styled-components";

export const TopHeader = styled(View)`
flex-direction:row
justify-content:space-between;
padding:5px;
`;

export const RepsCounter = styled(TouchableOpacity)`
  border-radius: 100%;
  padding: 20px;
  margin: auto;
  background-color: ${props => props.theme.backgroundStyle.secondary};
`;

export const EmptyRepsCounter = styled(TouchableOpacity)`
  border-radius: 100%;
  padding: 23px;
  padding-left: 25px;
  padding-right: 25px;
  margin: auto;
  background-color: ${props => props.theme.textStyle.empty};
`;
export const EmptyReps = styled(TouchableOpacity)`
  border-radius: 100%;
  padding: 30px;
  margin: auto;
  background-color: ${props => props.theme.textStyle.empty};
`;

export const CardActionButton = styled(Button)`
  background-color: ${props => props.theme.textStyle.empty};
`;
