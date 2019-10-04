import React from "react";
import {
  ProgressBar,
  TimerBox,
  TimerText,
  TimeWrapper,
  WorkoutTimerContainer
} from "../../styled/DefaultLayout/DefaultLayoutSection";

interface IWorkoutTimer {
  onButtonPress: () => void;
  currentTime: string;
  percent: string;
}

export const WorkoutTimer: React.FC<IWorkoutTimer> = ({
  onButtonPress,
  currentTime,
  percent
}) => {
  return (
    <WorkoutTimerContainer>
      <ProgressBar style={{ width: percent }} />
      <TimeWrapper>
        <TimerText>{currentTime}</TimerText>
        <TimerBox onPress={onButtonPress}>
          <TimerText>X</TimerText>
        </TimerBox>
      </TimeWrapper>
    </WorkoutTimerContainer>
  );
};
