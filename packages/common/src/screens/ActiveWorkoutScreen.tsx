import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { RootStoreContext } from "../stores/RootStore";
import { Container } from "../styled";
import { WorkoutWrapper } from "../styled/DefaultCard/DefaultCard";
import { WorkoutTimerContainer } from "../styled/DefaultLayout/DefaultLayoutSection";
import { WorkoutContent } from "../WorkoutContent/WorkoutContent";
import { WorkoutTimer } from "../WorkoutContent/WorkoutTimer/WorkoutTimer";

interface IActiveWorkoutScreen {}

export const ActiveWorkoutScreen: React.FC<IActiveWorkoutScreen> = observer(
  () => {
    const rootStore = useContext(RootStoreContext);

    return (
      <Container>
        {rootStore.workoutStore.currentExercise.map(el => {
          return (
            <WorkoutWrapper>
              <WorkoutContent
                onSetPress={index => {
                  const value = el.sets[index];
                  let newValue: string;
                  if (value === "") {
                    newValue = `${el.reps}`;
                  } else if (value === "0") {
                    newValue = "";
                  } else {
                    newValue = `${parseInt(value) - 1}`;
                  }
                  el.sets[index] = newValue;
                }}
                key={el.exercise}
                sets={el.sets}
                weightTimesReps={`${el.numSets}x${el.reps} ${el.weight} kgm`}
                exercise={el.exercise}
              />
            </WorkoutWrapper>
          );
        })}
        <WorkoutTimerContainer>
          <WorkoutTimer onButtonPress={() => {}} />
        </WorkoutTimerContainer>
      </Container>
    );
  }
);
