import React from "react";
import { Container } from "../styled";
import { WorkoutWrapper } from "../styled/DefaultCard/DefaultCard";
import { WorkoutContent } from "../WorkoutContent/WorkoutContent";

interface IActiveWorkoutScreen {}
export const ActiveWorkoutScreen: React.FC<IActiveWorkoutScreen> = () => {
  return (
    <Container>
      <WorkoutWrapper>
        <WorkoutContent
          reps={["5", "5", "5", "5", "5"]}
          weightTimesReps={"5X5 260 kgm"}
          exercise={"Squat"}
        />
      </WorkoutWrapper>
    </Container>
  );
};
