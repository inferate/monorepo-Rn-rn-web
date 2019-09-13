import { Text, TouchableOpacity, View } from "react-native";
import styled from "styled-components";

export const WorkoutTimerWrapper = styled(View)`
  position: absolute;
  bottom: 0;
  align-items:center;
  padding:30px
  padding-horizontal:30px
  justify-content: space-between;
  flex-direction: row;
  left: 0;
  width: 100%;
  height: 50px;
  background-color: ${props => props.theme.backgroundStyle.secondary};
`;
export const WorkoutTimerContainer = styled(View)`
  width: 100%;
  padding: 20px;
`;
export const TimerBox = styled(TouchableOpacity)`
  color: ${props => props.theme.secondary};
`;
export const TimerText = styled(Text)`
    color:${props => props.theme.secondary}
    font-size:20px;
`;
