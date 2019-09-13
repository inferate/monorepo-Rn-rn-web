import React from "react";
import {
  TimerBox,
  TimerText,
  WorkoutTimerWrapper
} from "../../styled/DefaultLayout/DefaultLayoutSection";

interface IWorkoutTimer {
  onButtonPress: () => void;
}

export const WorkoutTimer: React.FC<IWorkoutTimer> = ({ onButtonPress }) => {
  return (
    <WorkoutTimerWrapper>
      <TimerText>text</TimerText>
      <TimerBox onPress={onButtonPress}>
        <TimerText>X</TimerText>
      </TimerBox>
    </WorkoutTimerWrapper>
  );
};
