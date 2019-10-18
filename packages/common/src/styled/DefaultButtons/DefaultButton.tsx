import React from "react";
import { Text, TouchableOpacity } from "react-native";
import styled from "styled-components";

interface IDefaultButtonProps {
  backgroundColor: string;
  onPress: () => void;
}

interface IDefaultButtonText {
  color: string;
  title?: string;
}
const ButtonContainer = styled(TouchableOpacity)<IDefaultButtonProps>`
	width: 100px;
	height: 40px
	padding: 12px;
	border-radius: 10px;	
  background-color: ${props =>
    props.backgroundColor
      ? props.theme.buttonStyles.main
      : props.theme.buttonStyles.default};
`;

const ButtonText = styled(Text)<IDefaultButtonText>`
  font-size: 15px;
  text-align: center;
  color: ${props =>
    props.color
      ? props.theme.textStyle.primary
      : props.theme.textStyles.thirdy};
`;

export const CustomButton: React.FC<
  IDefaultButtonProps & IDefaultButtonText
> = props => (
  <ButtonContainer
    backgroundColor={props.backgroundColor}
    onPress={props.onPress}>
    <ButtonText color={props.color}>{props.title}</ButtonText>
  </ButtonContainer>
);
