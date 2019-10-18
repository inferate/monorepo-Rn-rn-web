import React from "react";
import { Text, TouchableOpacity } from "react-native";
import styled from "styled-components";

interface IButton {
  onPress: () => void;
  backgroundColor: string;
}

const WorkoutButton = styled(TouchableOpacity)<IButton>`
  width: 40px;
  height: 40px;
  background-color: ${props =>
    props.backgroundColor
      ? props.theme.buttonStyles.main
      : props.theme.buttonStyles.default};
  position: absolute;
  bottom: 20px;
  right: 20px;
  border-radius: 20px;
  box-shadow: 10px 5px 5px #000;
  align-items: center;
  justify-content: center;
`;
const ButtonText = styled(Text)`
  font-size: 17px;
  text-align: center;
  margin-left: 2px
  margin-bottom: 2
`;

export const CustomizedButton: React.FC<IButton> = props => (
  <WorkoutButton
    onPress={props.onPress}
    backgroundColor={props.backgroundColor}>
    <ButtonText>+</ButtonText>
  </WorkoutButton>
);
