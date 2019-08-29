import React from "react";
import { Text, TouchableOpacity } from "react-native";
import styled from "styled-components";

interface IDefaultButtonProps {
  backgroundColor: string;
}

interface IDefaultButtonText {
  color: string;
  //   title:string
}
const ButtonContainer = styled(TouchableOpacity)<IDefaultButtonProps>`
	width: 100px;
	height: 40px
	padding: 12px;
	border-radius: 10px;	
	background-color: ${props =>
    props.theme.buttonStyles.main
      ? props.theme.buttonStyles.main
      : props.theme.buttonStyles.default};
`;

const ButtonText = styled(Text)<IDefaultButtonText>`
  font-size: 15px;
  text-align: center;
  color: ${props =>
    props.theme.textStyle
      ? props.theme.textStyle.thirdy
      : props.theme.backgroundStyle.default};
`;

export const CustomButton = (
  props: IDefaultButtonProps & IDefaultButtonText & any
) => (
  <ButtonContainer backgroundColor={props.backgroundColor}>
    <ButtonText color={props.color}>{props.title}</ButtonText>
  </ButtonContainer>
);
