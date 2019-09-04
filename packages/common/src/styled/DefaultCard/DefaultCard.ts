import { View } from "react-native";
import styled from "styled-components";

export const WorkoutCard = styled(View)`
  border-radius: 3px;
  box-shadow: 10px 5px 5px #000;
  padding: 10px;
  elevation: 4px;
  background-color: ${props => props.theme.primary};
  flex-direction: column;
`;

export const WorkoutWrapper = styled(View)`
  background-color: ${props => props.theme.primaryBackground};
  width: 100%;
`;
