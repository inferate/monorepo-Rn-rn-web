import { Text, TouchableOpacity, View } from "react-native";
import styled from "styled-components";

// export const WorkoutTimerWrapper = styled(View)`
//   bottom: 0;
//   left: 0;
//   width: 100%;
//   height: 50px;
// `;
export const WorkoutTimerContainer = styled(View)`
  width: 100%;
  padding: 10px;
  background-color: ${props => props.theme.backgroundStyle.secondary};
`;
export const TimerBox = styled(TouchableOpacity)`
  color: ${props => props.theme.secondary};
`;
export const TimerText = styled(Text)`
  font-size: 20px;
`;
export const ProgressBar = styled(View)`
 
  height: 3px;
  bottom: 20px;

  right: 20px;

  background-color: black;
`;

export const TimeWrapper = styled(View)`
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;
